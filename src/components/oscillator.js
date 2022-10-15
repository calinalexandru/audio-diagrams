// import styled from '@emotion/styled';
import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { NODE_TYPE } from '../constants';
import useMouseMove from '../hooks/useMouseMove';
import useNodes from '../hooks/useNodes';
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
      padding: '8px',
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
  const { remove } = useNodes();

  useMouseMove({
    elRef,
    buttonRef,
    xVarName,
    yVarName,
    position: state.nodes[index].position,
    index,
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
    <Container
      myRef={elRef}
      style={{
        top: `var(${yVarName})`,
        left: `var(${xVarName})`,
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
        <button
          onClick={() => {
            remove(index);
          }}
        >
          Remove
        </button>
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
        Connect
      </button>
    </Container>
  );
}
