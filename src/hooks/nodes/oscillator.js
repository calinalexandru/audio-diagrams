export default function oscillatorNode(audioCtx, properties,) {
  const oscillator = audioCtx.createOscillator();
  oscillator.type = properties.type;
  if (properties.detune.valueType === 'setValueCurveAtTime') {
    oscillator.detune.setValueCurveAtTime(
      properties.detune.setValueCurveAtTime.values,
      properties.detune.setValueCurveAtTime.startTime ?? audioCtx.currentTime,
      properties.detune.setValueCurveAtTime.duration,
    );
  } else {
    oscillator.detune.setValueAtTime(
      properties.detune.setValueAtTime.value,
      properties.detune.setValueAtTime.startTime ?? audioCtx.currentTime,
    );
  }
  if (properties.frequency.valueType === 'setValueCurveAtTime') {
    oscillator.frequency.setValueCurveAtTime(
      properties.frequency.setValueCurveAtTime.values,
      properties.frequency.setValueCurveAtTime.startTime ??
        audioCtx.currentTime,
      properties.frequency.setValueCurveAtTime.duration,
    );
  } else {
    oscillator.frequency.setValueAtTime(
      properties.frequency.setValueAtTime.value,
      properties.frequency.setValueAtTime.startTime ?? audioCtx.currentTime,
    );
  }
  oscillator.start();
  if (Number(properties.duration,)) {
    oscillator.stop(audioCtx.currentTime + Number(properties.duration,),);
  }
  return oscillator;
}
