export default function gainNode(audioCtx, properties,) {
  const gain = audioCtx.createGain();
  if (properties.gain.valueType === 'setValueCurveAtTime') {
    gain.gain.setValueCurveAtTime(
      new Float32Array(properties.gain.setValueCurveAtTime.values,),
      properties.gain.setValueCurveAtTime.startTime ?? audioCtx.currentTime,
      properties.gain.setValueCurveAtTime.duration,
    );
  } else {
    gain.gain.setValueAtTime(
      properties.gain.setValueAtTime.value,
      properties.gain.setValueAtTime.startTime,
    );
  }
  return gain;
}
