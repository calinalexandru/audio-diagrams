export default function analyserNode(audioCtx, properties,) {
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = properties.fftSize;
  return analyser;
}
