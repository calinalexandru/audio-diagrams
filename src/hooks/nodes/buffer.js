export default function bufferNode(audioCtx, properties,) {
  const buffer = audioCtx.createBufferSource();
  buffer.loop = properties.loop;
  buffer.detune.setValueAtTime(properties.detune, audioCtx.currentTime,);
  buffer.playbackRate.setValueAtTime(
    properties.playbackRate,
    audioCtx.currentTime,
  );
  buffer.loopStart = properties.loopStart;
  buffer.loopEnd = properties.loopEnd;
  return buffer;
}
