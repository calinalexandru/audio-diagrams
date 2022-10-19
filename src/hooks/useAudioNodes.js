import { useEffect, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';

export default function useAudioNodes({ nodes, wires, },) {
  useEffect(() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioNodes = nodes
      // .filter((node) => [NODE_TYPE.OSCILLATOR].includes(node.type))
      .map((node,) => {
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
    wires.forEach((wire,) => {
      // console.log('connecting.wire', wire,);
      try {
        audioNodes[wire.from].connect(audioNodes[wire.to],);
      } catch (e) {
        console.warn('Failed to connect node x to y', e,);
      }
    },);

    return () => {
      // disconnect all audio nodes from their destination
      audioNodes.forEach((audioNode,) => {
        audioNode?.disconnect?.();
      },);
    };
  }, [nodes, wires,],);
}
