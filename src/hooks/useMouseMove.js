import { useEffect } from 'preact/hooks';
import { fromEvent, switchMap, takeUntil, tap } from 'rxjs';

export default function useMouseMove({ elRef, buttonRef, xVarName, yVarName }) {
  let { mousedown, mouseup, move } = {};
  useEffect(() => {
    if (buttonRef.current && elRef.current) {
      mousedown = fromEvent(buttonRef.current, 'mousedown');
      mouseup = fromEvent(elRef.current, 'mouseup');
      move = fromEvent(document, 'mousemove');
      const style = getComputedStyle(elRef.current);
      const { width, height } = style;

      mousedown
        .pipe(
          switchMap(() =>
            move.pipe(
              tap((e) => {
                elRef.current.style.setProperty(
                  xVarName,
                  `${e.clientX - Number(width.replace('px', ''))}px`
                );
                elRef.current.style.setProperty(
                  yVarName,
                  `${e.clientY - Number(height.replace('px', ''))}px`
                );
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
