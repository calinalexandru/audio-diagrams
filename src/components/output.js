import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';

const xVarName = '--x';
const yVarName = '--y';
export default function Output() {
  const elRef = useRef();
  useMouseMove({ elRef, xVarName, yVarName });
  return (
    <div
      ref={elRef}
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
