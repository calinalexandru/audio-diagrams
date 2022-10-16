// import styled from '@emotion/styled';
import { h } from 'preact';
import { useRef } from 'preact/hooks';
import BoxNode from '../components/BoxNode';
import useMouseMove from '../hooks/useMouseMove';
import { useImmerx } from '../store/state';

const lens = {
  get: (state) => state.nodes,
  set: (stateDraft, nodes) => {
    console.log('stateDraft', stateDraft, nodes);
    stateDraft.nodes = nodes;
  },
};

export default function Gain({ index }) {
  const elRef = useRef();
  const buttonRef = useRef();
  const [state, update] = useImmerx();
  console.log('state, update', { state, update });

  useMouseMove({
    elRef,
    buttonRef,
    position: state.nodes[index].position,
    index,
  });

  const setGain = (val) => {
    update((draft) => void (draft.nodes[index].properties.gain = val));
  };

  return (
    <BoxNode
      ref={elRef}
      buttonRef={buttonRef}
      style={{
        background: 'purple',
      }}
      index={index}
      name="Gain"
    >
      <div>
        Value:{' '}
        <input
          style={{ width: '50px' }}
          type="number"
          value={state.nodes[index].properties.gain}
          step="0.1"
          onChange={(e) => {
            setGain(e.target.value);
          }}
        />
      </div>
    </BoxNode>
  );
}
