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
  const [state] = useImmerx();
  const { addToConnecting } = useWiring();

  useMouseMove({
    elRef,
    buttonRef,
    xVarName,
    yVarName,
    position: state.nodes[index].position,
    index,
  });

  return (
    <div
      ref={elRef}
      style={{
        boxSizing: 'border-box',
        top: `var(${yVarName})`,
        left: `var(${xVarName})`,
        cursor: 'pointer',
        padding: '8px',
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
