export default function panNode(audioCtx, properties,) {
  const pan = audioCtx.createStereoPanner();
  pan.pan.setValueAtTime(properties.pan, audioCtx.currentTime,);
  return pan;
}
