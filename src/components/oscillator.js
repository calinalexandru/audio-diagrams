// import styled from '@emotion/styled';
import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { NODE_TYPE } from '../constants';
import useMouseMove from '../hooks/useMouseMove';
import useWiring from '../hooks/useWiring';
import { useImmerx } from '../store/state';

const xVarName = '--x';
const yVarName = '--y';

// const Container = styled.div`
// padding: 16px;
// position: absolute;
// background: orange;
// `;

const Container = ({ children, style, myRef, ...rest }) => (
  <div
    ref={myRef}
    style={{
      boxSizing: 'border-box',
      padding: '16px',
      position: 'absolute',
      background: 'orange',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

const lens = {
  get: (state) => state.nodes,
  set: (stateDraft, nodes) => {
    console.log('stateDraft', stateDraft, nodes);
    stateDraft.nodes = nodes;
  },
};

export default function Oscillator({ index }) {
  const elRef = useRef();
  const buttonRef = useRef();
  const [state, update] = useImmerx();
  console.log('state, update', { state, update });

  const { addToConnecting } = useWiring();

  const setPosition = (pos) => {
    update((draft) => void (draft.nodes[index].position = pos));
  };

  useMouseMove({ elRef, buttonRef, xVarName, yVarName, setPosition });

  const setOscillatorType = (type) => {
    update((draft) => void (draft.nodes[index].properties.type = type));
  };

  const setOscillatorFreq = (freq) => {
    update((draft) => void (draft.nodes[index].properties.frequency = freq));
  };

  const setOscillatorDetune = (val) => {
    update((draft) => void (draft.nodes[index].properties.detune = val));
  };

  const removeNode = () => {
    update((draft) => void draft.nodes.splice(index, 1));
  };

  return (
    <Container
      myRef={elRef}
      style={{
        [xVarName]: '10%',
        [yVarName]: '50%',
        top: `var(${yVarName})`,
        left: `var(${xVarName})`,
        opacity: state.nodes.includes(NODE_TYPE.OSCILLATOR) ? 1 : 0.6,
      }}
    >
      <div>
        <button
          style={{
            cursor: 'pointer',
          }}
          ref={buttonRef}
        >
          DRAG
        </button>
        <button onClick={removeNode}>Remove</button>
      </div>
      <h3>Oscillator</h3>
      <div>
        Freq:{' '}
        <input
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
          value={state.nodes[index].properties.detune}
          onChange={(e) => {
            setOscillatorDetune(e.target.value);
          }}
        />
      </div>
      <div>
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
      <button
        onClick={() => {
          addToConnecting(index);
        }}
      >
        Output
      </button>
    </Container>
  );
}
