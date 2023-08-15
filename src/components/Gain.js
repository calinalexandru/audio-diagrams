// import styled from '@emotion/styled';
import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';
import AudioParams from './AudioParams';
import BoxNode from './BoxNode';

const purple = "#800080";
export default function Gain({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color={purple}
      component={NODE_TYPE.GAIN}
      index={index}
      name="Gain"
      canExpand
      isExpanded
    >
      <AudioParams color={purple} valueName="gain" label="Gain" index={index} />
    </BoxNode>
  );
}
