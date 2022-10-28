import { useCallback, useEffect, } from 'preact/hooks';
import { DEFAULTS, NODE_TYPE, } from '../constants';
import { useImmerx, } from '../store/state';

export default function useMenu({ downloadAnchorRef, fileUploadRef, },) {
  const [state,] = useImmerx();
  const [, update,] = useImmerx(null,);

  const onReaderLoad = useCallback(
    (e,) => {
      //! TODO verifiy state integrity

      update((draft,) => {
        Object.assign(draft, JSON.parse(e.target.result,),);
      },);
    },
    [update,],
  );

  const onFileChange = useCallback((e,) => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0],);
  }, [],);

  useEffect(() => {
    fileUploadRef?.current?.addEventListener?.('change', onFileChange,);

    return () => {
      fileUploadRef?.current?.removeEventListner?.('change', onFileChange,);
    };
  }, [fileUploadRef?.current, onFileChange,],);

  const exportState = useCallback(() => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(state,),
    )}`;
    downloadAnchorRef.current.setAttribute('href', dataStr,);
    downloadAnchorRef.current.click();
  }, [state, downloadAnchorRef?.current,],);

  const loadState = useCallback(() => {
    fileUploadRef.current.click();
  }, [fileUploadRef?.current,],);

  const clearAllNodes = useCallback(() => {
    update((draft,) => {
      draft.nodes = [
        draft.nodes.find((node,) => node.type === NODE_TYPE.OUTPUT,),
      ];
      draft.wires.length = 0;
      draft.connecting.length = 0;
      draft.positions = [state.positions[0],];
    },);
  }, [state.positions,],);

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
    exportState,
    loadState,
    cancelConnection,
    zoom,
  };
}
