import { createObservableMiddleware, setAdapter } from '@immerx/observable';
import { from } from 'rxjs';
import { create } from './state';

import rootEpic from './epics/nodes';

const middleware = createObservableMiddleware();
const initialState = {
  nodes: [],
  properties: {
    oscillator: {
      type: 'sine', // sine, square, sawtooth, triangle
      frequency: 440,
      detune: 0,
    },
  },
};

export default create(initialState, [middleware]);

setAdapter(from);
middleware.run(rootEpic);
