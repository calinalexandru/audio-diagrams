import { h, } from 'preact';
import { useMemo, useRef, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';
import Input from '../primitives/Input';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';
import { createAudioParamProps, } from '../factories/audioParams';
import MultipleAudioParams from './MultipleAudioParams';

const orange = '#ffa500';
export default function Oscillator({ index, ...props },) {
  const elRef = useRef();
  const dragRef = useRef();
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const audioProps = useMemo(() => createAudioParamProps('OSCILLATOR',), [],);

  const setOscillatorType = (type,) => {
    update((draft,) => void (draft.nodes[index].properties.type = type),);
  };

  const setOscillatorDuration = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.duration = val),);
  };

  return (
    <BoxNode
      component={NODE_TYPE.OSCILLATOR}
      ref={elRef}
      dragRef={dragRef}
      index={index}
      color={orange}
      canInput={false}
      name="Oscillator"
      {...props}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexFlow: 'column',
        }}
      >
        <MultipleAudioParams
          audioParams={audioProps}
          color={orange}
          index={index}
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
        <Input
          type="number"
          label="Duration"
          value={nodes[index].properties.duration}
          onChange={(e,) => {
            e.preventDefault();
            setOscillatorDuration(e.target.value,);
          }}
        />
      </div>
    </BoxNode>
  );
}
