import { h } from 'preact';
import { useRef } from 'preact/hooks';
import useMouseMove from '../hooks/useMouseMove';
import Input from '../primitives/Input';
import Slider from '../primitives/Slider';
import { useImmerx } from '../store/state';
import BoxNode from './BoxNode';

export default function Pan({ index }) {
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

  const setPan = (val) => {
    update((draft) => void (draft.nodes[index].properties.pan = val));
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="chocolate"
      index={index}
      name="Panner"
    >
      <div>
        <Slider
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
