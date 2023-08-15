import styled from '@emotion/styled';
import { h, } from 'preact';
import { useEffect, useRef, } from 'preact/hooks';

const width = 400;
const height = 400;
const Container = styled.div``;
const points = [0, 0.2, 0.4, 0.6, 0.8, 1,];
const time = 1;

function getCubicBezierPoint(t, start, cp1, cp2, end,) {
    const x = (1 - t)**3 * start.x +
        3 * (1 - t)**2 * t * cp1.x +
        3 * (1 - t) * t**2 * cp2.x +
        t**3 * end.x;

    const y = (1 - t)**3 * start.y +
        3 * (1 - t)**2 * t * cp1.y +
        3 * (1 - t) * t**2 * cp2.y +
        t**3 * end.y;

    return { x, y, };
}

export default function DrawFunction({x1, x2, y1, y2,},) {
  const canvasRef = useRef();
  
  useEffect(() => {
    const start = { x: 0, y: height, };
    const cp1 = { x: x1, y: y1, };
    const cp2 = { x: x2, y: y2, };
    const end = { x: width, y: 0, };
    const ctx = canvasRef.current.getContext('2d',);
    ctx.fillStyle = '#eee';
    ctx.fillRect(0, 0, width, height,);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y,);
    ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y,);
    ctx.stroke();
		
    // Start and end points
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI,); // Start point
    ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI,); // End point
    ctx.fill();

    // Control points
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI,); // Control point one
    ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI,); // Control point two
    ctx.fill();
    
    const out = getCubicBezierPoint(0.5, start, cp1, cp2, end,)
    console.log({out,},)
  }, [canvasRef?.current, x1, x2, y1, y2,],);

  return (
    <Container>
      <canvas ref={canvasRef} width={width} height={height} />
    </Container>
  );
}
