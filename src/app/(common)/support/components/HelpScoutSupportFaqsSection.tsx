import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import { ServerFaqSection } from '@/components/sections/faq_section';
import FeaturedBannerSection from '@/components/sections/FeaturedBannerSection';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const HelpScoutSupportFaqsSection = () => {
  return (
    <section className='section'>
      <FeaturedBannerSection
        bgColor='var(--color-lightYellow)'
        borderColor='var(--color-yellow)'
        decorationIconRight={<ThreeStareSlim />}
        decorationIconRightClasses='absolute right-[0px] top-0 w-[100px] h-[120px]'
      >
        <div className='flex flex-col justify-start items-center  w-full'>
          <div className='flex items-center gap-0 mb-2 md:mb-4'>
            <Typography
              variant='h3'
              className='font-bold font-primary leading-[110%] text-offBlack'
            >
              FAQ
            </Typography>
          </div>

          <Typography
            variant='body2'
            className='font-bold font-primary leading-[110%] text-offBlack mb-1 md:mb-0'
          >
            Still thinking about it? We are always here to answer any of your
            questions 24hr a day.
          </Typography>
        </div>
      </FeaturedBannerSection>

      <ServerFaqSection categoryName='support' />
    </section>
  );
};

export default HelpScoutSupportFaqsSection;
