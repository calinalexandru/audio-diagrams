import { useEffect, useRef, useState, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';
import createAudioNode from '../factories/audioNodes';

export default function useAudioNodes(signal, isPlaying, { nodes, wires, },) {
  const mediaStreamRef = useRef(null,);
  const [, setTimer,] = useState(0,);
  const live = useRef(Array(nodes.length,).fill(null,),);
  const audioCtx = useRef({},);
  useEffect(() => {
    audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();

    if (isPlaying) {
      audioCtx.current.resume();
    } else {
      audioCtx.current.suspend();
    }

    const audioNodes = nodes.map(async (node,) => {
      try {
        return await createAudioNode(
          audioCtx.current,
          node.type,
          node.properties,
          mediaStreamRef,
        );
      } catch (e) {
        return audioCtx.current.destination;
      }
    },);

    wires.forEach(async (wire,) => {
      const from = await audioNodes[wire.from];
      const to = await audioNodes[wire.to];
      try {
        from.connect(to,);

        if (nodes[wire.to].type === NODE_TYPE.ANALYSER) {
          //* mutate live node with current audio
          live.current[wire.to] = to;

          //! force component update due to using ref
          setTimer(new Date().getTime(),);
        }
      } catch (e) {
        console.warn('Failed to connect node x to y', e,);
      }
    },);

    return () => {
      // console.log('disconnecting', mediaStreamRef.current, audioNodes,)
      // disconnect media source
      mediaStreamRef.current?.getTracks?.().forEach((track,) => track.stop(),);

      // disconnect all audio nodes from their destination
      audioNodes.forEach((audioNode,) => {
        audioNode?.disconnect?.();
      },);

      // close context
      audioCtx.current.close();
    };
  }, [signal, nodes, wires,],);

  return { live, audioCtx, };
}
