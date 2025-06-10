import { whyBabySwimLessonsImg } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import {
  PlannerIcon,
  RefundIcon,
  SnorkelIcon,
  ToDoListIcon,
} from '@/components/icons';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SectionInfoCard from '@/components/shapes/SectionInfoCard';
import Image from 'next/image';
import React from 'react';

const content = {
  benefits: [
    {
      itemDescription:
        'One-on-one instruction means every lesson is tailored for your baby to get the most out of each session',
      itemHeader: 'Quick Results',
      itemHeaderClasses: 'text-orange font-primary font-bold',
      itemBulletBg: 'var(--color-white)',
      itemBulletIcon: <ToDoListIcon />,
      itemBulletIconSize: 32,
    },
    {
      itemDescription:
        'Sunsational swim instructors travel to you & work around your schedule',
      itemHeader: 'Built in Convenience',
      itemHeaderClasses: 'text-orange font-primary font-bold',
      itemBulletBg: 'var(--color-white)',
      itemBulletIcon: <PlannerIcon color='black' />,
      itemBulletIconSize: 32,
    },
    {
      itemDescription:
        'All Sunsational instructors are CPR/First Aid certified w/ minimum 2 years experience teaching baby lessons',
      itemHeader: 'Top-rated Instructors',
      itemHeaderClasses: 'text-orange font-primary font-bold',
      itemBulletBg: 'var(--color-white)',
      itemBulletIcon: <SnorkelIcon />,
      itemBulletIconSize: 32,
    },
    {
      itemDescription: 'Love your lessons or choose a new instructor or refund',
      itemHeader: 'Satisfaction Guaranteed',
      itemHeaderClasses: 'text-orange font-primary font-bold',
      itemBulletBg: 'var(--color-white)',
      itemBulletIcon: <RefundIcon />,
      itemBulletIconSize: 32,
    },
  ],
};

const WhyBabySwimLessons = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-off-white)'
      waveColor='var(--color-off-white)'
      className=''
    >
      <Container className='flex flex-col justify-start items-center relative overflow-x-clip mt-12'>
        <FlexWrapper
          stackOrder='second-top'
          className='!justify-center -translate-y-32 lg:-translate-y-0  relative z-10'
        >
          <div className='lg:translate-x-24 z-10 w-[500px] '>
            <SectionInfoCard
              wrapperClasses='w-full pl-8 pr-2 py-[50px] lg:py-[35px]  lg:px-[32px] bg-white gap-8 bg-red-900 relative z-10'
              listItems={content.benefits}
              useListIdxAsIcon={true}
            />
          </div>    
          <Image
            src={whyBabySwimLessonsImg}
            alt='Kid Swimming Image'
            className='translate-y-32 shrink lg:translate-y-0 '
          />
        </FlexWrapper>
        <div className='absolute lg:top-[-10%] left-[5%] lg:left-[-5%] h-[600px] w-[400px] lg:h-[917px] lg:w-[758px]'>
          <BackgroundCircles
            circlesColor='var(--color-yellow)'
            circlesOpacity='0.4'
          />
        </div>
        <div className='absolute bottom-[-10%] right-[-10%] h-[917px] w-[758px] hidden lg:block rotate-[90deg]'>
          <BackgroundCircles
            circlesColor='var(--color-yellow)'
            circlesOpacity='0.4'
          />
        </div>
      </Container>
    </FeatureSection>
  );
};

export default WhyBabySwimLessons;
