export const NODE_TYPE = {
  OSCILLATOR: 'oscillator',
  CONVOLVER: 'convolver',
  DYNAMICS_COMPRESSOR: 'dynamicsCompressor',
  ANALYSER: 'analyser',
  BIQUAD_FILTER: 'biquadFilter',
  DELAY: 'delay',
  PAN: 'pan',
  GAIN: 'gain',
  BUFFER: 'buffer',
  OUTPUT: 'output',
  MICROPHONE: 'microphone',
};
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
        frequency: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 440,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 440,],
            startTime: 0,
            duration: 10,
          },
        },
        detune: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 0,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 0,],
            startTime: 0,
            duration: 1,
          },
        },
        duration: 0,
      },
    },
  },

  CONVOLVER: {
    POSITION: {
      x: 50,
      y: 70,
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
      y: 70,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.DYNAMICS_COMPRESSOR,
      properties: {
        reduction: 0,
        threshold: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: -24,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, -24,],
            startTime: 0,
            duration: 1,
          },
        },
        knee: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 30,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 30,],
            startTime: 0,
            duration: 1,
          },
        },
        ratio: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 12,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 12,],
            startTime: 0,
            duration: 1,
          },
        },
        attack: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 0.003,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 0.003,],
            startTime: 0,
            duration: 1,
          },
        },
        release: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 0.25,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 0.25,],
            startTime: 0,
            duration: 1,
          },
        },
      },
    },
  },

  BUFFER: {
    POSITION: {
      x: 50,
      y: 130,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.BUFFER,
      properties: {
        detune: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 0,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 0,],
            startTime: 0,
            duration: 1,
          },
        },
        playbackRate: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 1.0,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 1.0,],
            startTime: 0,
            duration: 1,
          },
        },
        buffer: [],
        loop: true,
        loopStart: 0,
        loopEnd: 0,
      },
    },
  },

  ANALYSER: {
    POSITION: {
      x: 50,
      y: 210,
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
      x: 50,
      y: 290,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.BIQUAD_FILTER,
      properties: {
        type: 'lowpass',
        frequency: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 1000,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 1000,],
            startTime: 0,
            duration: 1,
          },
        },
        Q: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 0,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 0,],
            startTime: 0,
            duration: 1,
          },
        },
        gain: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 1,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 1,],
            startTime: 0,
            duration: 1,
          },
        },
        detune: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 0,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 0,],
            startTime: 0,
            duration: 1,
          },
        },
      },
    },
  },

  GAIN: {
    POSITION: {
      x: 50,
      y: 370,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.GAIN,
      properties: {
        gain: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 1,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 0.5, 1, 0.5, 0, 0.5, 1,],
            startTime: 0,
            duration: 1,
          },
        },
      },
    },
  },

  DELAY: {
    POSITION: {
      x: 50,
      y: 460,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.DELAY,
      properties: {
        delay: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 0,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 1,],
            startTime: 0,
            duration: 1,
          },
        },
      },
    },
  },

  PAN: {
    POSITION: {
      x: 50,
      y: 540,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.PAN,
      properties: {
        pan: {
          valueType: 'setValueAtTime',
          setValueAtTime: {
            value: 0,
            startTime: 0,
          },
          setValueCurveAtTime: {
            values: [0, 0,],
            startTime: 0,
            duration: 1,
          },
        },
      },
    },
  },

  MICROPHONE: {
    NODE: {
      type: NODE_TYPE.MICROPHONE,
      properties: {},
    },
    POSITION: {
      x: 50,
      y: 550,
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
