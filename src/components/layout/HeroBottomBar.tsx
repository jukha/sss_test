'use client';
import React from 'react';
import { HeroBottomBarVariant } from '@/types/heroBottomBar.type';
import { WaveIcon } from '../icons';
import EmblaCarousel from '../widgets/EmblaCarousel';

type Props = {
  variant?: HeroBottomBarVariant;
};

const HeroBottomBar: React.FC<Props> = ({ variant = 'homepage' }) => {
  return (
    <section className='w-full flex justify-center translate-y-[60px]  items-center relative my-[60px] h-[131px] bg-yellow'>
      {/* Top Wave */}
      <div className='w-full absolute top-0 right-0 -translate-y-1/2 h-[16px] lg:h-[54px] z-10'>
        <WaveIcon />
      </div>
      {/* Bottom Wave */}
      <div className='w-full absolute bottom-0 translate-y-1/2 right-0 h-[16px] lg:h-[54px] rotate-180'>
        <WaveIcon />
      </div>
      <EmblaCarousel variant={variant} />
    </section>
  );
};

export default HeroBottomBar;
