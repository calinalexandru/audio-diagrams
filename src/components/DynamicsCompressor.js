import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import Slider from '../primitives/Slider';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function DynamicsCompressor({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setThreshold = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.threshold = val),);
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="darkseagreen"
      index={index}
      name="Dynamics Compressor"
      canExpand
    >
      <div>

        <Slider
          value={nodes[index].properties.threshold}
          step="0.1"
          min={-100}
          max={0}
          onChange={(e,) => {
            setThreshold(e.target.value,);
          }}
        />
      </div>
    </BoxNode>
  );
}
