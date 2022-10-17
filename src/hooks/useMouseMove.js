import { useEffect } from 'preact/hooks';
import { fromEvent, switchMap, takeUntil, tap } from 'rxjs';
import useNodes from './useNodes';

export default function useMouseMove({
  elRef,
  dragRef,
  xVarName = '--x',
  yVarName = '--y',
  position,
  index,
  nodes,
  ...rest
}) {
  const { setPosition, setXY } = useNodes();
  useEffect(() => {
    let { x, y, pos = {} } = {};
    if (elRef.current && dragRef.current) {
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
      const mousedown = fromEvent(dragRef.current, 'mousedown')
        .pipe(
          switchMap(() =>
            fromEvent(document, 'mousemove').pipe(
              tap((e) => {
                x = e.clientX - Number(width.replace('px', '')) / 2;
                y = e.clientY - Number(height.replace('px', '')) / 2;
                setXY(index, x, y);
                elRef.current.style.setProperty(xVarName, `${x}px`);
                elRef.current.style.setProperty(yVarName, `${y}px`);
              }),
              takeUntil(fromEvent(document, 'mouseup'))
            )
          )
        )
        .subscribe(() => null);
      return () => {
        mousedown.unsubscribe();
      };
    }
  }, [dragRef?.current, elRef?.current, nodes, index, rest?.showMore]);
}
