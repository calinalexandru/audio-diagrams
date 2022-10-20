import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import BoxNode from './BoxNode';

export default function Microphone({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();

  return (
    <BoxNode
      index={index}
      dragRef={dragRef}
      ref={elRef}
      color="azure"
      name="Microphone"
      canInput={false}
    />
  );
}
