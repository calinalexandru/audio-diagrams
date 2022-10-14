import { useEffect } from 'preact/hooks';
import { NODE_TYPE } from '../constants';

export default function useAudioNodes({ nodes, properties }) {
  useEffect(() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioNodes = nodes
      .filter((node) => [NODE_TYPE.OSCILLATOR].includes(node))
      .map((node) => {
        if (node === NODE_TYPE.OSCILLATOR) {
          const oscillator = audioCtx.createOscillator();
          oscillator.type = properties.oscillator.type;
          oscillator.detune.setValueAtTime(
            properties.oscillator.detune,
            audioCtx.currentTime
          );
          oscillator.frequency.setValueAtTime(
            properties.oscillator.frequency,
            audioCtx.currentTime
          );
          oscillator.start();
          return oscillator;
        }
      });
    if (audioNodes.length && nodes.includes(NODE_TYPE.OUTPUT)) {
      // connect last node to audio output
      audioNodes[audioNodes.length - 1].connect(audioCtx.destination);
    }

    return () => {
      // disconnect all audio nodes from their destination
      audioNodes.forEach((audioNode) => {
        audioNode.disconnect();
      });
    };
  }, [nodes]);
}
