import { useCallback, } from 'preact/hooks';
import { useImmerx, } from '../store/state';

// const lens = {
//   get: (state) => state.nodes,
//   set: (stateDraft, nodes) => {
//     console.log('stateDraft', stateDraft, nodes);
//     stateDraft.nodes = nodes;
//   },
// };
export default function useNodes() {
  const [state, update,] = useImmerx();

  const setPosition = useCallback(
    (index, pos,) => {
      console.log('setPosition', index, pos,);
      update((draft,) => void (draft.positions[index] = pos),);
    },
    [update,],
  );

  const setXY = useCallback(
    (index, x, y,) => {
      console.log('setXY', { index, x, y, },);
      update((draft,) => {
        draft.positions[index].x = x;
        draft.positions[index].y = y;
      },);
    },
    [update,],
  );

  const remove = useCallback(
    (index,) => {
      update((draft,) => {
        draft.positions.splice(index, 1,);
        draft.nodes.splice(index, 1,);

        // find and delete any connected wires
        [
          ...new Set(
            state.wires.map((wire, i,) => ([wire.from, wire.to,].includes(index,) ? i : false),),
          ),
        ].forEach((wireIndex,) => {
          if (!Number.isNaN) draft.wires.splice(wireIndex, 1,);
        },);
      },);
    },
    [update, state.wires,],
  );

  return {
    remove,
    setPosition,
    setXY,
  };
}
