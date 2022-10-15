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
      padding: '16px',
      position: 'absolute',
      background: 'purple',
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

export default function Gain({ index }) {
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

  const setGain = (val) => {
    update((draft) => void (draft.nodes[index].properties.gain = val));
  };

  return (
    <Container
      myRef={elRef}
      style={{
        [xVarName]: '20%',
        [yVarName]: '50%',
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
      <h3>Gain</h3>
      <div>
        Gain:{' '}
        <input
          type="number"
          value={state.nodes[index].properties.gain}
          onChange={(e) => {
            setGain(e.target.value);
          }}
        />
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
