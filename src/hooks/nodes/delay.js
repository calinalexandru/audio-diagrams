export default function delayNode(audioCtx, properties,) {
  const delay = audioCtx.createDelay(179,);
  delay.delayTime.setValueAtTime(properties.delay, audioCtx.currentTime,);
  return delay;
}
