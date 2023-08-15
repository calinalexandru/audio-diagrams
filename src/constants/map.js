import { NODE_TYPE, } from ".";
import Analyser from '../components/Analyser';
import BiquadFilter from '../components/BiquadFilter';
import Buffer from '../components/Buffer';
import Convolver from '../components/Convolver';
import Delay from '../components/Delay';
import DynamicsCompressor from '../components/DynamicsCompressor';
import Gain from '../components/Gain';
import Microphone from '../components/Microphone';
import Oscillator from '../components/Oscillator';
import Pan from '../components/Pan';
import oscillatorNode from '../hooks/nodes/oscillator';
import biquadFilterNode from '../hooks/nodes/biquadFilter';
import dynamicsCompressorNode from '../hooks/nodes/dynamicsCompressor';
import microphoneNode from '../hooks/nodes/microphone';
import bufferNode from '../hooks/nodes/buffer';
import gainNode from '../hooks/nodes/gain';
import convolverNode from '../hooks/nodes/convolver';
import analyserNode from '../hooks/nodes/analyser';
import delayNode from '../hooks/nodes/delay';
import panNode from '../hooks/nodes/pan';

export const NODES_COMPONENTS_MAP = {
  [NODE_TYPE.OSCILLATOR]: Oscillator,
  [NODE_TYPE.CONVOLVER]: Convolver,
  [NODE_TYPE.DYNAMICS_COMPRESSOR]: DynamicsCompressor,
  [NODE_TYPE.ANALYSER]: Analyser,
  [NODE_TYPE.BIQUAD_FILTER]: BiquadFilter,
  [NODE_TYPE.BUFFER]: Buffer,
  [NODE_TYPE.DELAY]: Delay,
  [NODE_TYPE.GAIN]: Gain,
  [NODE_TYPE.MICROPHONE]: Microphone,
  [NODE_TYPE.PAN]: Pan,
};

export const AUDIO_NODES_MAP = {
  [NODE_TYPE.OSCILLATOR]: oscillatorNode,
  [NODE_TYPE.BIQUAD_FILTER]: biquadFilterNode,
  [NODE_TYPE.DYNAMICS_COMPRESSOR]: dynamicsCompressorNode,
  [NODE_TYPE.MICROPHONE]: microphoneNode,
  [NODE_TYPE.BUFFER]: bufferNode,
  [NODE_TYPE.GAIN]: gainNode,
  [NODE_TYPE.CONVOLVER]: convolverNode,
  [NODE_TYPE.ANALYSER]: analyserNode,
  [NODE_TYPE.DELAY]: delayNode,
  [NODE_TYPE.PAN]: panNode,
};
