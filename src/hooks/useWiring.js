import { useCallback } from 'preact/hooks';
import { useImmerx } from '../store/state';

export default function useWiring() {
  const [_, update] = useImmerx();

  const addToWiring = useCallback(
    ({ from, to }) => {
      update((draft) => void draft.wires.push({ from, to }));
    },
    [update]
  );

  const addToConnecting = useCallback(
    (index, direction) => {
      update((draft) => void draft.connecting.push({ index, direction }));
    },
    [update]
  );

  return {
    addToConnecting,
    addToWiring,
  };
}
