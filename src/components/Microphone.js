import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';
import BoxNode from './BoxNode';

export default function Microphone({ index, ...props },) {
  const elRef = useRef();
  const dragRef = useRef();

  return (
    <BoxNode
      index={index}
      dragRef={dragRef}
      ref={elRef}
      component={NODE_TYPE.MICROPHONE}
      color="azure"
      name="Microphone"
      canInput={false}
      {...props}
    />
  );
}
