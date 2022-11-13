import { setValueByType, } from "./util";

export default function biquadFilterNode(audioCtx, properties,) {
  const filter = audioCtx.createBiquadFilter();
  filter.type = properties.type;
  setValueByType(audioCtx, 'detune', filter.detune, properties,);
  setValueByType(audioCtx, 'gain', filter.gain, properties,);
  setValueByType(audioCtx, 'Q', filter.Q, properties,);
  setValueByType(audioCtx, 'frequency', filter.frequency, properties,);
  return filter;
}
