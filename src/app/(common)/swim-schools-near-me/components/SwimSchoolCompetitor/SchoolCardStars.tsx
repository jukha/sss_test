import React from 'react';
import { ratingStars } from '@/assets';
import Image from 'next/image';

type Props = {
  rating: number;
};

const SchoolCardStars: React.FC<Props> = ({ rating }) => {
  return (
    <div className='w-[75px] h-4 relative'>
      <Image src={ratingStars} alt='' className='grayscale' fill />
      <div
        className='absolute top-0 left-0 h-full overflow-hidden'
        style={{
          width: `${(rating / 5) * 100}%`,
        }}
      >
        <Image src={ratingStars} alt='' fill className='min-w-[75px]' />
      </div>
    </div>
  );
};

export default SchoolCardStars;
