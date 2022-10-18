import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Output({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();
  const [state,] = useImmerx();

  useMouseMove({
    elRef,
    dragRef,
    position: state.positions[index],
    index,
    nodes: state.nodes,
  },);

  return (
    <BoxNode
      index={index}
      dragRef={dragRef}
      ref={elRef}
      color="green"
      canRemove={false}
      name="Speaker Output"
      canOutput={false}
    />
  );
}
