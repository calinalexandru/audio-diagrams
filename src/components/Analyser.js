import { h, } from 'preact';
import { useCallback, useEffect, useRef, } from 'preact/hooks';
import { FFT_SIZES, NODE_TYPE, } from '../constants';
import Select from '../primitives/Select';
import { useImmerx, } from '../store/state';
import BoxNode from './BoxNode';

export default function Analyser({ index, audioNode: analyser, ...props },) {
  // console.log('Analyser.audioNode', analyser,);
  const reqAnim = useRef(null,);
  const canvasRef = useRef();
  const elRef = useRef();
  const dragRef = useRef();
  const bufferLength = 1024;
  const dataArray = new Uint8Array(bufferLength,);
  const [nodes,] = useImmerx('nodes',);
  const [, update,] = useImmerx(null,);
  const draw = useCallback(() => {
    reqAnim.current = requestAnimationFrame(draw,);
    // console.log('Analyser.analyser', analyser,);
    const ctx = canvasRef?.current?.getContext?.('2d',);
    if (ctx && analyser) {
      // console.log('audioNode', analyser,)
      analyser?.getByteTimeDomainData?.(dataArray,);
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height,);

      // ctx.fillStyle = '#353535b0';
      // ctx.fillRect(
      //   0,
      //   0,
      //   canvasRef.current.width,
      //   canvasRef.current.height,
      // );

      // console.log('dataArray', dataArray,);

      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgb(200, 200, 200)';

      ctx.beginPath();

      const sliceWidth = (canvasRef.current.width * 1.0) / bufferLength;
      let x = 0;

      // console.log('dataArray', dataArray,)
      for (let i = 0; i < bufferLength; i += 1) {
        const v = dataArray[i] / 128.0;
        // console.log('v', v,)
        const y = (v * canvasRef.current.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y,);
        } else {
          ctx.lineTo(x, y,);
        }

        x += sliceWidth;
      }

      ctx.lineTo(canvasRef.current.width, canvasRef.current.height / 2,);
      ctx.stroke();
    }
  }, [analyser, canvasRef?.current, index,],);

  useEffect(() => {
    draw();
    return () => {
      cancelAnimationFrame(reqAnim.current,);
    };
  }, [index, analyser,],);

  const setFftsize = (val,) => {
    update((draft,) => void (draft.nodes[index].properties.fftSize = val),);
  };

  return (
    <BoxNode
      ref={elRef}
      dragRef={dragRef}
      color="blue"
      index={index}
      component={NODE_TYPE.ANALYSER}
      name="Analyser"
      {...props}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <canvas ref={canvasRef} width="340" height="210" />
        <Select
          label="FFT"
          value={nodes[index].properties.fftSize}
          onChange={(e,) => {
            setFftsize(e.target.value,);
          }}
        >
          {FFT_SIZES.map((fftSize,) => (
            <option value={fftSize}>{fftSize}</option>
          ),)}
        </Select>
      </div>
    </BoxNode>
  );
}
