import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { NODE_TYPE } from '../constants';
import useMouseMove from '../hooks/useMouseMove';
import { useImmerx } from '../store/state';

const xVarName = '--x';
const yVarName = '--y';
export default function Output() {
  const elRef = useRef();
  const buttonRef = useRef();
  const [state, update] = useImmerx();
  useMouseMove({ elRef, buttonRef, xVarName, yVarName });
  const toggleActive = () => {
    update((draft) => {
      draft.nodes = [...new Set([...draft.nodes, NODE_TYPE.OUTPUT])];
    });
  };
  return (
    <div
      ref={elRef}
      onClick={toggleActive}
      style={{
        [xVarName]: '50%',
        [yVarName]: '50%',
        top: `var(${yVarName})`,
        left: `var(${xVarName})`,
        cursor: 'pointer',
        padding: '16px',
        position: 'absolute',
        background: 'green',
      }}
    >
      Audio output
    </div>
  );
}
