import { useEffect, } from 'preact/hooks';
import { concatWith, fromEvent, switchMap, takeUntil, tap, timer, } from 'rxjs';
import { useImmerx, } from '../store/state';
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
},) {
  const [scale,] = useImmerx('scale',);
  const { setPosition, setXY, } = useNodes();
  useEffect(() => {
    let { x = 0, y = 0, pos = {}, } = {};
    if (elRef.current && dragRef.current) {
      const style = getComputedStyle(elRef.current,);
      // console.log('useMouseMove.style', style);
      const { width = '30px', height = '20px', } = style || {};
      ({ x, y, } = position);
      const newX = x + x - x * scale;
      const newY = y + y - y * scale;
      elRef.current.style.setProperty(xVarName, `${newX}px`,);
      elRef.current.style.setProperty(yVarName, `${newY}px`,);
      pos = {
        x,
        y,
        width,
        height,
      };
      const widthRaw = Number(width.replace('px', '',),);
      const heightRaw = Number(height.replace('px', '',),);
      setPosition(index, pos,);
      const mousedown = fromEvent(dragRef.current, 'mousedown',)
        .pipe(
          switchMap(() =>
            timer(100,).pipe(
              concatWith(
                fromEvent(document, 'mousemove',).pipe(
                  tap(({ clientX, clientY, },) => {
                    x = clientX - widthRaw / 2;
                    y = clientY - heightRaw / 2;
                    const neX = x + x - x * scale;
                    const neY = y + y - y * scale;
                    setXY(index, x, y,);
                    elRef.current.style.setProperty(xVarName, `${neX}px`,);
                    elRef.current.style.setProperty(yVarName, `${neY}px`,);
                  },),
                  takeUntil(fromEvent(document, 'mouseup',),),
                ),
              ),
              takeUntil(fromEvent(document, 'mouseup',),),
            ),
          ),
        )
        .subscribe(() => null,);
      return () => {
        mousedown.unsubscribe();
      };
    }
    return undefined;
  }, [dragRef?.current, elRef?.current, nodes, index, rest?.showMore, scale,],);
}
