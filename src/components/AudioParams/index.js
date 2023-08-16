import { h, } from 'preact';
import { useCallback, useMemo, } from 'preact/hooks';
import { number, string, } from 'prop-types';
import Select from '../../primitives/Select';
import { useImmerx, } from '../../store/state';
import { Container, } from './style';
import SetValueAtTime from './SetValueAtTime';
import SetValueCurveAtTime from './SetValueCurveAtTime';
import SetTargetAtTime from './SetTargetAtTime';
import RampToValueAtTime from './RampToValueAtTime';

const audioParamMethods = [
  'setValueAtTime',
  'linearRampToValueAtTime',
  'exponentialRampToValueAtTime',
  'setTargetAtTime',
  'setValueCurveAtTime',
  // 'cancelScheduledValues',
  // 'cancelAndHoldAtTime',
];

export default function AudioParams({
  index,
  color,
  valueName,
  label,
  max,
  min,
  units,
},) {
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const {
    setValueAtTime,
    linearRampToValueAtTime,
    exponentialRampToValueAtTime,
    setTargetAtTime,
    setValueCurveAtTime,
    valueType,
  } = nodes[index].properties[valueName];

  // console.log({
  //   linearRampToValueAtTime,
  //   setValueAtTime,
  //   setValueCurveAtTime,
  //   valueType,
  // },);

  const setValueType = (val,) => {
    update(
      (draft,) => void (draft.nodes[index].properties[valueName].valueType = val),
    );
  };

  const setCurrentProperty = useCallback(
    (val, property,) => {
      update(
        (draft,) =>
          void (draft.nodes[index].properties[valueName][valueType][property] =
            val),
      );
    },
    [update, valueType, index, valueName,],
  );

  const methodToComponentsMap = useMemo(
    () => ({
      setValueAtTime: (
        <SetValueAtTime
          label={label}
          min={min}
          max={max}
          units={units}
          value={setValueAtTime.value}
          onChange={(val,) => setCurrentProperty(val, 'value',)}
        />
      ),
      linearRampToValueAtTime: (
        <RampToValueAtTime
          label={label}
          units={units}
          value={linearRampToValueAtTime.value}
          endTime={linearRampToValueAtTime.endTime}
          onChange={(val,) => setCurrentProperty(val, 'value',)}
          onEndTimeChange={(val,) => setCurrentProperty(val, 'endTime',)}
        />
      ),
      exponentialRampToValueAtTime: (
        <RampToValueAtTime
          label={label}
          units={units}
          value={exponentialRampToValueAtTime.value}
          endTime={exponentialRampToValueAtTime.endTime}
          onChange={(val,) => setCurrentProperty(val, 'value',)}
          onEndTimeChange={(val,) => setCurrentProperty(val, 'endTime',)}
        />
      ),
      setTargetAtTime: (
        <SetTargetAtTime
          label={label}
          units={units}
          target={setTargetAtTime.target}
          startTime={setTargetAtTime.startTime}
          timeConstant={setTargetAtTime.timeConstant}
          onTargetChange={(val,) => setCurrentProperty(val, 'target',)}
          onStartTimeChange={(val,) => setCurrentProperty(val, 'startTime',)}
          onTimeConstantChange={(val,) =>
            setCurrentProperty(val, 'timeConstant',)
          }
        />
      ),
      setValueCurveAtTime: (
        <SetValueCurveAtTime
          label={label}
          values={setValueCurveAtTime.values}
          startTime={setValueCurveAtTime.startTime}
          duration={setValueCurveAtTime.duration}
          onValuesChange={(val,) => setCurrentProperty(val, 'values',)}
          onDurationChange={(val,) => setCurrentProperty(val, 'duration',)}
          onStartTimeChange={(val,) => setCurrentProperty(val, 'startTime',)}
        />
      ),
    }),
    [
      setCurrentProperty,
      min,
      max,
      label,
      units,
      linearRampToValueAtTime,
      setValueCurveAtTime,
      setValueAtTime,
    ],
  );

  return (
    <Container color={color}>
      <Select
        onChange={(e,) => {
          e.preventDefault();
          setValueType(e.target.value,);
        }}
      >
        {audioParamMethods.map((method,) => (
          <option value={method} selected={method === valueType}>
            {method}
          </option>
        ),)}
      </Select>
      {methodToComponentsMap?.[valueType]}
    </Container>
  );
}

AudioParams.propTypes = {
  index: number,
  color: string,
};

AudioParams.defaultProps = {
  index: 0,
  color: '#333',
};
