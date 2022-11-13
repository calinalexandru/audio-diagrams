export const setValueAtTime = (audioCtx, property, value, startTime,) => {
  property.setValueAtTime(value, startTime ?? audioCtx.currentTime,);
};

export const setValueCurveAtTime = (
  audioCtx,
  property,
  values,
  startTime,
  duration,
) => {
  property.setValueCurveAtTime(
    new Float32Array(values,),
    startTime ?? audioCtx.currentTime,
    duration,
  );
};

export const setValueByType = (audioCtx, valName, property, properties,) => {
  if (properties[valName].valueType === 'setValueCurveAtTime') {
    setValueCurveAtTime(
      audioCtx,
      property,
      properties[valName].setValueCurveAtTime.values,
      properties[valName].setValueCurveAtTime.startTime,
      properties[valName].setValueCurveAtTime.duration,
    );
  } else {
    setValueAtTime(
      audioCtx,
      property,
      properties[valName].setValueAtTime.value,
      properties[valName].setValueAtTime.startTime,
    );
  }
};
