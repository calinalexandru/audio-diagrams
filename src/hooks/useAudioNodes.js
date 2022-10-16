import { useEffect } from 'preact/hooks';
import { NODE_TYPE } from '../constants';

export default function useAudioNodes({ nodes, wires }) {
  useEffect(() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioNodes = nodes
      // .filter((node) => [NODE_TYPE.OSCILLATOR].includes(node.type))
      .map((node) => {
        if (node.type === NODE_TYPE.OSCILLATOR) {
          const oscillator = audioCtx.createOscillator();
          oscillator.type = node.properties.type;
          oscillator.detune.setValueAtTime(
            node.properties.detune,
            audioCtx.currentTime
          );
          oscillator.frequency.setValueAtTime(
            node.properties.frequency,
            audioCtx.currentTime
          );
          oscillator.start();
          return oscillator;
        } else if (node.type === NODE_TYPE.GAIN) {
          const gain = audioCtx.createGain();
          gain.gain.value = node.properties.gain;
          return gain;
        } else {
          return audioCtx.destination;
        }
      });
    wires.forEach((wire) => {
      console.log('connecting.wire', wire);
      try {
        audioNodes[wire.from].connect(audioNodes[wire.to]);
      } catch (e) {
        console.warn('Failed to connect node x to y', e);
      }
    });

    return () => {
      // disconnect all audio nodes from their destination
      audioNodes.forEach((audioNode) => {
        audioNode.disconnect();
      });
    };
  }, [nodes, wires]);
}
