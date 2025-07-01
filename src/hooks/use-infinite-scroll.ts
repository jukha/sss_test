import { RefObject, useEffect, useRef } from 'react';

type Options = {
  containerRef: RefObject<HTMLElement | null>;
  onLoadMore: () => Promise<void>;
}

export const useInfiniteScroll = ({ containerRef, onLoadMore }: Options, deps: unknown[]) => {
  const lastScrollPositionRef = useRef(0);

  useEffect(() => {
    let isLoading = false;

    const onScroll = (e: Event) => {
      if (isLoading) return;

      const target = e.target as HTMLDivElement;
      const userScrollPosition = target.scrollTop + target.offsetHeight;
      const maxScroll = target.scrollHeight;

      if (userScrollPosition <= lastScrollPositionRef.current) return;

      lastScrollPositionRef.current = userScrollPosition;

      if (maxScroll - userScrollPosition > 100) return; // too far from the end of the container

      isLoading = true;
      onLoadMore().finally(() => isLoading = false);
    }

    containerRef?.current?.addEventListener('scroll', onScroll);
    return () => containerRef?.current?.removeEventListener('scroll', onScroll);
  }, [onLoadMore, ...deps])
}
