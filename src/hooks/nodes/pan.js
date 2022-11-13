import { setValueByType, } from "./util";

export default function panNode(audioCtx, properties,) {
  const pan = audioCtx.createStereoPanner();
  setValueByType(audioCtx, 'pan', pan.pan, properties,);
  return pan;
}
