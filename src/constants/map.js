import { NODE_TYPE, } from '.';
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

export const noop = () => {}