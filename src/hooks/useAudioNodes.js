import { useEffect, useRef, useState, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';

export default function useAudioNodes({ nodes, wires, },) {
  console.log('useAudioNodes', nodes, wires,);
  const mediaStreamRef = useRef(null,);
  const [, setTimer,] = useState(0,);
  const live = useRef(Array(nodes.length,).fill(null,),);
  useEffect(() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioNodes = nodes.map(async (node,) => {
      if (node.type === NODE_TYPE.OSCILLATOR) {
        const oscillator = audioCtx.createOscillator();
        oscillator.type = node.properties.type;
        oscillator.detune.setValueAtTime(
          node.properties.detune,
          audioCtx.currentTime,
        );
        oscillator.frequency.setValueAtTime(
          node.properties.frequency,
          audioCtx.currentTime,
        );
        oscillator.start();
        if (node.properties.duration) {
          oscillator.stop(
            audioCtx.currentTime + Number(node.properties.duration,),
          );
        }
        return oscillator;
      }
      if (node.type === NODE_TYPE.BIQUAD_FILTER) {
        const filter = audioCtx.createBiquadFilter();
        filter.Q.value = node.properties.Q;
        filter.frequency.value = node.properties.frequency;
        filter.gain.value = node.properties.gain;
        filter.type = node.properties.type;
        return filter;
      }
      if (node.type === NODE_TYPE.MICROPHONE) {
        try {
          mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
            audio: true,
          },);
          const mic = audioCtx.createMediaStreamSource(mediaStreamRef.current,);

          return mic;
        } catch (err) {
          console.warn('Microphone not found', err,);
        }
      }
      if (node.type === NODE_TYPE.BUFFER) {
        const buffer = audioCtx.createBufferSource();
        buffer.loop = node.properties.loop;
        buffer.detune.setValueAtTime(
          node.properties.detune,
          audioCtx.currentTime,
        );
        buffer.playbackRate.setValueAtTime(
          node.properties.playbackRate,
          audioCtx.currentTime,
        );
        buffer.loopStart = node.properties.loopStart;
        buffer.loopEnd = node.properties.loopEnd;
        return buffer;
      }
      if (node.type === NODE_TYPE.GAIN) {
        const gain = audioCtx.createGain();
        gain.gain.value = node.properties.gain;
        return gain;
      }
      if (node.type === NODE_TYPE.ANALYSER) {
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = node.properties.fftSize;
        return analyser;
      }
      if (node.type === NODE_TYPE.DELAY) {
        const delay = audioCtx.createDelay(179,);
        delay.delayTime.setValueAtTime(
          node.properties.delay,
          audioCtx.currentTime,
        );
        return delay;
      }
      if (node.type === NODE_TYPE.PAN) {
        const pan = audioCtx.createStereoPanner();
        pan.pan.setValueAtTime(node.properties.pan, audioCtx.currentTime,);
        return pan;
      }
      return audioCtx.destination;
    },);

    const sampleData = ({
      analyser,
      buffer,
      dataArray,
      properties: { duration = 1, },
    },) =>
      new Promise((resolve, reject,) => {
        const myArrayBuffer = audioCtx.createBuffer(
          2,
          audioCtx.sampleRate * duration,
          audioCtx.sampleRate,
        );
        // myArrayBuffer
        const offset = 0;
        try {
          setTimeout(() => {
            analyser.getFloatTimeDomainData(dataArray,);
            myArrayBuffer.copyToChannel(
              dataArray,
              0,
              offset * analyser.frequencyBinCount,
            );
            myArrayBuffer.copyToChannel(
              dataArray,
              1,
              offset * analyser.frequencyBinCount,
            );
            buffer.buffer = myArrayBuffer;
            buffer.start();
            resolve(true,);
          }, duration * 1000,);
        } catch (e) {
          reject(e,);
        }
      },);

    wires.forEach(async (wire,) => {
      const from = await audioNodes[wire.from];
      const to = await audioNodes[wire.to];
      try {
        if (nodes[wire.to].type === NODE_TYPE.BUFFER) {
          const analyser = audioCtx.createAnalyser();
          from.connect(analyser,);
          analyser.fftSize = 32768;
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Float32Array(bufferLength,);
          // const dataArray = new Uint8Array(bufferLength,);

          await sampleData({
            analyser,
            buffer: to,
            dataArray,
            properties: nodes[wire.from].properties,
          },);

          // analyser.connect(to,);
        } else {
          from.connect(to,);
        }

        if (nodes[wire.to].type === NODE_TYPE.ANALYSER) {
          live.current[wire.to] = to;
          //! force component update due to using ref
          setTimer(new Date().getTime(),)
        }
      } catch (e) {
        console.warn('Failed to connect node x to y', e,);
      }
    },);

    return () => {
      // disconnect media source
      mediaStreamRef.current?.getTracks?.().forEach((track,) => track.stop(),);

      // disconnect all audio nodes from their destination
      audioNodes.forEach((audioNode,) => {
        audioNode?.disconnect?.();
      },);

      // close context
      audioCtx.close();
    };
  }, [nodes, wires,],);

  return live;
}
