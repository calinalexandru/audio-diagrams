import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import BoxNode from './BoxNode';
import AudioParams from './AudioParams';
import { NODE_TYPE, } from '../constants';

const cadetblue = '#5f9ea0';
export default function Delay({ index, ...props },) {
  const elRef = useRef();
  const dragRef = useRef();

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color={cadetblue}
      index={index}
      component={NODE_TYPE.DELAY}
      isExpanded
      name="Delay"
      {...props}
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
