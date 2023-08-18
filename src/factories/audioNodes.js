import { setValueByType, } from './util';

export default async function createAudioNode(
  audioCtx,
  nodeType,
  properties,
  mediaStreamRef,
) {
  const config = {
    microphone: {
      create: async () => {
        try {
          mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
            audio: true,
          },);
          return audioCtx.createMediaStreamSource(mediaStreamRef.current,);
        } catch (err) {
          console.warn('Microphone not found', err,);
          return false;
        }
      },
    },
    oscillator: {
      create: () => audioCtx.createOscillator(),
      properties: ['type', 'detune', 'frequency', 'type', 'duration',],
    },
    analyser: {
      create: () => audioCtx.createAnalyser(),
      properties: ['fftSize',],
    },
    gain: {
      create: () => audioCtx.createGain(),
      properties: ['gain',],
    },
    biquadFilter: {
      create: () => audioCtx.createBiquadFilter(),
      properties: ['type', 'detune', 'gain', 'Q', 'frequency',],
    },
    convolver: {
      create: () => audioCtx.createConvolver(),
      properties: ['normalize', 'buffer',],
    },
    dynamicsCompressor: {
      create: () => audioCtx.createDynamicsCompressor(),
      properties: ['threshold', 'knee', 'ratio', 'attack', 'release',],
    },
    buffer: {
      create: () => audioCtx.createBufferSource(),
      properties: ['loop', 'detune', 'playbackRate', 'loopStart', 'loopEnd', 'buffer',],
    },
    delay: {
      create: () => audioCtx.createDelay(),
      properties: ['delayTime',],
    },
    pan: {
      create: () => audioCtx.createStereoPanner(),
      properties: ['pan',],
    },
  };

  const nodeConfig = config[nodeType];
  if (!nodeConfig) {
    throw new Error(`Unsupported node type: ${nodeType}`,);
  }

  const node = await nodeConfig.create();

  if (typeof node.start === 'function') {
    node.start();
  }

  nodeConfig?.properties?.forEach((property,) => {
    if (Object.prototype.hasOwnProperty.call(properties, property,)) {
      if (node[property] instanceof AudioParam) {
        setValueByType(audioCtx, property, node[property], properties,);
      } else if (property === 'duration' && Number(properties.duration,)) {
        node.stop(audioCtx.currentTime + Number(properties.duration,),);
      } else {
        node[property] = properties[property];
      }
    }
  },);

  return node;
}

export const noop = () => {};
