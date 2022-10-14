import { createObservableMiddleware, setAdapter } from '@immerx/observable';
import { create } from '@immerx/state';
import { from } from 'rxjs';

import rootEpic from './epics/nodes';

const middleware = createObservableMiddleware();
const initialState = {
  nodes: [oscillator, output],
};

export default create(initialState, [middleware]);

setAdapter(from);
middleware.run(rootEpic);
