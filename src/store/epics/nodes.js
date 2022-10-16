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
      // console.log('state$.val', state);
      const firstDir = state.connecting?.[0]?.direction;
      const secondDir = state.connecting?.[1]?.direction;
      if (state.connecting.length >= 2) {
        if (new Set(state.connecting.map((con) => con.index)).size <= 1) {
          draft.connecting = [];
        } else if (firstDir === 'output' && secondDir === 'input') {
          draft.wires.push({
            from: state.connecting[0].index,
            to: state.connecting[1].index,
          });
        } else if (firstDir === 'input' && secondDir === 'output') {
          draft.wires.push({
            from: state.connecting[1].index,
            to: state.connecting[0].index,
          });
        }
        draft.connecting = [];
      } else {
        draft.wires = state.wires;
      }
    })
  );

export default combineEpics(addToConnectingEpic);
