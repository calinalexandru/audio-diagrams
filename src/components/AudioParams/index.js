import { h, Fragment, } from 'preact';
import { useMemo, } from 'preact/hooks';
import { number, string, } from 'prop-types';
import Stack from '../../primitives/Stack';
import Input from '../../primitives/Input';
import Select from '../../primitives/Select';
import { useImmerx, } from '../../store/state';
import { Container, } from './style';

export default function AudioParams({ index, color, valueName, label, units, },) {
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);

  const { setValueAtTime, setValueCurveAtTime, valueType, } =
    nodes[index].properties[valueName];

  const isValueAtTime = useMemo(
    () => valueType === 'setValueAtTime',
    [valueType,],
  );

  const isCurveAtTime = useMemo(
    () => valueType === 'setValueCurveAtTime',
    [valueType,],
  );

  const setValueType = (val,) => {
    update(
      (draft,) => void (draft.nodes[index].properties[valueName].valueType = val),
    );
  };

  const setValue = (val,) => {
    update(
      (draft,) =>
        void (draft.nodes[index].properties[valueName].setValueAtTime.value =
          val),
    );
  };

  const setCurveValues = (val,) => {
    update(
      (draft,) =>
        void (draft.nodes[index].properties[
          valueName
        ].setValueCurveAtTime.values = val),
    );
  };

  const setCurveStartTime = (val,) => {
    update(
      (draft,) =>
        void (draft.nodes[index].properties[
          valueName
        ].setValueCurveAtTime.startTime = val),
    );
  };

  const setCurveDuration = (val,) => {
    update(
      (draft,) =>
        void (draft.nodes[index].properties[
          valueName
        ].setValueCurveAtTime.duration = val),
    );
  };

  return (
    <Container color={color}>
      <Select
        label={`input type: ${valueName}`}
        onChange={(e,) => {
          e.preventDefault();
          console.log('setValueType', e.target.value,);
          setValueType(e.target.value,);
        }}
      >
        <option value="setValueAtTime">setValueAtTime</option>
        <option value="setValueCurveAtTime">setValueCurveAtTime</option>
      </Select>

      {isValueAtTime && (
        <Stack>
          <Input
            label={label}
            type="number"
            value={setValueAtTime.value}
            units={units}
            step="0.1"
            onChange={(e,) => {
              setValue(e.target.value,);
            }}
          />
        </Stack>
      )}
      {isCurveAtTime && (
        <>
          <Stack>
            <Input
              label="values"
              type="text"
              size="large"
              onChange={(e,) => {
                setCurveValues(e.target.value.split(',',),);
              }}
              value={setValueCurveAtTime.values}
            />
          </Stack>
          <Stack>
            <Input
              label="startTime"
              type="number"
              size="small"
              value={setValueCurveAtTime.startTime}
              onChange={(e,) => {
                setCurveStartTime(e.target.value,);
              }}
              step="0.1"
            />
            <Input
              label="duration"
              type="number"
              size="small"
              onChange={(e,) => {
                setCurveDuration(e.target.value,);
              }}
              value={setValueCurveAtTime.duration}
              step="1"
            />
          </Stack>
        </>
      )}
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
