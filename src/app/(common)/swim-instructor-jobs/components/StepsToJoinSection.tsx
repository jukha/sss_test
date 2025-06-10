import { stepsToJoinTeamImg } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import Image from 'next/image';
import React from 'react';

const content = {
  requirments: [
    {
      itemDescription: '1 Submit your application form',
      itemBulletBg: 'var(--color-blue)',
    },
    {
      itemDescription: '2 Complete a video screening',
      itemBulletBg: 'var(--color-yellow)',
    },
    {
      itemDescription:
        '3 Complete background checks & required forms (including current CPR certification)',
      itemBulletBg: 'var(--color-orange)',
    },
    {
      itemDescription:
        '4 Start requesting swim lessons in your area via the Sunsational App! Once approved, you can begin choosing lesson opportunities that match your schedule and location!',
      itemBulletBg: 'var(--color-red)',
    },
  ],
};

const StepsToJoinSection = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-offBlack)'
      waveColor='var(--color-offBlack)'
    >
      <FlexWrapper stackOrder='second-top' className='!justify-center my-8'>
        <div className='flex flex-col gap-6'>
          <Typography
            variant='h3'
            className='font-primary text-white max-w-[505px] leading-[110%]'
          >
            Steps to joining the{' '}
            <span className='text-yellow'>Sunsational</span> Swim Instructor
            team
          </Typography>

          <SectionInfoCard
            useListIdxAsIcon={true}
            wrapperClasses='pl-8 py-[50px] lg:py-[35px] lg:px-[49px] bg-white gap-4 max-w-[454px]'
            listItems={content.requirments}
          />
        </div>
        <div className='relative'>
          <div className='hidden lg:block absolute w-[70%] h-full right-0 -bottom-[10%] scale-[2]'>
            <BackgroundCircles circlesOpacity='0.1' />
          </div>
          <Image alt='test' src={stepsToJoinTeamImg} />
        </div>
      </FlexWrapper>
    </FeatureSection>
  );
};

export default StepsToJoinSection;
