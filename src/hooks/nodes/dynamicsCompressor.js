export default function dynamicsCompressorNode(audioCtx, properties,) {
  const dynamicsCompressor = audioCtx.createDynamicsCompressor();
  dynamicsCompressor.threshold.value = properties.threshold;
  return dynamicsCompressor;
}
