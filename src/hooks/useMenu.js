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

  const addOscilator = useCallback(() => {
    update((draft,) => {
      draft.nodes.push({ ...DEFAULTS.OSCILLATOR.NODE, },);
      draft.positions.push({ ...DEFAULTS.OSCILLATOR.POSITION, },);
    },);
  }, [],);

  const addBiquadFilter = useCallback(() => {
    update((draft,) => {
      draft.nodes.push({ ...DEFAULTS.BIQUAD_FILTER.NODE, },);
      draft.positions.push({ ...DEFAULTS.BIQUAD_FILTER.POSITION, },);
    },);
  }, [],);

  const addGain = useCallback(() => {
    update((draft,) => {
      draft.nodes.push({ ...DEFAULTS.GAIN.NODE, },);
      draft.positions.push({ ...DEFAULTS.GAIN.POSITION, },);
    },);
  }, [],);

  const addDelay = useCallback(() => {
    update((draft,) => {
      draft.nodes.push({ ...DEFAULTS.DELAY.NODE, },);
      draft.positions.push({ ...DEFAULTS.DELAY.POSITION, },);
    },);
  }, [],);

  const addPan = useCallback(() => {
    update((draft,) => {
      draft.nodes.push({ ...DEFAULTS.PAN.NODE, },);
      draft.positions.push({ ...DEFAULTS.PAN.POSITION, },);
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
    addPan,
    addDelay,
    addGain,
    addOscilator,
    addBiquadFilter,
    clearAllNodes,
    clearAllWires,
    cancelConnection,
    zoom,
  };
}
