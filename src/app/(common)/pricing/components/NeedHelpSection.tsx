import { Bubbles } from '@/components/decoration';
import FeaturedBannerSection from '@/components/sections/FeaturedBannerSection';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const NeedHelpSection = () => {
  return (
    <section className='section'>
      <FeaturedBannerSection
        bgColor='var(--color-lightBlue)'
        borderColor='var(--color-blue)'
        decorationIconLeft={<Bubbles color='var(--color-darkBlue)' />}
        decorationIconLeftClasses='absolute top-15 left-2 md:top-24 md:left-15 w-[59px] h-[49px] md:h-[86px] md:w-[120px] rotate-160'
        decorationIconRight={<Bubbles color='var(--color-blue)' />}
        decorationIconRightClasses='absolute top-10 right-2 md:top-15 md:right-15 w-[59px] h-[49px] md:h-[86px] md:w-[120px] rotate-[-50deg]'
      >
        <div className='flex flex-col justify-start items-center text-center w-full'>
          <Typography
            variant='h4'
            className='font-bold font-primary leading-[110%] text-offBlack'
          >
            Need Help ?
          </Typography>
          <Typography
            variant='h4'
            className='font-bold font-primary leading-[110%] text-offBlack'
          >
            Call Us 1-888-788-2140
          </Typography>

          <Typography
            variant='body2'
            className='font-bold font-primary leading-[110%] text-offBlack my-4 md:my-1'
          >
            Our full-time, US-based team is here M-F 830am-5pm PST.
          </Typography>
          <Typography
            variant='body2'
            className='font-bold font-primary leading-[110%] text-offBlack mb-1 md:mb-0'
          >
            Let our swimming experts help you choose the right package for your
            needs.
          </Typography>
        </div>
      </FeaturedBannerSection>
    </section>
  );
};

export default NeedHelpSection;
