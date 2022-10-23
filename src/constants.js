export const NODE_TYPE = {
  OSCILLATOR: 'oscillator',
  BIQUAD_FILTER: 'biquadFilter',
  DELAY: 'delay',
  PAN: 'pan',
  GAIN: 'gain',
  BUFFER: 'buffer',
  OUTPUT: 'output',
  MICROPHONE: 'microphone',
};
export const NODES = [...Object.keys(NODE_TYPE,),];

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

  BUFFER: {
    POSITION: {
      x: 100,
      y: 500,
      width: '100px',
      height: '50px',
    },
    NODE: {
      type: NODE_TYPE.BUFFER,
      properties: {
        detune: 0,
        duration: 0,
        buffer: [],
        loop: false,
        loopStart: 0,
        loopEnd: 0,
        playbackRate: 1.0,
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

  MICROPHONE: {
    NODE: {
      type: NODE_TYPE.MICROPHONE,
      properties: {},
    },
    POSITION: {
      x: 240,
      y: 300,
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
