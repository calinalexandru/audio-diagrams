import { h, Fragment, } from 'preact';
import Stack from '../../primitives/Stack';
import Input from '../../primitives/Input';

export default function RampToValueAtTime({
  label,
  units,
  value,
  endTime,
  onChange,
  onEndTimeChange,
},) {
  return (
    <>
    <Stack>
      <Input
        label={label}
        type="number"
        value={value}
        units={units}
        step="0.1"
        onChange={(e,) => {
          onChange(e.target.value,);
        }}
      />
    </Stack>
    <Stack>
      <Input
        label="endTime"
        type="number"
        size="small"
        value={endTime}
        onChange={(e,) => {
          onEndTimeChange(e.target.value,);
        }}
        step="0.1"
      />
    </Stack>
    </>
  );
}
