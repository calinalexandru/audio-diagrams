import { ADD, combineEpics, } from '@immerx/observable';
import { patchOf, } from '@immerx/observable/operators';
import { map, withLatestFrom, } from 'rxjs';

const addToConnectingEpic = (patch$, state$,) =>
  patch$.pipe(
    patchOf({ op: ADD, path: ['connecting',], },),
    withLatestFrom(state$,),
    map(([, { connecting, },],) => (draft,) => {
      // console.log('addToConnectingEpic',);
      const [
        { direction: firstDir, index: firstIndex, } = {},
        { direction: secondDir, index: secondIndex, } = {},
      ] = connecting;

      const outputToInput = firstDir === 'output' && secondDir === 'input';
      const inputToOutput = firstDir === 'input' && secondDir === 'output';
      if (connecting.length >= 2) {
        if (outputToInput || inputToOutput) {
          draft.wires.push({
            from: outputToInput ? firstIndex : secondIndex,
            to: outputToInput ? secondIndex : firstIndex,
          },);
        }
        draft.connecting = [];
      }
    },),
  );

export default combineEpics(addToConnectingEpic,);
