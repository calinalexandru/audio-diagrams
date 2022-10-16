import { useCallback } from 'preact/hooks';
import { useImmerx } from '../store/state';

// const lens = {
//   get: (state) => state.nodes,
//   set: (stateDraft, nodes) => {
//     console.log('stateDraft', stateDraft, nodes);
//     stateDraft.nodes = nodes;
//   },
// };
export default function useNodes() {
  const [state, update] = useImmerx();

  console.log('useNodes', state);

  const setPosition = useCallback(
    (index, pos) => {
      console.log('setPosition', index, pos);
      update((draft) => void (draft.nodes[index].position = pos));
    },
    [update]
  );

  const setXY = useCallback(
    (index, x, y) => {
      update((draft) => {
        draft.nodes[index].position.x = x;
        draft.nodes[index].position.y = y;
      });
    },
    [update]
  );

  const remove = useCallback(
    (index) => {
      update((draft) => void draft.nodes.splice(index, 1));
    },
    [update]
  );

  return {
    remove,
    setPosition,
    setXY,
  };
}
