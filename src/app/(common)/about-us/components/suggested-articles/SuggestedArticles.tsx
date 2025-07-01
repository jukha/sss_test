import React from 'react';

import { WaveIcon } from '@/components/icons';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import FeatureSection from '@/components/FeatureSection';
import SwimmersBlogCard from '../SwimmersBlogCard';
import { BlogRecordEntity } from '@/entities/blog-record.entity';

const titleContent = {
  heading: 'Making Waves: The Blog for Happy, Confident Swimmers',
  subHeading:
    'Looking for swim tips, heartwarming swimmer stories, and expert advice from our instructors? Our blog is your go-to resource for making the most of every splash',
};

type SuggestedArticlesProps = {
  data: BlogRecordEntity[];
};

const SuggestedArticles = ({ data }: SuggestedArticlesProps) => {
  return (
    <FeatureSection
      waveColor='var(--color-iceBlue)'
      backgroundColor='var(--color-iceBlue)'
      className='relative '
    >
      <Container className='flex flex-col gap-8 justify-start items-center pb-24 pt-[100px] lg:pt-[150px]'>
        {/* Top Wave */}
        <div className='absolute top-0 h-[16px] md:h-[54px] left-0 w-full -translate-y-1/2 opacity-30 z-[-3]'>
          <WaveIcon color='var(--color-blueSky)' />
        </div>
        {/* Bottom Wave */}
        <div className='absolute bottom-0 h-[16px] md:h-[54px] left-0 w-full translate-y-1/2 rotate-180 opacity-30 z-[-3]'>
          <WaveIcon color='var(--color-blueSky)' />
        </div>
        <div className='flex flex-col justify-center items-center gap-[15px]'>
          <Typography
            variant='h3'
            className='font-primary max-w-[837px] text-center'
          >
            {titleContent.heading}
          </Typography>
          <Typography
            variant='custom'
            className='max-w-[718px] font-secondary text-[18px] leading-[125%] md:text-[28px] font-semibold text-offBlack text-center'
          >
            {titleContent.subHeading}
          </Typography>
        </div>

        <FlexWrapper direction='row' stackOrder='first-top' className='gap-12'>
          {data.map((blog, index) => {
            return (
              <div
                key={index}
                className='flex flex-col gap-4 md:gap-6 max-w-[355px] lg:max-w-[400px]'
              >
                <SwimmersBlogCard blog={blog} />
              </div>
            );
          })}
        </FlexWrapper>
        {/*  */}
        <div className='absolute w-full h-full top-0 left-0 bg-[#C7EAF3] opacity-30 z-[-1]'></div>
        <div className='absolute w-full h-full top-0 left-0 bg-white z-[-2]'></div>
      </Container>
    </FeatureSection>
  );
};

export default SuggestedArticles;
