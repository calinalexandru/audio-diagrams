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

  const remove = useCallback(
    (index) => {
      update((draft) => void draft.nodes.splice(index, 1));
    },
    [update]
  );

  return {
    remove,
    setPosition,
  };
}
