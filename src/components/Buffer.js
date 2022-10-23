import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import Input from '../primitives/Input';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Buffer({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();

  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setDetune = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.detune = val),);
  };

  const setLoop = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.loop = val),);
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="red"
      index={index}
      name="Buffer"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Select
          label="Loop"
          onChange={(e,) => {
            setLoop(!!e.target.value,);
          }}
        >
          <option value="1" selected>
            yes
          </option>
          <option value="0">no</option>
        </Select>
        <Input
          label="Value"
          type="number"
          value={nodes[index].properties.detune}
          step="1"
          max="180"
          min="0"
          onChange={(e,) => {
            setDetune(e.target.value,);
          }}
        />
      </div>
    </BoxNode>
  );
}
