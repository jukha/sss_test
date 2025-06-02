import { Bubbles } from '@/components/decoration';
import ThreeStars from '@/components/decoration/ThreeStars';
import FeatureSection from '@/components/FeatureSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import React from 'react';

const content = {
  requirments: [
    {
      itemDescription: 'Individual with special needs',
      itemBulletBg: 'var(--color-blue)',
    },
    {
      itemDescription: 'First-time swimmers',
      itemBulletBg: 'var(--color-yellow)',
    },
    {
      itemDescription: 'Fearful students',
      itemBulletBg: 'var(--color-orange)',
    },
    {
      itemDescription: 'Competitive swimmers looking to improve technique',
      itemBulletBg: 'var(--color-red)',
    },
    {
      itemDescription:
        'Swimmers who need to develop more confidence in the water',
      itemBulletBg: 'var(--color-orange)',
    },
  ],
};

const WhoBenefitMostFromPrivateLessonSection = () => {
  return (
    <FeatureSection
      className='my-24'
      backgroundColor='var(--color-lightBlue)'
      waveColor='var(--color-lightBlue) '
    >
      <FlexWrapper
        stackOrder='first-top'
        className='!justify-center gap-16 my-12 relative overflow-x-clip'
      >
        <div className='flex flex-col gap-4 relative'>
          <Typography
            variant='h3'
            className='font-primary text-offBlack max-w-[454px] leading-[110%]'
          >
            Who benefits the most from private swim lessons?
          </Typography>
          <Typography
            variant='body2'
            className='font-secondary leading-[120%] font-bold md:font-medium max-w-[420px]'
          >
            Private swim lessons offer the personalized experience that swimmers
            need to learn water safety skills and build confidence. Whether your
            child is just starting or looking to build on their existing
            swimming skills, private classes help these students the most:
          </Typography>
          {/* decoration elements for large screen */}
          <div className='absolute hidden lg:block left-[-20%] top-[-10%] h-[50px] w-[100px]'>
            <ThreeStars color='var(--color-red)' />
          </div>
          <div className='absolute hidden lg:block right-[-10%] bottom-[-10%] h-[50px] w-[100px]'>
            <ThreeStars color='var(--color-red)' />
          </div>
        </div>
        <div className='flex justify-center items-center relative'>
          <SectionInfoCard
            useListIdxAsIcon={true}
            wrapperClasses='pl-8 pr-2 py-[50px] lg:py-[35px] lg:px-[49px] bg-white gap-8 max-w-[454px] relative z-10'
            listItems={content.requirments}
          />
          <div className='absolute hidden lg:block left-[-40%] top-[-20%] h-[500px] w-[600px] opacity-20 rotate-180'>
            <Bubbles color='var(--color-blue)' />
          </div>
          <div className='absolute hidden lg:block right-[-30%] bottom-[-10%] h-[240px] w-[240px] opacity-20'>
            <Bubbles color='var(--color-blue)' />
          </div>
        </div>
        <div className='absolute lg:hidden right-[-3%] top-[-8%] h-[100px] w-[100px]  opacity-20 rotate-180'>
          <Bubbles color='var(--color-blue)' />
        </div>
        <div className='absolute lg:hidden left-[-3%] bottom-[-8%] h-[100px] w-[100px]  opacity-20'>
          <Bubbles color='var(--color-blue)' />
        </div>
      </FlexWrapper>
    </FeatureSection>
  );
};

export default WhoBenefitMostFromPrivateLessonSection;
