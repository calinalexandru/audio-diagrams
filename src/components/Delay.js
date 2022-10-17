import { h } from 'preact';
import { useRef } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';
import Input from '../primitives/Input';
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
      color="cadetblue"
      index={index}
      name="Delay"
    >
      <div>
        <Input
          type="number"
          value={state.nodes[index].properties.delay}
          step="0.1"
          max="179"
          min="0"
          units="s"
          onChange={(e) => {
            setDelay(e.target.value);
          }}
        />
      </div>
    </BoxNode>
  );
}
