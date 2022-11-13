import { setValueByType, } from "./util";

export default function gainNode(audioCtx, properties,) {
  const gain = audioCtx.createGain();
  setValueByType(audioCtx, 'gain', gain.gain, properties,);
  return gain;
}
