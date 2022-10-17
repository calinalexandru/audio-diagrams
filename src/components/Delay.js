import { h } from 'preact';
import { useRef } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';
import { useImmerx } from '../store/state';
import BoxNode from './BoxNode';

export default function Delay({ index }) {
  const elRef = useRef();
  const dragRef = useRef();

  const [state, update] = useImmerx();
  useMouseMove({
    elRef,
    dragRef,
    position: state.positions[index],
    index,
    nodes: state.nodes,
  });

  const setDelay = (val) => {
    update((draft) => void (draft.nodes[index].properties.delay = val));
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      style={{
        background: 'cadetblue',
      }}
      index={index}
      name="Delay"
    >
      <div>
        Value:{' '}
        <input
          style={{ width: '50px' }}
          type="number"
          value={state.nodes[index].properties.delay}
          step="0.1"
          max="1"
          min="0"
          onChange={(e) => {
            setDelay(e.target.value);
          }}
        />
      </div>
    </BoxNode>
  );
}
