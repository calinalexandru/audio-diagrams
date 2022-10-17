import { h } from 'preact';
import { useRef } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';
import { useImmerx } from '../store/state';
import BoxNode from './BoxNode';

const lens = {
  get: (state) => state.nodes,
  set: (stateDraft, nodes) => {
    // console.log('stateDraft', stateDraft, nodes);
    stateDraft.nodes = nodes;
  },
};

export default function Oscillator({ index }) {
  const elRef = useRef();
  const buttonRef = useRef();
  const [state, update] = useImmerx();

  console.log('Oscillator', state);

  useMouseMove({
    elRef,
    position: state.positions[index],
    index,
    nodes: state.nodes,
  });

  const setOscillatorType = (type) => {
    update((draft) => void (draft.nodes[index].properties.type = type));
  };

  const setOscillatorFreq = (freq) => {
    update((draft) => void (draft.nodes[index].properties.frequency = freq));
  };

  const setOscillatorDetune = (val) => {
    update((draft) => void (draft.nodes[index].properties.detune = val));
  };

  return (
    <BoxNode
      ref={elRef}
      index={index}
      style={{
        background: 'orange',
      }}
      name="Oscillator"
    >
      <div>
        Freq:{' '}
        <input
          style={{ width: '50px' }}
          type="number"
          value={state.nodes[index].properties.frequency}
          onChange={(e) => {
            setOscillatorFreq(Number(e.target.value));
          }}
        />
      </div>
      <div>
        Detune:{' '}
        <input
          type="number"
          style={{ width: '50px' }}
          value={state.nodes[index].properties.detune}
          onChange={(e) => {
            setOscillatorDetune(e.target.value);
          }}
        />
      </div>
      <div style={{ display: 'none' }}>
        <label>
          <input
            type="radio"
            value="sine"
            id="sine"
            name="type"
            onClick={() => {
              setOscillatorType('sine');
            }}
          />
          Sine
        </label>
        <label>
          <input
            type="radio"
            value="square"
            id="square"
            name="type"
            onClick={() => {
              setOscillatorType('square');
            }}
          />
          Square
        </label>
        <label>
          <input
            type="radio"
            value="sawtooth"
            id="sawtooth"
            name="type"
            onClick={() => {
              setOscillatorType('sawtooth');
            }}
          />
          Sawtooth
        </label>
        <label>
          <input
            type="radio"
            value="triangle"
            id="triangle"
            name="type"
            onClick={() => {
              setOscillatorType('triangle');
            }}
          />
          Triangle
        </label>
      </div>
    </BoxNode>
  );
}
