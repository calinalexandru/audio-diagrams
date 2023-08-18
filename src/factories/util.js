export const setValueAtTime = (audioCtx, property, value, startTime,) => {
  property.setValueAtTime(value, startTime ?? audioCtx.currentTime,);
};

export const linearRampToValueAtTime = (audioCtx, property, value, endTime,) => {
  property.setValueAtTime(0, audioCtx.currentTime,);
  property.linearRampToValueAtTime(
    value,
    endTime ? audioCtx.currentTime + endTime : audioCtx.currentTime,
  );
};

export const exponentialRampToValueAtTime = (audioCtx, property, value, endTime,) => {
  property.setValueAtTime(0, audioCtx.currentTime,);
  property.exponentialRampToValueAtTime(
    value,
    endTime ? audioCtx.currentTime + endTime : audioCtx.currentTime,
  );
};

export const setTargetAtTime = (audioCtx, property, value, endTime, timeConstant,) => {
  property.setValueAtTime(0, audioCtx.currentTime,);
  property.setTargetAtTime(
    value,
    endTime ? audioCtx.currentTime + endTime : audioCtx.currentTime,
    timeConstant,
  );
};

export const setValueCurveAtTime = (
  audioCtx,
  property,
  values,
  startTime,
  duration,
) => {
  try {
    property.setValueCurveAtTime(
      new Float32Array(values,),
      startTime ?? audioCtx.currentTime,
      duration,
    );
  } catch (e) {
    console.warn('Invalid values provided for setValueCurveAtTime', e,);
  }
};

const methodsMap = {
  setValueCurveAtTime,
  linearRampToValueAtTime,
  exponentialRampToValueAtTime,
  setTargetAtTime,
  setValueAtTime,
};

const methodToPropertiesMap = {
  setValueAtTime: ['value', 'startTime',],
  linearRampToValueAtTime: ['value', 'endTime',],
  exponentialRampToValueAtTime: ['value', 'endTime',],
  setTargetAtTime: ['target', 'startTime', 'timeConstant',],
  setValueCurveAtTime: ['values', 'startTime', 'duration',],
  cancelScheduledValues: ['startTime',],
  cancelAndHoldAtTime: ['cancelTime',],
};

const methodHandler = (method,) => methodsMap[method];
const payloadHandler = (obj, name, properties,) =>
  properties.map((prop,) => obj[name][prop],);

export const setValueByType = (audioCtx, valName, property, properties,) => {
  const handler = methodHandler(properties[valName].valueType,);
  handler(
    audioCtx,
    property,
    ...payloadHandler(
      properties[valName],
      properties[valName].valueType,
      methodToPropertiesMap[properties[valName].valueType],
    ),
  );
};
