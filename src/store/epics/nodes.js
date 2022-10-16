import { ADD, combineEpics, REMOVE, REPLACE } from '@immerx/observable';
import { patchOf } from '@immerx/observable/operators';
import {
  concatMap,
  filter,
  ignoreElements,
  map,
  of,
  pluck,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs';

const addToConnectingEpic = (patch$, state$) =>
  patch$.pipe(
    patchOf({ op: ADD, path: ['connecting'] }),
    withLatestFrom(state$),
    map(([action, state]) => (draft) => {
      console.log('state$.val', state);
      if (
        state.connecting.length >= 2 &&
        state.connecting[0].direction === 'output' &&
        state.connecting[1].direction === 'input'
      ) {
        draft.wires.push({
          from: state.connecting[0].index,
          to: state.connecting[1].index,
        });
        draft.connecting = [];
      } else {
        draft.wires = state.wires;
      }
    })
  );

export default combineEpics(addToConnectingEpic);
