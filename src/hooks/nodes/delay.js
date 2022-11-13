import { setValueByType, } from "./util";

export default function delayNode(audioCtx, properties,) {
  const delay = audioCtx.createDelay(179,);
  setValueByType(audioCtx, 'delay', delay.delayTime, properties,);
  return delay;
}
