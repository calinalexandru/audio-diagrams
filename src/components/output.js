import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { NODE_TYPE } from '../constants';
import useMouseMove from '../hooks/useMouseMove';
import useWiring from '../hooks/useWiring';
import { useImmerx } from '../store/state';

const xVarName = '--x';
const yVarName = '--y';

export default function Output({ index }) {
  const elRef = useRef();
  const buttonRef = useRef();
  const [state, update] = useImmerx();
  const { addToConnecting } = useWiring();

  const setPosition = (pos) => {
    update((draft) => void (draft.nodes[index].position = pos));
  };
  useMouseMove({
    elRef,
    buttonRef,
    xVarName,
    yVarName,
    position: state.nodes[index].position,
    setPosition,
  });

  return (
    <div
      ref={elRef}
      style={{
        boxSizing: 'border-box',
        top: `var(${yVarName})`,
        left: `var(${xVarName})`,
        cursor: 'pointer',
        padding: '16px',
        position: 'absolute',
        background: 'green',
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
      </div>
      <button
        onClick={() => {
          addToConnecting(index);
        }}
      >
        Connect
      </button>
      Audio output
    </div>
  );
}
