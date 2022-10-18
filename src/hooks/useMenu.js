import { useCallback, } from "preact/hooks";
import { DEFAULTS, NODE_TYPE, } from "../constants";
import { useImmerx, } from "../store/state";

export default function useMenu() {
  const [{positions,}, update,] = useImmerx();

  const clearAllNodes = useCallback(() => {
    update((draft,) => {
      draft.nodes = [
        draft.nodes.find((node,) => node.type === NODE_TYPE.OUTPUT,),
      ];
      draft.wires = [];
      draft.connecting = [];
      draft.positions = [positions[0],];
    },);
  }, [positions,],);

  const cancelConnection = useCallback(() => {
    update((draft,) => void (draft.connecting = []),);
  }, [],);

  const clearAllWires = useCallback(() => {
    update((draft,) => {
      draft.wires = [];
      draft.connecting = [];
    },);
  }, [],);

  const addOscilator = useCallback(() => {
    update((draft,) => {
      draft.nodes.push({ ...DEFAULTS.OSCILLATOR.NODE, },);
      draft.positions.push({ ...DEFAULTS.OSCILLATOR.POSITION, },);
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
	
	return {
		removeLine,
		addPan,
		addDelay,
		addGain,
		addOscilator,
		clearAllNodes,
		clearAllWires,
		cancelConnection,
	}
}