import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import BoxNode from './BoxNode';
import AudioParams from './AudioParams';

const chocolate = '#d2691e';
export default function Pan({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color={chocolate}
      index={index}
      name="Panner"
      canExpand
    >
      <div>
        <AudioParams
          index={index}
          color={chocolate}
          valueName="pan"
          label="Pan"
        />
      </div>
    </BoxNode>
  );
}
