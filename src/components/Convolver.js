// import styled from '@emotion/styled';
import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Convolver({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);
  
  const setNormalize = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.normalize = val),);
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="darkseagreen"
      index={index}
      name="Convolver"
    >
      <div>
        <Select
          label="Normalize"
          type="number"
          value={nodes[index].properties.normalize}
          step="0.1"
          onChange={(e,) => {
            setNormalize(e.target.value,);
          }}
        >
          <option value={false}>false</option>
          <option value>true</option>
        </Select>
      </div>
    </BoxNode>
  );
}
