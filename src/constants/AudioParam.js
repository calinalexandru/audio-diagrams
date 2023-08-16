export default class AudioParam {
  static getMethods({
    target = 1,
    timeConstant = 0.5,
    value = 440,
    startTime = 0,
    endTime = 3,
    duration = 1,
    values = [0, 440,],
  } = {},) {
    return Object.create(null, {
      valueType: { value: 'setValueAtTime', },
      setValueAtTime: {
        value: {
          value,
          startTime,
        },
      },
      linearRampToValueAtTime: {
        value: {
          value,
          endTime,
        },
      },
      exponentialRampToValueAtTime: {
        value: {
          value,
          endTime,
        },
      },
      setTargetAtTime: {
        value: {
          target,
          startTime,
          timeConstant,
        },
      },
      setValueCurveAtTime: {
        value: {
          values,
          startTime,
          duration,
        },
      },
    },);
  }
}
