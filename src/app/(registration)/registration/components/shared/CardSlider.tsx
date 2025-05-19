'use client';

import React, { useEffect, useRef, useState } from 'react';
import { arrowUp } from '@/assets';
import { CardType } from '@/types/card.type';
import Card from './Card';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import FilteredImage from '@/components/FilteredImage';

type Props = {
  cards: CardType[];
  withAutoplay?: boolean;
};

const AUTOPLAY_DELAY = 4000;

const CardSlider: React.FC<Props> = ({ cards, withAutoplay }) => {
  const swipeTimerRef = useRef<NodeJS.Timeout>(null);
  const [currentCard, setCurrentCard] = useState(0);

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev >= cards.length - 1 ? 0 : prev + 1));
  };

  const autoplay = () => {
    const stop = () => {
      const { current } = swipeTimerRef;
      if (current) {
        clearInterval(current);
      }
    };

    swipeTimerRef.current = setInterval(nextCard, AUTOPLAY_DELAY);

    return stop;
  };

  useEffect(() => {
    const stop = autoplay();

    if (!withAutoplay) {
      stop();
    }

    return () => {
      stop();
    };
  }, [withAutoplay]);

  return (
    <div className='py-[80px] flex items-center gap-[20px] laptop:gap-[40px] w-full'>
      <div
        className='curveCircle bg-orange min-w-[30px] h-[30px] flex items-center justify-center cursor-pointer'
        onClick={prevCard}
      >
        <FilteredImage
          src={arrowUp}
          filter={FilterClassEnum.White}
          rotate='left'
        />
      </div>
      <Card cardInfo={cards[currentCard]} />
      <div
        className='curveCircle bg-orange min-w-[30px] h-[30px] flex items-center justify-center cursor-pointer'
        onClick={nextCard}
      >
        <FilteredImage
          src={arrowUp}
          filter={FilterClassEnum.White}
          rotate='right'
        />
      </div>
    </div>
  );
};

export default CardSlider;
