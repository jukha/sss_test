import clsx from 'clsx';
import {
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

type Props = {
  refAttachTo?: RefObject<HTMLElement | null>;
  onClose?: () => void;
  className?: string;
  fixedCursorPosition?: { top: number; left: number };
  children: ReactNode;
};

const ContextMenuWrapper: React.FC<Props> = ({
  refAttachTo,
  onClose,
  fixedCursorPosition,
  children,
  className,
}) => {
  const [position, setPosition] = useState<
    { top: number; left: number } | undefined
  >(undefined);
  const contextMenuRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!contextMenuRef.current) return;

    const localPosition = { top: 0, left: 0 };

    if (fixedCursorPosition) {
      localPosition.top = fixedCursorPosition.top;
      localPosition.left = fixedCursorPosition.left;
    } else {
      if (!refAttachTo) return;
      const rect = refAttachTo.current?.getBoundingClientRect();
      if (!rect) return;

      localPosition.top = rect.height;
      localPosition.left = 0;
    }

    const contextMenuRect = contextMenuRef.current?.getBoundingClientRect();

    if (
      contextMenuRect.top + contextMenuRect.height + localPosition.top >
        window.innerHeight &&
      localPosition.top > 0
    ) {
      localPosition.top = -contextMenuRect.height + 20;
    }

    if (
      contextMenuRect.left + contextMenuRect.width + localPosition.left >
        window.innerWidth &&
      localPosition.left > 0
    ) {
      localPosition.left = -contextMenuRect.width + 20;
    }

    setPosition(localPosition);
  }, []);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (refAttachTo && refAttachTo.current!.contains(target)) return;
      if (contextMenuRef.current!.contains(target)) return;

      onClose?.();
    };

    window.addEventListener('mousedown', onMouseDown);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  return (
    <div
      className={clsx('absolute z-[5]', className)}
      style={{
        top: position?.top,
        left: position?.left,
        width: refAttachTo?.current?.clientWidth,
      }}
      ref={contextMenuRef}
    >
      {children}
    </div>
  );
};

export default ContextMenuWrapper;
