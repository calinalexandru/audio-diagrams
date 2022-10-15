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
    (index) => {
      update((draft) => void draft.connecting.push(index));
    },
    [update]
  );

  return {
    addToConnecting,
    addToWiring,
  };
}
