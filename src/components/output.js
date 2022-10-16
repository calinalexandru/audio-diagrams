import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { NODE_TYPE } from '../constants';
import useMouseMove from '../hooks/useMouseMove';
import useWiring from '../hooks/useWiring';
import { useImmerx } from '../store/state';
import BoxNode from './BoxNode';

export default function Output({ index }) {
  const elRef = useRef();
  const buttonRef = useRef();
  const [state] = useImmerx();

  useMouseMove({
    elRef,
    buttonRef,
    position: state.positions[index],
    index,
    nodes: state.nodes,
  });

  return (
    <BoxNode
      index={index}
      ref={elRef}
      style={{
        background: 'green',
      }}
      buttonRef={buttonRef}
      name="Output"
    ></BoxNode>
  );
}
