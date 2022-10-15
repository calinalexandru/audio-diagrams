import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useRef } from 'react';
import { DEFAULT_NODES, NODE_TYPE } from '../constants';
import useAudioNodes from '../hooks/useAudioNodes';
import Line from '../primitives/Line';
import { useImmerx } from '../store/state';
import Oscillator from './oscillator';
import Output from './output';

const Container = ({ children }) => (
  <div
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      background: '#eee',
    }}
  >
    {children}
  </div>
);

const oscObj = {
  type: NODE_TYPE.OSCILLATOR,
  properties: {
    type: 'sine',
    frequency: 440,
    detune: 0,
  },
  position: {
    x: 0,
    y: 0,
    width: '100px',
    height: '50px',
  },
};

const fromPos = { position: undefined };
// const toPos = { position: undefined };

export default function Main() {
  const [{ nodes = [], wires = [] }, update] = useImmerx();
  console.log('Main.state.nodes', nodes);
  // create web audio api context
  // const oscRef = useRef({});
  // const outputRef = useRef({});

  useAudioNodes({ nodes, wires });

  const clearAllNodes = () => {
    update((draft) => {
      draft.nodes = [
        draft.nodes.find((node) => node.type === NODE_TYPE.OUTPUT),
      ];
      draft.wires = [];
      draft.connecting = [];
    });
  };

  const cancelConnection = () => {
    update((draft) => void (draft.connecting = []));
  };

  const clearAllWires = () => {
    update((draft) => {
      draft.wires = [];
      draft.connecting = [];
    });
  };

  const addNode = () => {
    update((draft) => {
      draft.nodes.push({ ...oscObj });
    });
  };

  const outputIndex = nodes.findIndex((node) => node.type === NODE_TYPE.OUTPUT);

  return (
    <Container>
      <div
        style={{
          position: 'absolute',
          right: 0,
        }}
      >
        <button onClick={clearAllNodes}>Remove all audio nodes</button>
        <button onClick={cancelConnection}>Cancel connection</button>
        <button onClick={clearAllWires}>Clear all wires</button>
      </div>
      <button onClick={addNode}>Add Oscillator</button>
      {nodes.map(
        (node, index) =>
          node.type === NODE_TYPE.OSCILLATOR && <Oscillator index={index} />
      )}
      <Output index={outputIndex} />
      {wires.map(({ from: fromIndex, to: toIndex }, index) => {
        const to = nodes?.[toIndex]?.position;
        const from = nodes?.[fromIndex]?.position;
        return to && from && <Line from={from} to={to} />;
      })}
    </Container>
  );
}
