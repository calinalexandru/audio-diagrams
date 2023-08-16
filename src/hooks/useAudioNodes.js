import { useEffect, useRef, useState, } from 'preact/hooks';
import { NODE_TYPE, } from '../constants';
import { AUDIO_NODES_MAP, } from '../constants/map';

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
      if (typeof AUDIO_NODES_MAP[node.type] === 'function') {
        return AUDIO_NODES_MAP[node.type]?.(
          audioCtx.current,
          node.properties,
          mediaStreamRef,
        );
      }
      return audioCtx.current.destination;
    },);

    // const sampleData = ({
    //   analyser,
    //   buffer,
    //   dataArray,
    //   properties: { duration = 1, },
    // },) =>
    //   new Promise((resolve, reject,) => {
    //     const myArrayBuffer = audioCtx.createBuffer(
    //       2,
    //       audioCtx.sampleRate * duration,
    //       audioCtx.sampleRate,
    //     );
    //     // myArrayBuffer
    //     const offset = 0;
    //     try {
    //       setTimeout(() => {
    //         analyser.getFloatTimeDomainData(dataArray,);
    //         myArrayBuffer.copyToChannel(
    //           dataArray,
    //           0,
    //           offset * analyser.frequencyBinCount,
    //         );
    //         myArrayBuffer.copyToChannel(
    //           dataArray,
    //           1,
    //           offset * analyser.frequencyBinCount,
    //         );
    //         buffer.buffer = myArrayBuffer;
    //         buffer.start();
    //         resolve(true,);
    //       }, duration * 1000,);
    //     } catch (e) {
    //       reject(e,);
    //     }
    //   },);

    wires.forEach(async (wire,) => {
      const from = await audioNodes[wire.from];
      const to = await audioNodes[wire.to];
      try {
        // if (nodes[wire.to].type === NODE_TYPE.BUFFER) {
        //   const analyser = audioCtx.createAnalyser();
        //   from.connect(analyser,);
        //   analyser.fftSize = 32768;
        //   const bufferLength = analyser.frequencyBinCount;
        //   const dataArray = new Float32Array(bufferLength,);
        //   // const dataArray = new Uint8Array(bufferLength,);

        //   await sampleData({
        //     analyser,
        //     buffer: to,
        //     dataArray,
        //     properties: nodes[wire.from].properties,
        //   },);

        //   // analyser.connect(to,);
        // } else {
        from.connect(to,);
        // }

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
