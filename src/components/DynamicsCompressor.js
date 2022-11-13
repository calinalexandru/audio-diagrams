import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import BoxNode from './BoxNode';
import AudioParams from './AudioParams';

const darkseagreen = '#8fbc8f';
export default function DynamicsCompressor({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color={darkseagreen}
      index={index}
      name="Dynamics Compressor"
      canExpand
    >
      <div>
        <AudioParams
          color={darkseagreen}
          index={index}
          valueName="threshold"
          label="Threshold"
        />

        {/* <Slider
          value={nodes[index].properties.threshold}
          step="0.1"
          min={-100}
          max={0}
          onChange={(e,) => {
            setThreshold(e.target.value,);
          }}
        /> */}
      </div>
    </BoxNode>
  );
}
