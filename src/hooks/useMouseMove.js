import { useEffect } from 'preact/hooks';
import { fromEvent, switchMap, takeUntil, tap } from 'rxjs';

export default function useMouseMove({
  elRef,
  buttonRef,
  xVarName,
  yVarName,
  setPosition,
}) {
  let { mousedown, mouseup, move, x, y, pos = {} } = {};
  useEffect(() => {
    if (buttonRef.current && elRef.current) {
      mousedown = fromEvent(buttonRef.current, 'mousedown');
      mouseup = fromEvent(document, 'mouseup');
      move = fromEvent(document, 'mousemove');
      const style = getComputedStyle(elRef.current);
      // console.log('useMouseMove.style', style);
      const { width = '30px', height = '20px', left, top } = style || {};

      pos = {
        x: x || Number(left.replace('px', '')),
        y: y || Number(top.replace('px', '')),
        width,
        height,
      };

      if (setPosition) setPosition(pos);

      mousedown
        .pipe(
          switchMap(() =>
            move.pipe(
              tap((e) => {
                x = e.clientX - Number(width.replace('px', ''));
                y = e.clientY - Number(height.replace('px', ''));
                pos = {
                  x,
                  y,
                  width,
                  height,
                };
                if (setPosition) setPosition(pos);
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
