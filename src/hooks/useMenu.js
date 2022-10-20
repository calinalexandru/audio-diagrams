import { useCallback, } from 'preact/hooks';
import { DEFAULTS, NODE_TYPE, } from '../constants';
import { useImmerx, } from '../store/state';

export default function useMenu() {
  const [positions,] = useImmerx('positions',);
  const [, update,] = useImmerx(null,);

  const clearAllNodes = useCallback(() => {
    update((draft,) => {
      draft.nodes = [
        draft.nodes.find((node,) => node.type === NODE_TYPE.OUTPUT,),
      ];
      draft.wires.length = 0;
      draft.connecting.length = 0;
      draft.positions = [positions[0],];
    },);
  }, [positions,],);

  const cancelConnection = useCallback(() => {
    update((draft,) => void (draft.connecting.length = 0),);
  }, [],);

  const clearAllWires = useCallback(() => {
    update((draft,) => {
      draft.wires.length = 0;
      draft.connecting.length = 0;
    },);
  }, [],);

  const add = useCallback((type,) => {
    update((draft,) => {
      draft.nodes.push({ ...DEFAULTS[type].NODE, },);
      draft.positions.push({ ...DEFAULTS[type].POSITION, },);
    },);
  }, [],);

  const removeLine = useCallback((index,) => {
    update((draft,) => void draft.wires.splice(index, 1,),);
  }, [],);

  const zoom = useCallback((type,) => {
    update((draft,) => {
      if (type === 'in') {
        draft.scale += 0.04;
      } else if (type === 'out') {
        draft.scale -= 0.04;
      } else {
        draft.scale = type;
      }
    },);
  }, [],);

  return {
    removeLine,
    add,
    clearAllNodes,
    clearAllWires,
    cancelConnection,
    zoom,
  };
}
