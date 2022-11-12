export default function biquadFilterNode(audioCtx, properties,) {
  const filter = audioCtx.createBiquadFilter();
  filter.Q.value = properties.Q;
  filter.frequency.value = properties.frequency;
  filter.gain.value = properties.gain;
  filter.type = properties.type;
  return filter;
}
