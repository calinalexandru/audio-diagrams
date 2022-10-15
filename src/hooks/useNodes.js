import { useCallback } from 'preact/hooks';
import { useImmerx } from '../store/state';

export default function useNodes() {
  const [state, update] = useImmerx();

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
