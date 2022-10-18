import { useEffect, } from 'preact/hooks';
import { filter, fromEvent, tap, } from 'rxjs';
import { useImmerx, } from '../store/state';

export default function useKeyBindings() {
  const [state, update,] = useImmerx();
  useEffect(() => {
    const keypress = fromEvent(document, 'keydown',)
      .pipe(
        filter((e,) => e.key === 'Escape',),
        tap((e,) => {
          console.log('ai dat pe buton', e,);
          update((draft,) => void (draft.connecting = []),);
        },),
      )
      .subscribe(() => null,);

    // const mousemove = fromEvent(document, 'mousemove',)
    //   .pipe(
    //     tap((e,) => {
    //       console.log('ai dat pe mouse', e,);
    //       const x = e.clientX;
    //       const y = e.clientY;
    //       document.body.style.setProperty('--current-line-x', `${x}deg`,);
    //       document.body.style.setProperty('--current-line-y', `${y}deg`,);
    //     },),
    //   )
    //   .subscribe(() => null,);

    return () => {
      keypress.unsubscribe();
      // mousemove.unsubscribe();
    };
  }, [update,],);
}
