import { create as stateCreate, } from '@immerx/state';
import { useCallback, useEffect, useMemo, useState, } from 'preact/hooks';

export function noop() {}

let state$;
export function create(initialState, middleware,) {
  state$ = stateCreate(initialState, middleware,);
  return state$;
}

export function useImmerx(lens,) {
  const innerState$ = useMemo(() => lens == null ? state$ : state$.isolate(lens,), [lens,],)

  const [state, setState,] = useState(innerState$.value,);

  const update = useCallback(
    (producer,) => {
      innerState$.update(producer,);
    },
    [innerState$,],
  );

  useEffect(() => {
    const sub = innerState$.subscribe({
      next: lens !== null ? setState : noop,
    },);

    return () => sub.unsubscribe();
  }, [innerState$, lens,],);

  return [state, update,];
}

export function identity(x,) {
  return x;
}

export default create;
