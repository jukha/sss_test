import { pricingHero, pricingHeroMobile } from '@/assets';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import CustomInputForm from '@/components/shapes/CustomInputForm';
import React from 'react';

const PricingHero = () => {
  return (
    <Hero
      desktopBgImage={pricingHero}
      mobileBgImage={pricingHeroMobile}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography variant='h1' className='max-w-[340px] md:max-w-[600px]'>
        Swim Lesson Pricing
      </Typography>
      <Typography
        variant='body2'
        className='text-white max-w-[495px] mb-[26px] font-secondary leading-[120%]'
      >
        <span className='text-yellow'>Enter your zip code</span> to view local
        pricing
      </Typography>
      <div className='flex justify-start items-center gap-4'>
        <CustomInputForm placeholder='Your Zip Code' submitText='Search' />
      </div>
    </Hero>
  );
};

export default PricingHero;
