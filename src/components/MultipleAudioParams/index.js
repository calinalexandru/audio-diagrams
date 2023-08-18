import { h, } from 'preact';
import AudioParams from '../AudioParams';

export default function MultipleAudioParams({ audioParams, color, index, },) {
  return audioParams.map((ap,) => (
    <AudioParams valueName={ap} label={ap} color={color} index={index} />
  ),);
}
