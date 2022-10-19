// import styled from '@emotion/styled';
import { h, } from 'preact';
import { useEffect, useRef, } from 'preact/hooks';
import Input from '../primitives/Input';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

// const lens = {
//   get: (state) => state.nodes,
//   set: (stateDraft, nodes) => {
//     console.log('stateDraft', stateDraft, nodes);
//     stateDraft.nodes = nodes;
//   },
// };

export default function Gain({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();
  const [state, update,] = useImmerx();

  // useEffect(() => {
  //   //
  // }, [index, state.nodes, state.positions,],);

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
          value={state.nodes[index].properties.gain}
          step="0.1"
          onChange={(e,) => {
            setGain(e.target.value,);
          }}
        />
      </div>
    </BoxNode>
  );
}
