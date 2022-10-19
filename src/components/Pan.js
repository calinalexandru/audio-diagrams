import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import Slider from '../primitives/Slider';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Pan({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();

  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setPan = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.pan = val),);
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
          value={nodes[index].properties.pan}
          step="0.1"
          max="1"
          min="-1"
          onChange={(e,) => {
            setPan(e.target.value,);
          }}
        />
      </div>
    </BoxNode>
  );
}
