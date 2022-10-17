import { h } from 'preact';
import { useRef } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';
import Input from '../primitives/Input';
import { useImmerx } from '../store/state';
import BoxNode from './BoxNode';

export default function Buffer({ index }) {
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
      color="red"
      index={index}
      name="Buffer"
    >
      <div>
        Value:{' '}
        <Input
          style={{ width: '50px' }}
          type="number"
          value={state.nodes[index].properties.delay}
          step="1"
          max="180"
          min="0"
          onChange={(e) => {
            setDelay(e.target.value);
          }}
        />
      </div>
    </BoxNode>
  );
}
