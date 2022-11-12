export default function convolverNode(audioCtx, properties,) {
  const convolver = audioCtx.createConvolver();
  convolver.normalize = properties.normalize;
  return convolver;
}
