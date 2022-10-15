import { useEffect } from 'preact/hooks';
import { fromEvent, switchMap, takeUntil, tap } from 'rxjs';
import useNodes from './useNodes';

export default function useMouseMove({
  elRef,
  buttonRef,
  xVarName,
  yVarName,
  position,
  index,
}) {
  const { setPosition, setXY } = useNodes();
  let { mousedown, mouseup, move, x, y, pos = {} } = {};
  useEffect(() => {
    console.log('pozition', position);
    if (buttonRef.current && elRef.current) {
      mousedown = fromEvent(buttonRef.current, 'mousedown');
      mouseup = fromEvent(document, 'mouseup');
      move = fromEvent(document, 'mousemove');
      const style = getComputedStyle(elRef.current);
      // console.log('useMouseMove.style', style);
      const { width = '30px', height = '20px' } = style || {};
      ({ x, y } = position);
      elRef.current.style.setProperty(xVarName, `${x}px`);
      elRef.current.style.setProperty(yVarName, `${y}px`);
      pos = {
        x,
        y,
        width,
        height,
      };
      setPosition(index, pos);

      mousedown
        .pipe(
          switchMap(() =>
            move.pipe(
              tap((e) => {
                x = e.clientX - Number(width.replace('px', '')) / 2;
                y = e.clientY - Number(height.replace('px', '')) / 2;
                setXY(index, x, y);
                elRef.current.style.setProperty(xVarName, `${x}px`);
                elRef.current.style.setProperty(yVarName, `${y}px`);
              }),
              takeUntil(mouseup)
            )
          )
        )
        .subscribe(() => null);
    }
    return () => mousedown?.unsubscribe?.();
  }, [buttonRef?.current, elRef?.current]);
}
