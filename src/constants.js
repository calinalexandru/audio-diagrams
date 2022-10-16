export const NODE_TYPE = {
  OSCILLATOR: 'oscillator',
  DELAY: 'delay',
  PAN: 'pan',
  GAIN: 'gain',
  INPUT: 'input',
  OUTPUT: 'output',
};
export const NODES = ['input', 'oscillator', 'output'];

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

export const DEFAULT_NODES = [{ ...DEFAULTS.OUTPUT.NODE }];
export const DEFAULT_POSITIONS = [{ ...DEFAULTS.OUTPUT.POSITION }];
