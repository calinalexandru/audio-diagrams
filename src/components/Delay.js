import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import BoxNode from './BoxNode';
import AudioParams from './AudioParams';

const cadetblue = '#5f9ea0';
export default function Delay({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color={cadetblue}
      index={index}
      canExpand
      isExpanded
      name="Delay"
    >
      <div>
        <AudioParams
          index={index}
          color={cadetblue}
          valueName="delay"
          label="Delay"
          min={0}
          max={179}
          units="s"
        />
      </div>
    </BoxNode>
  );
}
