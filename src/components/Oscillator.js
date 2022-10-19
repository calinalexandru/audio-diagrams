import { h, } from 'preact';
import { useRef, } from 'preact/hooks';
import { HZ, } from '../constants';
import Input from '../primitives/Input';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Oscillator({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setOscillatorType = (type,) => {
    update((draft,) => void (draft.nodes[index].properties.type = type),);
  };

  const setOscillatorFreq = (freq,) => {
    update((draft,) => void (draft.nodes[index].properties.frequency = freq),);
  };

  const setOscillatorDetune = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.detune = val),);
  };

  const setOscillatorDuration = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.duration = val),);
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      index={index}
      color="orange"
      canInput={false}
      canExpand
      name="Oscillator"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexFlow: 'column',
        }}
      >
        <Input
          type="number"
          label="Frequency"
          units={HZ}
          value={nodes[index].properties.frequency}
          onChange={(e,) => {
            e.preventDefault();
            setOscillatorFreq(Number(e.target.value,),);
          }}
        />
        <Input
          type="number"
          label="Detune"
          value={nodes[index].properties.detune}
          onChange={(e,) => {
            e.preventDefault();
            setOscillatorDetune(e.target.value,);
          }}
        />
        <Input
          type="number"
          label="Duration"
          value={nodes[index].properties.duration}
          onChange={(e,) => {
            e.preventDefault();
            setOscillatorDuration(e.target.value,);
          }}
        />
        <Select
          label="Type"
          onChange={(e,) => {
            e.preventDefault();
            setOscillatorType(e.target.value,);
          }}
        >
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="sawtooth">Sawtooth</option>
          <option value="triangle">Triangle</option>
        </Select>
      </div>
    </BoxNode>
  );
}
