'use client';

import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import { useInterval } from '@/hooks/use-interval';

type Card = {
  text: string;
  image: StaticImageData;
};

type Props = {
  cards: Card[];
  withAutoplay?: boolean;
};

const AUTOPLAY_DELAY = 4000;

const SmallCardSlider: React.FC<Props> = ({ cards, withAutoplay }) => {
  const [index, setIndex] = useState(0);

  const nextCard = useCallback(() => {
    setIndex((prev) => (prev >= cards.length - 1 ? 0 : prev + 1));
  }, []);

  useInterval(nextCard, withAutoplay ? AUTOPLAY_DELAY : null);

  return (
    <div className='flex flex-col items-center max-w-[240px] desktop:max-w-[320px]'>
      <div className='flex gap-4 items-center desktop:gap-6'>
        {cards[index].image && (
          <Image
            src={cards[index].image}
            className='w-[72px] aspect-square shrink-0 desktop:w-[100px]'
            alt='icon'
          />
        )}
        <span className='text-[18px] font-bold leading-[1.25] text-[#422019] desktop:text-2xl'>
          {cards[index].text}
        </span>
      </div>

      <div className='flex gap-[10px] mt-2.5 desktop:mt-5'>
        {cards.map((_, i) => (
          <div
            className={clsx(
              'w-2 aspect-square rounded-[12px] cursor-pointer desktop:w-3',
              index === i ? 'bg-orange' : 'bg-white'
            )}
            key={i}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallCardSlider;
