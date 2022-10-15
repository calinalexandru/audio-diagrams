export const NODE_TYPE = {
  OSCILLATOR: 'oscillator',
  GAIN: 'gain',
  INPUT: 'input',
  OUTPUT: 'output',
};
export const NODES = ['input', 'oscillator', 'output'];

export const DEFAULT_NODES = [
  {
    type: 'output',
    properties: {},
    position: {
      x: 940,
      y: 700,
    },
  },
];

export const DEFAULT_OSCILLATOR = {
  type: NODE_TYPE.OSCILLATOR,
  properties: {
    type: 'sine',
    frequency: 440,
    detune: 0,
  },
  position: {
    x: 100,
    y: 500,
    width: '100px',
    height: '50px',
  },
};

export const DEFAULT_GAIN = {
  type: NODE_TYPE.GAIN,
  properties: {
    gain: 0,
  },
  position: {
    x: 500,
    y: 200,
    width: '100px',
    height: '50px',
  },
};
