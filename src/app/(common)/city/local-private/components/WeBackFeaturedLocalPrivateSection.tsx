import TwoStars from '@/components/decoration/TwoStars';
import FeaturedBannerSection from '@/components/sections/FeaturedBannerSection';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const WeBackFeaturedLocalPrivateSection = () => {
  return (
    <FeaturedBannerSection
      bgColor='var(--color-lightYellow)'
      borderColor='var(--color-orange)'
      decorationIconLeft={<TwoStars />}
      decorationIconLeftClasses='absolute top-0 left-12 w-[59px] h-[49px] md:h-[86px] md:w-[120px] -translate-x-1/2 translate-y-1/2'
    >
      <div className='flex flex-col justify-start items-center  w-full'>
        <div className='flex items-center gap-0 mb-2 md:mb-4'>
          <Typography
            variant='h4'
            className='font-bold font-primary leading-[110%] text-offBlack'
          >
            We back their expertise with a
          </Typography>
          <Typography
            variant='h4'
            className='font-bold font-primary leading-[110%] text-offBlack background-decoration py-1 lg:py-2 lg:px-4 bg-yellow'
          >
            100% satisfaction guarantee.
          </Typography>
        </div>

        <Typography
          variant='body2'
          className='font-bold font-primary leading-[110%] text-offBlack mb-1 md:mb-0'
        >
          Why? Because we know great instructors mean fast results!
        </Typography>
      </div>
    </FeaturedBannerSection>
  );
};

export default WeBackFeaturedLocalPrivateSection;
