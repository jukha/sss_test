'use client';

import React, { useCallback, useState } from 'react';

import { arrowUp } from '@/assets';
import { CardType } from '@/types/card.type';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import FilteredImage from '@/components/FilteredImage';
import { useInterval } from '@/hooks/use-interval';
import Card from './Card';
import clsx from 'clsx';

type Props = {
  cards: CardType[];
  withAutoplay?: boolean;
};

const AUTOPLAY_DELAY = 4000;

const CardSlider: React.FC<Props> = ({ cards, withAutoplay }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = useCallback(() => {
    setCurrentCard((prev) => (prev >= cards.length - 1 ? 0 : prev + 1));
  }, []);

  useInterval(nextCard, withAutoplay ? AUTOPLAY_DELAY : null);

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
      <div className='grid'>
        {
          cards.map((cardData, idx) => {
            return <div key={idx} className={clsx('col-start-1 col-end-1 row-start-1 row-end-1 opacity-0', currentCard === idx && 'opacity-100')}>
              <Card cardInfo={cardData} />
            </div>
          })
        }
      </div>
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
