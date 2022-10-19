import { h, } from 'preact';
import { useEffect, useRef, } from 'preact/hooks';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Output({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();
  
  const [state,] = useImmerx()

  // useEffect(() => {
  //   //
  // }, [index, state.nodes, state.positions,],);

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
