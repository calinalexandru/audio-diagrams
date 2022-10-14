import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';

const xVarName = '--x';
const yVarName = '--y';
export default function Oscillator() {
  const elRef = useRef();
  useMouseMove({ elRef, xVarName, yVarName });
  return (
    <div
      ref={elRef}
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
      Oscillator
    </div>
  );
}
