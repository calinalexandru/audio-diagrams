import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { NODE_TYPE } from '../constants';
import useMouseMove from '../hooks/useMouseMove';
import { useImmerx } from '../store/state';

const xVarName = '--x';
const yVarName = '--y';

const lens = {
  get: (state) => state.nodes,
  set: (stateDraft, nodes) => {
    console.log('stateDraft', stateDraft, nodes);
    stateDraft.nodes = nodes;
  },
};

export default function Oscillator() {
  const elRef = useRef();
  const buttonRef = useRef();
  useMouseMove({ elRef, buttonRef, xVarName, yVarName });
  const [state, update] = useImmerx();
  console.log('state, update', { state, update });

  const toggleActive = () => {
    update((draft) => {
      draft.nodes = [...new Set([...draft.nodes, NODE_TYPE.OSCILLATOR])];
    });
  };

  const setOscillatorType = (type) => {
    update((draft) => void (draft.properties.oscillator.type = type));
  };

  const setOscillatorFreq = (freq) => {
    update((draft) => void (draft.properties.oscillator.frequency = freq));
  };

  const setOscillatorDetune = (val) => {
    update((draft) => void (draft.properties.oscillator.detune = val));
  };

  return (
    <div
      ref={elRef}
      onClick={toggleActive}
      style={{
        [xVarName]: '30%',
        [yVarName]: '30%',
        top: `var(${yVarName})`,
        left: `var(${xVarName})`,
        cursor: 'pointer',
        padding: '16px',
        position: 'absolute',
        background: 'orange',
      }}
    >
      <div>
        <button ref={buttonRef}>move</button>
      </div>
      <h3>Oscillator</h3>
      <div>
        Freq:{' '}
        <input
          type="number"
          value={state.properties.oscillator.frequency}
          onChange={(e) => {
            setOscillatorFreq(e.target.value);
          }}
        />
      </div>
      <div>
        Detune:{' '}
        <input
          type="number"
          value={state.properties.oscillator.detune}
          onChange={(e) => {
            setOscillatorDetune(e.target.value);
          }}
        />
      </div>
      <div>
        <label for="sine">
          Sine
          <input
            type="radio"
            value="sine"
            id="sine"
            name="type"
            onClick={() => {
              setOscillatorType('sine');
            }}
          />
        </label>

        <label for="square">
          Square
          <input
            type="radio"
            value="square"
            id="square"
            name="type"
            onClick={() => {
              setOscillatorType('square');
            }}
          />
        </label>

        <label for="sawtooth">
          Sawtooth
          <input
            type="radio"
            value="sawtooth"
            id="sawtooth"
            name="type"
            onClick={() => {
              setOscillatorType('sawtooth');
            }}
          />
        </label>

        <label for="triangle">
          Triangle
          <input
            type="radio"
            value="triangle"
            id="triangle"
            name="type"
            onClick={() => {
              setOscillatorType('triangle');
            }}
          />
        </label>
      </div>
    </div>
  );
}
