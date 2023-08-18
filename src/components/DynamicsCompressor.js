import { h, } from 'preact';
import { useMemo, useRef, } from 'preact/hooks';
import BoxNode from './BoxNode';
import { NODE_TYPE, } from '../constants';
import { createAudioParamProps, } from '../factories/audioParams';
import MultipleAudioParams from './MultipleAudioParams';

const darkseagreen = '#8fbc8f';
export default function DynamicsCompressor({ index, ...props },) {
  const elRef = useRef();
  const dragRef = useRef();
  const audioProps = useMemo(
    () => createAudioParamProps('DYNAMICS_COMPRESSOR',),
    [],
  );

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color={darkseagreen}
      component={NODE_TYPE.DYNAMICS_COMPRESSOR}
      index={index}
      name="Dynamics Compressor"
      {...props}
    >
      <MultipleAudioParams
        audioParams={audioProps}
        color={darkseagreen}
        index={index}
      />
    </BoxNode>
  );
}
