import { useEffect } from 'preact/hooks';
import { fromEvent, switchMap, takeUntil, tap } from 'rxjs';

export default function useMouseMove({ elRef, xVarName, yVarName }) {
  useEffect(() => {
    if (elRef.current) {
      const mousedown = fromEvent(elRef.current, 'mousedown');
      const mouseup = fromEvent(elRef.current, 'mouseup');
      const move = fromEvent(document, 'mousemove');
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

    return () => mousedown.unsubscribe();
  }, [elRef?.current]);
}
