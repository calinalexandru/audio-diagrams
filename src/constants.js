export const NODE_TYPE = {
  OSCILLATOR: 'oscillator',
  BIQUAD_FILTER: 'biquadFilter',
  DELAY: 'delay',
  PAN: 'pan',
  GAIN: 'gain',
  INPUT: 'input',
  OUTPUT: 'output',
};
export const NODES = ['input', 'oscillator', 'output',];

export const DEFAULTS = {
  OSCILLATOR: {
    POSITION: {
      x: 100,
      y: 500,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.OSCILLATOR,
      properties: {
        type: 'sine',
        frequency: 440,
        detune: 0,
        duration: 0,
      },
    },
  },

  BIQUAD_FILTER: {
    POSITION: {
      x: 250,
      y: 550,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.BIQUAD_FILTER,
      properties: {
        type: 'lowpass',
        frequency: 1000,
        Q: 0,
        gain: 0,
        detune: 0,
      },
    },
  },

  GAIN: {
    POSITION: {
      x: 500,
      y: 200,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.GAIN,
      properties: {
        gain: 0,
      },
    },
  },

  DELAY: {
    POSITION: {
      x: 400,
      y: 500,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.DELAY,
      properties: {
        delay: 0,
      },
    },
  },

  PAN: {
    POSITION: {
      x: 200,
      y: 700,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.PAN,
      properties: {
        pan: 0,
      },
    },
  },

  OUTPUT: {
    NODE: {
      type: NODE_TYPE.OUTPUT,
      properties: {},
    },
    POSITION: {
      x: 740,
      y: 500,
    },
  },
};

export const DEFAULT_NODES = [{ ...DEFAULTS.OUTPUT.NODE, },];
export const DEFAULT_POSITIONS = [{ ...DEFAULTS.OUTPUT.POSITION, },];
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
    HEIGHT: 190,
  },
};
