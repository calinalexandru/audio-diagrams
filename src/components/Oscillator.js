import { Fragment, h, } from 'preact';
import {
  useCallback, useEffect, useRef, useState,
} from 'preact/hooks';
import Button from '../primitives/Button';
import Input from '../primitives/Input';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Oscillator({ index, },) {
  const elRef = useRef();
  const dragRef = useRef();
  const [state, update,] = useImmerx();

  // useEffect(() => {
  //   //
  // }, [index, state.nodes, state.positions,],);

  const [showMore, setShowMore,] = useState(false,);

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

  const toggleShowMore = useCallback(
    (e,) => {
      e.preventDefault();
      setShowMore(!showMore,);
    },
    [showMore,],
  );

  const showMoreButton = (
    <Button
      style={{
        height: 'auto',
        width: '20px',
      }}
      onClick={toggleShowMore}
    >
      {showMore ? '-' : '+'}
    </Button>
  );

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      index={index}
      color="orange"
      canInput={false}
      name="Oscillator"
      style={{ height: showMore ? 'auto' : '100px', }}
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
          units="&#13200;"
          value={state.nodes[index].properties.frequency}
          onChange={(e,) => {
            e.preventDefault();
            setOscillatorFreq(Number(e.target.value,),);
          }}
        />
        {!showMore && showMoreButton}
        {showMore && (
          <>
            <Input
              type="number"
              label="Detune"
              value={state.nodes[index].properties.detune}
              onChange={(e,) => {
                e.preventDefault();
                setOscillatorDetune(e.target.value,);
              }}
            />
            <Input
              type="number"
              label="Duration"
              value={state.nodes[index].properties.duration}
              onChange={(e,) => {
                e.preventDefault();
                setOscillatorDuration(e.target.value,);
              }}
            />
            <Select
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
            {showMore && showMoreButton}
          </>
        )}
      </div>
    </BoxNode>
  );
}
