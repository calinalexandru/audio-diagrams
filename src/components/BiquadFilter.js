import { h } from 'preact';
import { useRef } from 'preact/hooks';
import { BIQUAD_FILTER_TYPES, HZ, MAX_FREQUENCY } from '../constants';
import Input from '../primitives/Input';
import Select from '../primitives/Select';
import Slider from '../primitives/Slider';
import { useImmerx } from '../store/state';
import BoxNode from './BoxNode';

export default function BiquadFilter({ index, },) {
  const fromHzRef = useRef();
  const toHzRef = useRef();
  const elRef = useRef();
  const dragRef = useRef();

  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const setType = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.type = val),);
  };

  const setGain = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.gain = val),);
  };

  const setFrequency = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.frequency = val),);
  };
  const setQ = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.Q = val),);
  };

  const onChangeSlider = () => {
    const fromHz = fromHzRef.current.value;
    const toHz = toHzRef.current.value;
    const geometricMean = Math.sqrt(fromHz * toHz,);
    update((draft,) => {
      Object.assign(draft.nodes[index].properties, {
        Q: geometricMean / (toHz - fromHz),
        frequency: geometricMean,
      },);
    },);
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="cornflowerblue"
      index={index}
      canExpand
      name="BiquadFilter"
      style={{
        height: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{
          display: 'flex',
          flexFlow: 'column',
        }}>
          <Select
            label="Type"
            onChange={(e,) => {
              setType(e.target.value,);
            }}
          >
            {BIQUAD_FILTER_TYPES.map((biquadFilterType,) => (
              <option value={biquadFilterType}>{biquadFilterType}</option>
            ),)}
          </Select>
          <Input
            label="Gain"
            type="number"
            value={nodes[index].properties.gain}
            step="1"
            max="179"
            min="0"
            onChange={(e,) => {
              setGain(e.target.value,);
            }}
          />
          <Input
            label="Frequency"
            type="number"
            value={nodes[index].properties.frequency}
            step="1"
            max={MAX_FREQUENCY}
            min="0"
            units={HZ}
            onChange={(e,) => {
              setFrequency(e.target.value,);
            }}
          />
          <Input
            label="Q"
            type="number"
            value={nodes[index].properties.Q}
            step="1"
            onChange={(e,) => {
              setQ(e.target.value,);
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Slider
            min="0"
            max={MAX_FREQUENCY}
            ref={toHzRef}
            onChange={onChangeSlider}
            orientation="vertical"
          />
          <Slider
            min="0"
            max={MAX_FREQUENCY}
            ref={fromHzRef}
            onChange={onChangeSlider}
            orientation="vertical"
          />
        </div>
      </div>
    </BoxNode>
  );
}
