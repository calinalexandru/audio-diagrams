import { useEffect, useRef, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';

export default function useAudioNodes({ nodes, wires, },) {
  const mediaStreamRef = useRef(null,);
  useEffect(() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioNodes = nodes
      // .filter((node) => [NODE_TYPE.OSCILLATOR].includes(node.type))
      .map(async (node,) => {
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
            const mic = audioCtx.createMediaStreamSource(
              mediaStreamRef.current,
            );

            return mic;
          } catch (err) {
            console.warn('Microphone not found', err,);
          }
        }
        if (node.type === NODE_TYPE.BUFFER) {
          const buffer = audioCtx.createBufferSource();
          buffer.loop = true;
          return buffer;
        }
        if (node.type === NODE_TYPE.GAIN) {
          const gain = audioCtx.createGain();
          gain.gain.value = node.properties.gain;
          return gain;
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

    const sampleData = (analyser, buffer, dataArray,) =>
      new Promise((resolve, reject,) => {
        const myArrayBuffer = audioCtx.createBuffer(
          2,
          audioCtx.sampleRate * 3,
          audioCtx.sampleRate,
        );
        // every milisec
        try {
          const reqAnim = setInterval(() => {
            analyser.getByteFrequencyData(dataArray,);
            for (
              let channel = 0;
              channel < myArrayBuffer.numberOfChannels;
              channel++
            ) {
              const nowBuffering = myArrayBuffer.getChannelData(channel,);
              for (let i = 0; i < analyser.frequencyBinCount; i++) {
                nowBuffering[i] = dataArray[i]; // Math.random() * 2 - 1;
              }
            }
          }, 100,);

          setTimeout(() => {
            clearInterval(reqAnim,);
            buffer.buffer = myArrayBuffer;
            buffer.start();
            resolve(true,);
          }, 2000,);
        } catch (e) {
          reject(e,);
        }
      },);

    wires.forEach(async (wire,) => {
      console.log('connecting.wire', wire,);
      console.log('audioNodes', audioNodes,);
      const from = await audioNodes[wire.from];
      const to = await audioNodes[wire.to];
      try {
        if (nodes[wire.to].type === NODE_TYPE.BUFFER) {
          const analyser = audioCtx.createAnalyser();
          from.connect(analyser,);
          analyser.fftSize = 2048;
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength,);

          await sampleData(analyser, to, dataArray,);

          // analyser.connect(to,);
        } else {
          from.connect(to,);
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
}
