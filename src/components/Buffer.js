import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import Input from '../primitives/Input';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Buffer({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();

  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setDelay = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.delay = val),);
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="red"
      index={index}
      name="Buffer"
    >
      <Input
        label="Value"
        type="number"
        value={nodes[index].properties.delay}
        step="1"
        max="180"
        min="0"
        onChange={(e,) => {
          setDelay(e.target.value,);
        }}
      />
    </BoxNode>
  );
}
