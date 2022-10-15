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
        } else {
          return audioCtx.destination;
        }
      });
    console.log('audioNodes, nodes', audioNodes, nodes);
    // wires.forEach((wire) => {
    // audioNodes[wire.from].connect(audioNodes[wire.to]);
    // });

    return () => {
      // disconnect all audio nodes from their destination
      audioNodes.forEach((audioNode) => {
        audioNode.disconnect();
      });
    };
  }, [nodes, wires]);
}
