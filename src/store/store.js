import { createObservableMiddleware, setAdapter } from '@immerx/observable';
import { from } from 'rxjs';
import { create } from './state';

import { DEFAULT_NODES } from '../constants';
import rootEpic from './epics/nodes';

const middleware = createObservableMiddleware();
const initialState = {
  nodes: DEFAULT_NODES,
  wires: [
    // 1, // indexOf oscillator
    // 0, // indexOf output
  ],
  connecting: [],
  // nodes: [
  //   {
  //     type: 'oscillator',
  //     properties: {
  //       // the propertiez
  //     },
  //     position: {
  //       x: 0,
  //       y: 0,
  //       width: 0,
  //       height: 0,
  //     },
  //   },
  // ],

  // properties: {
  //   oscillator: {
  //     type: 'sine', // sine, square, sawtooth, triangle
  //     frequency: 440,
  //     detune: 0,
  //   },
  // },
};

export default create(initialState, [middleware]);

setAdapter(from);
middleware.run(rootEpic);
