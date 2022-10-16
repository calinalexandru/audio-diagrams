import { State } from 'immerx';
import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useRef } from 'react';
import Gain from '../components/gain';
import Oscillator from '../components/Oscillator';
import Output from '../components/Output';
import {
  DEFAULT_GAIN,
  DEFAULT_GAIN_POSITION,
  DEFAULT_NODES,
  DEFAULT_OSCILLATOR,
  DEFAULT_OSCILLATOR_POSITION,
  NODE_TYPE,
} from '../constants';
import useAudioNodes from '../hooks/useAudioNodes';
import Line from '../primitives/Line';
import { useImmerx } from '../store/state';

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

const fromPos = { position: undefined };
// const toPos = { position: undefined };

export default function Main() {
  const [{ nodes = [], wires = [], connecting = [], positions = [] }, update] =
    useImmerx();
  // create web audio api context
  // const oscRef = useRef({});
  // const outputRef = useRef({});
  //

  console.log('Main.wires', wires);
  console.log('Main.nodes', nodes);
  console.log('Main.positions', positions);

  useAudioNodes({ nodes, wires });

  const clearAllNodes = () => {
    update((draft) => {
      draft.nodes = [
        draft.nodes.find((node) => node.type === NODE_TYPE.OUTPUT),
      ];
      draft.wires = [];
      draft.connecting = [];
      draft.positions = [positions[0]];
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

  const addOscilator = () => {
    update((draft) => {
      draft.nodes.push({ ...DEFAULT_OSCILLATOR });
      draft.positions.push({ ...DEFAULT_OSCILLATOR_POSITION });
    });
  };

  const addGain = () => {
    update((draft) => {
      draft.nodes.push({ ...DEFAULT_GAIN });
      draft.positions.push({ ...DEFAULT_GAIN_POSITION });
    });
  };

  const removeLine = (index) => {
    update((draft) => void draft.wires.splice(index, 1));
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
        <button
          onClick={cancelConnection}
          style={{
            background: connecting.length ? 'antiquewhite' : '#fff',
          }}
        >
          Cancel connection
        </button>
        <button onClick={clearAllWires}>Clear all wires</button>
      </div>
      <button onClick={addOscilator}>Add Oscillator</button>
      <button onClick={addGain}>Add Gain</button>
      {nodes.map(
        (node, index) =>
          (node.type === NODE_TYPE.OSCILLATOR && (
            <Oscillator index={index} />
          )) ||
          (node.type === NODE_TYPE.GAIN && <Gain index={index} />)
      )}
      <Output index={outputIndex} />
      {wires.map(({ from: fromIndex, to: toIndex }, index) => {
        const to = positions?.[toIndex];
        const from = positions?.[fromIndex];
        return (
          to &&
          from && (
            <Line
              onClick={() => {
                removeLine(index);
              }}
              from={from}
              to={to}
            />
          )
        );
      })}
    </Container>
  );
}
