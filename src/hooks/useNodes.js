import { useCallback, } from 'preact/hooks';
import { useImmerx, } from '../store/state';

export default function useNodes() {
  const [, update,] = useImmerx(null,);
  const [wires,] = useImmerx('wires',);

  const setPosition = useCallback(
    (index, pos,) => {
      // console.log('setPosition', index, pos,);
      update((draft,) => void (draft.positions[index] = pos),);
    },
    [update,],
  );

  const setXY = useCallback(
    (index, x, y,) => {
      // console.log('setXY', { index, x, y, },);
      update((draft,) => {
        draft.positions[index].x = x;
        draft.positions[index].y = y;
      },);
    },
    [update,],
  );

  const remove = useCallback(
    (index,) => {
      // console.log('Remove.index', index,);
      update((draft,) => {
        // find and delete any connected wires
        const toDelete = [
          ...new Set(
            wires.map((wire, i,) =>
              [wire.from, wire.to,].includes(index,) ? i : false,
            ),
          ),
        ];
        
        // to remove multiple items from the stack
        // we must splice it in reverse order
        toDelete.sort().reverse().forEach((wireIndex,) => {
          if (wireIndex !== false) draft.wires.splice(wireIndex, 1,);
        },);

        draft.positions.splice(index, 1,);
        draft.nodes.splice(index, 1,);
      },);
    },
    [update, wires,],
  );

  return {
    remove,
    setPosition,
    setXY,
  };
}
