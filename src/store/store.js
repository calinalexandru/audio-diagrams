import { createObservableMiddleware, setAdapter, } from '@immerx/observable';
import { from, } from 'rxjs';
import { create, } from './state';

import { DEFAULT_NODES, DEFAULT_POSITIONS, } from '../constants';
import rootEpic from './epics/nodes';

const middleware = createObservableMiddleware();
const initialState = {
  nodes: DEFAULT_NODES,
  wires: [], // [{index: 1, direction: 'input'}]
  connecting: [], // {from: 1, to: 1}
  positions: DEFAULT_POSITIONS,
};

export default create(initialState, [middleware,],);

setAdapter(from,);
middleware.run(rootEpic,);
