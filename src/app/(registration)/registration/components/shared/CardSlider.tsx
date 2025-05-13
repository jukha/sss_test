'use client';

import React, { useState } from 'react';
import { arrowUp } from '@/assets';
import { CardType } from '@/types/card.type';
import Card from './Card';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import FilteredImage from '@/components/FilteredImage';

type Props = {
  cards: CardType[];
};

const CardSlider: React.FC<Props> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const changeCard = (number: number) => {
    if (number < 0) {
      setCurrentCard(cards.length - 1);
      return;
    }
    if (number >= cards.length) {
      setCurrentCard(0);
      return;
    }
    setCurrentCard(number);
  };

  return (
    <div className='py-[80px] flex items-center gap-[20px] laptop:gap-[40px] w-full'>
      <div
        className='curveCircle bg-orange min-w-[30px] h-[30px] flex items-center justify-center cursor-pointer'
        onClick={() => changeCard(currentCard - 1)}
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
        onClick={() => changeCard(currentCard + 1)}
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
