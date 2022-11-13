import { setValueByType, } from "./util";

export default function dynamicsCompressorNode(audioCtx, properties,) {
  const dynamicsCompressor = audioCtx.createDynamicsCompressor();
  // dynamicsCompressor.reduction = properties.reduction
  setValueByType(audioCtx, 'threshold', dynamicsCompressor.threshold, properties,);
  setValueByType(audioCtx, 'knee', dynamicsCompressor.knee, properties,);
  setValueByType(audioCtx, 'ratio', dynamicsCompressor.ratio, properties,);
  setValueByType(audioCtx, 'attack', dynamicsCompressor.attack, properties,);
  setValueByType(audioCtx, 'release', dynamicsCompressor.release, properties,);
  return dynamicsCompressor;
}
