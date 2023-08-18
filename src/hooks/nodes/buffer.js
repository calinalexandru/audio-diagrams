import { setValueByType, } from './util';

export default function bufferNode(audioCtx, properties,) {
  const buffer = audioCtx.createBufferSource();
  buffer.loop = properties.loop;
  setValueByType(audioCtx, 'detune', buffer.detune, properties,);
  setValueByType(audioCtx, 'playbackRate', buffer.playbackRate, properties,);
  buffer.loopStart = properties.loopStart;
  buffer.loopEnd = properties.loopEnd;
  buffer.buffer = properties.buffer;
  buffer.start();
  return buffer;
}
