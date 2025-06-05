import {
  giftCertificateHeroDesktop,
  giftCertificateHeroMobile,
} from '@/assets';
import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Hero from '@/components/layout/Hero';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const heroSection = {
  title: 'Give the gift of swimming',
  desc: 'Give the gift of confidence and water safety with a Sunsational Swim School gift certificate, perfect for your loved one to start private swim lessons at home or a nearby pool.',
};

const GiftCertificateHero = () => {
  return (
    <Hero
      desktopBgImage={giftCertificateHeroDesktop}
      mobileBgImage={giftCertificateHeroMobile}
      hasBottomBar={false}
      hasSticker={false}
    >
      <Typography
        variant='h1'
        className='max-w-[327px] ml-[30px] md:max-w-full lg:max-w-[690px] mb-8'
      >
        {heroSection.title}
      </Typography>
      <Typography
        variant='body2'
        className='text-white  max-w-[569px] leading-[120%] mb-[26px] font-secondary font-bold md:font-medium ml-[30px] '
      >
        {heroSection.desc}
      </Typography>
      <div className='flex justify-start items-center gap-4 ml-[30px]'>
        <ArrowButton
          text={'Buy a gift certificate today'}
          buttonClasses='bg-brightYellow text-offBlack'
          IconClasses='bg-offBlack'
          iconColor='var(--color-white)'
          shadow={true}
          shadowClasses='bg-orange'
          link='/registration'
        />
      </div>
    </Hero>
  );
};

export default GiftCertificateHero;
