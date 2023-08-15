// import styled from '@emotion/styled';
import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Convolver({ index, ...props },) {
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
      component={NODE_TYPE.CONVOLVER}
      index={index}
      name="Convolver"
      {...props}
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
