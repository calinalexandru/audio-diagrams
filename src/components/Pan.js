import { h } from 'preact';
import { useRef } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';
import { useImmerx } from '../store/state';
import BoxNode from './BoxNode';

export default function Pan({ index }) {
  const elRef = useRef();
  const buttonRef = useRef();

  const [state, update] = useImmerx();

  useMouseMove({
    elRef,
    buttonRef,
    position: state.positions[index],
    index,
    nodes: state.nodes,
  });

  const setPan = (val) => {
    update((draft) => void (draft.nodes[index].properties.pan = val));
  };

  return (
    <BoxNode
      ref={elRef}
      buttonRef={buttonRef}
      style={{
        background: 'chocolate',
      }}
      index={index}
      name="Pan"
    >
      <div>
        Value:{' '}
        <input
          style={{ width: '50px' }}
          type="number"
          value={state.nodes[index].properties.pan}
          step="0.1"
          max="1"
          min="-1"
          onChange={(e) => {
            setPan(e.target.value);
          }}
        />
      </div>
    </BoxNode>
  );
}
