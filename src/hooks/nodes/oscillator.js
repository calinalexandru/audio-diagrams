import { setValueByType, } from './util';

export default function oscillatorNode(audioCtx, properties,) {
  const oscillator = audioCtx.createOscillator();
  oscillator.type = properties.type;
  setValueByType(audioCtx, 'detune', oscillator.detune, properties,);
  setValueByType(audioCtx, 'frequency', oscillator.frequency, properties,);
  oscillator.start();
  if (Number(properties.duration,)) {
    oscillator.stop(audioCtx.currentTime + Number(properties.duration,),);
  }
  return oscillator;
}
