import { h, Fragment, } from 'preact';
import Stack from '../../primitives/Stack';
import Input from '../../primitives/Input';

export default function SetValueCurveAtTime({
  label,
  values,
  startTime,
  duration,
  onValuesChange,
  onStartTimeChange,
  onDurationChange,
},) {
  return (
    <>
      <Stack>
        <Input
          label={`${label} array`}
          type="text"
          size="large"
          onChange={(e,) => {
            onValuesChange(e.target.value.split(',',),);
          }}
          value={values}
        />
      </Stack>
      <Stack>
        <Input
          label="startTime"
          type="number"
          size="small"
          value={startTime}
          onChange={(e,) => {
            onStartTimeChange(e.target.value,);
          }}
          step="0.1"
        />
        <Input
          label="duration"
          type="number"
          size="small"
          onChange={(e,) => {
            onDurationChange(e.target.value,);
          }}
          value={duration}
          step="1"
        />
      </Stack>
    </>
  );
}
