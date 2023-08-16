import { h, Fragment, } from 'preact';
import Stack from '../../primitives/Stack';
import Input from '../../primitives/Input';

export default function SetTargetAtTime({
  label,
  units,
  target,
  startTime,
  timeConstant,
  onTargetChange,
  onStartTimeChange,
  onTimeConstantChange,
},) {
  return (
    <>
      <Stack>
        <Input
          label={label}
          type="number"
          value={target}
          units={units}
          step="0.1"
          onChange={(e,) => {
            onTargetChange(e.target.value,);
          }}
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
          label="timeConstant"
          type="number"
          size="small"
          value={timeConstant}
          onChange={(e,) => {
            onTimeConstantChange(e.target.value,);
          }}
          step="0.1"
        />
      </Stack>
    </>
  );
}
