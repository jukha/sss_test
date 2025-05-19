import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(e.target as HTMLElement)) {
        onClickOutside();
      }
    };

    window.addEventListener('mousedown', onMouseDown);

    return () => window.removeEventListener('mousedown', onMouseDown);
  }, [ref, onClickOutside]);
};
