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
        <AudioParams
          color={darkseagreen}
          index={index}
          valueName="attack"
          label="Attack"
        />
        <AudioParams
          color={darkseagreen}
          index={index}
          valueName="knee"
          label="Knee"
        />
        <AudioParams
          color={darkseagreen}
          index={index}
          valueName="ratio"
          label="Ratio"
        />
        <AudioParams
          color={darkseagreen}
          index={index}
          valueName="release"
          label="Release"
        />

      </div>
    </BoxNode>
  );
}
