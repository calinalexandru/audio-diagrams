// import styled from '@emotion/styled';
import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import Input from '../primitives/Input';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Gain({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setGain = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.gain = val),);
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="purple"
      index={index}
      name="Gain"
    >
      <div>
        <Input
          type="number"
          value={nodes[index].properties.gain}
          step="0.1"
          onChange={(e,) => {
            setGain(e.target.value,);
          }}
        />
      </div>
    </BoxNode>
  );
}
