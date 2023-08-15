import { useEffect, } from 'preact/hooks';
import {
  concatWith,
  fromEvent,
  merge,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
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
      // !! start important
      // ignore computed style, just use static values
      //  because <Line /> will screw up
      // !! end important
      // const style = getComputedStyle(elRef.current,);
      const width = '122px';
      const height = '74px';

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
      const mousedown = merge(
        fromEvent(dragRef.current, 'touchstart',),
        fromEvent(dragRef.current, 'mousedown',),
      )
        .pipe(
          switchMap(() =>
            timer(100,).pipe(
              concatWith(
                merge(
                  fromEvent(document.body, 'touchmove',),
                  fromEvent(document.body, 'mousemove',),
                ).pipe(
                  tap(
                    ({
                      clientX,
                      clientY,
                      touches: [{ clientX: touchX, clientY: touchY, } = {},] = [],
                    },) => {
                      // console.log('moving', clientX, clientY, touchX, touchY,);
                      x = (clientX || touchX) - widthRaw / 2;
                      y = (clientY || touchY) - heightRaw / 2;
                      const neX = x + x - x * scale;
                      const neY = y + y - y * scale;
                      setXY(index, x, y,);
                      elRef.current.style.setProperty(xVarName, `${neX}px`,);
                      elRef.current.style.setProperty(yVarName, `${neY}px`,);
                    },
                  ),
                  takeUntil(
                    merge(
                      fromEvent(document, 'touchend',),
                      fromEvent(document, 'mouseup',),
                    ),
                  ),
                ),
              ),
              takeUntil(
                merge(
                  fromEvent(document.body, 'touchend',),
                  fromEvent(document.body, 'mouseup',),
                ),
              ),
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
