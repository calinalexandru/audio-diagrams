import { h, } from 'preact';
import Stack from '../../primitives/Stack';
import Input from '../../primitives/Input';

export default function SetValueAtTime({
  label,
  min,
  max,
  units,
  value,
  onChange,
},) {
  return (
    <Stack>
      <Input
        label={label}
        type="number"
        value={value}
        min={min}
        max={max}
        units={units}
        step="0.1"
        onChange={(e,) => {
          onChange(e.target.value,);
        }}
      />
    </Stack>
  );
}
