import AudioParam from './AudioParam';

export const NODE_TYPE = {
  OSCILLATOR: 'oscillator',
  // TODO: implement buffer
  // CONVOLVER: 'convolver',
  DYNAMICS_COMPRESSOR: 'dynamicsCompressor',
  ANALYSER: 'analyser',
  BIQUAD_FILTER: 'biquadFilter',
  GAIN: 'gain',
  DELAY: 'delay',
  PAN: 'pan',
  // TODO: implement buffer
  // BUFFER: 'buffer',
  OUTPUT: 'output',
  MICROPHONE: 'microphone',
};

export const AUDIO_PARAM_PROPS = [
  'frequency',
  'gain',
  'delay',
  'threshold',
  'attack',
  'knee',
  'ratio',
];

export const NODES = [...Object.keys(NODE_TYPE,).filter((n,) => n !== 'OUTPUT',),];

export const FFT_SIZES = [
  32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768,
];

export const HZ = '&#13200';
export const MAX_FREQUENCY = 22400;
export const BIQUAD_FILTER_TYPES = [
  'lowpass',
  'highpass',
  'bandpass',
  'lowshelf',
  'highshelf',
  'peaking',
  'notch',
  'allpass',
];

export const BOX_SIZE = {
  SMALL: {
    WIDTH: 122,
    HEIGHT: 74,
  },
  BIG: {
    WIDTH: 194,
    HEIGHT: 410,
  },
};

export const DEFAULTS = {
  OSCILLATOR: {
    POSITION: {
      x: 50,
      y: 50,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.OSCILLATOR,
      properties: {
        type: 'sine',
        frequency: AudioParam.getMethods(),
        detune: AudioParam.getMethods(),
        duration: 0,
      },
    },
  },

  CONVOLVER: {
    POSITION: {
      x: 50,
      y: 140,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.CONVOLVER,
      properties: {
        normalize: false,
      },
    },
  },

  DYNAMICS_COMPRESSOR: {
    POSITION: {
      x: 50,
      y: 230,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.DYNAMICS_COMPRESSOR,
      properties: {
        reduction: 0,
        threshold: AudioParam.getMethods({
          value: -24,
          values: [0, -24,],
          duration: 1,
        },),
        knee: AudioParam.getMethods({ value: 30, },),
        ratio: AudioParam.getMethods({ value: 12, },),
        attack: AudioParam.getMethods({ value: 0.003, },),
        release: AudioParam.getMethods({ value: 0.25, },),
      },
    },
  },

  // TODO: implement buffer
  // BUFFER: {
  //   POSITION: {
  //     x: 50,
  //     y: 130,
  //     width: '100px',
  //     height: '50px',
  //   },
  //   NODE: {
  //     type: NODE_TYPE.BUFFER,
  //     properties: {
  //       detune: {
  //         valueType: 'setValueAtTime',
  //         setValueAtTime: {
  //           value: 0,
  //           startTime: 0,
  //         },
  //         setValueCurveAtTime: {
  //           values: [0, 0,],
  //           startTime: 0,
  //           duration: 1,
  //         },
  //       },
  //       playbackRate: {
  //         valueType: 'setValueAtTime',
  //         setValueAtTime: {
  //           value: 1.0,
  //           startTime: 0,
  //         },
  //         setValueCurveAtTime: {
  //           values: [0, 1.0,],
  //           startTime: 0,
  //           duration: 1,
  //         },
  //       },
  //       buffer: [],
  //       loop: true,
  //       loopStart: 0,
  //       loopEnd: 0,
  //     },
  //   },
  // },

  ANALYSER: {
    POSITION: {
      x: 50,
      y: 320,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.ANALYSER,
      properties: {
        fftSize: 2048,
        minDecibels: 0,
        maxDecibels: 0,
        smoothingTimeConstant: 0,
      },
    },
  },

  BIQUAD_FILTER: {
    POSITION: {
      x: 240,
      y: 50,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.BIQUAD_FILTER,
      properties: {
        type: 'lowpass',
        frequency: AudioParam.getMethods(),
        Q: AudioParam.getMethods(),
        gain: AudioParam.getMethods(),
        detune: AudioParam.getMethods(),
      },
    },
  },

  GAIN: {
    POSITION: {
      x: 240,
      y: 140,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.GAIN,
      properties: {
        gain: AudioParam.getMethods({ value: 1, },),
      },
    },
  },

  DELAY: {
    POSITION: {
      x: 240,
      y: 230,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.DELAY,
      properties: {
        delay: AudioParam.getMethods({ value: 3, },),
      },
    },
  },

  PAN: {
    POSITION: {
      x: 240,
      y: 320,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.PAN,
      properties: {
        pan: AudioParam.getMethods(),
      },
    },
  },

  MICROPHONE: {
    NODE: {
      type: NODE_TYPE.MICROPHONE,
      properties: {},
    },
    POSITION: {
      x: 430,
      y: 50,
      width: '100px',
      height: '50px',
    },
  },

  OUTPUT: {
    NODE: {
      type: NODE_TYPE.OUTPUT,
      properties: {},
    },
    POSITION: {
      x: 50,
      y: 560,
    },
  },
};

export const DEFAULT_NODES = [{ ...DEFAULTS.OUTPUT.NODE, },];
export const DEFAULT_POSITIONS = [{ ...DEFAULTS.OUTPUT.POSITION, },];
