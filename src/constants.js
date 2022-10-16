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
  },
];

export const DEFAULT_POSITIONS = [
  {
    x: 740,
    y: 500,
  },
];

export const DEFAULT_OSCILLATOR = {
  type: NODE_TYPE.OSCILLATOR,
  properties: {
    type: 'sine',
    frequency: 440,
    detune: 0,
  },
};

export const DEFAULT_OSCILLATOR_POSITION = {
  x: 100,
  y: 500,
  width: '100px',
  height: '50px',
};

export const DEFAULT_GAIN = {
  type: NODE_TYPE.GAIN,
  properties: {
    gain: 0,
  },
};

export const DEFAULT_GAIN_POSITION = {
  x: 500,
  y: 200,
  width: '100px',
  height: '50px',
};
