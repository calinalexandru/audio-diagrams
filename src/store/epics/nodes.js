import { ADD, combineEpics, REMOVE, REPLACE } from '@immerx/observable';
import { filter, ignoreElements, pluck, tap } from 'rxjs';

const addAudioNode = (patch$) =>
  patch$.pipe(
    filter((patch) => [ADD, REPLACE, REMOVE].includes(patch.op)),
    pluck('value'),
    tap(() => {
      console.log('something changed in the matrix');
    }),
    ignoreElements()
  );

export default combineEpics(addAudioNode);
