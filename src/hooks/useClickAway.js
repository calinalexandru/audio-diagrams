import { useCallback, useEffect, } from 'preact/hooks';

//! This hook only works with `onClick` event
//! DO NOT use it with `mousedown` event.
export default function useClickAway({ el, onClickAway, deps = [], },) {
  const myClick = useCallback(
    (e,) => {
      let triggerOnClickAway = true;
      if (Array.isArray(el,)) {
        el.forEach((elem,) => {
          if (elem?.current?.contains?.(e.target,)) {
            triggerOnClickAway = false;
          }
        },);
      } else if (el?.current?.contains?.(e.target,)) {
        triggerOnClickAway = false;
      }
      if (triggerOnClickAway) {
        onClickAway();
      }
    },
    [el, onClickAway,],
  );

  useEffect(() => {
    document.body.addEventListener('mousedown', myClick,);

    return () => {
      document.body.removeEventListener('mousedown', myClick,);
    };
  }, deps,);
}
