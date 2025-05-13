'use client';

import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
type Card = {
  text: string;
  image: StaticImageData;
};

type Props = {
  cards: Card[];
};

const SmallCardSlider: React.FC<Props> = ({ cards }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-[20px] items-center'>
        {cards[index].image && <Image src={cards[index].image} className=' min-h-[101px]' alt='icon' />}
        <span className='text-large font-[700] max-w-[200px] max-h-[100px]'>
          {cards[index].text}
        </span>
      </div>

      <div className='flex gap-[10px]'>
        {cards.map((_, i) => (
          <div
            className={clsx(
              'h-[12px] w-[12px] rounded-[12px] cursor-pointer',
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
