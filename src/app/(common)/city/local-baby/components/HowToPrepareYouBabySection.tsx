import { BackgroundCircles, Bubbles } from '@/components/decoration';
import ThreeStareSlim from '@/components/decoration/ThreeStareSlim';
import FeatureSection from '@/components/FeatureSection';
import IconFrame from '@/components/icons/IconFrame';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const content = {
  title: 'How to prepare your baby for swim lessons',
  description1:
    'Not ready for a formal class yet? Start at home! Simple activities in the bathtub, like gently pouring water over your baby’s head, introducing words like “kick” and “splash”, or laying them on their back in shallow water, can help them feel comfortable in the water before their first lesson.',
  description2:
    'When you’re ready for the pool, help your baby be successful with these tips:',
  pools: [
    'Home pool',
    'Housing community pool',
    'Fitness center pool',
    'City/public pool (if permitted)',
    'Country Club',
    'Hotel or resort',
    'Any other pool you have access to!',
    'HOA Pool (Condo, Apartment, etc)',
  ],
  prepartionSteps: [
    {
      color: 'var(--color-blue)',
      text: 'Feed them at least 30 minutes before a lesson to prevent tummy discomfort',
    },
    {
      color: 'var(--color-red)',
      text: 'Pack essentials like swim diapers, towels, dry clothes, and fresh diapers',
    },
    {
      color: 'var(--color-orange)',
      text: 'Arrive early so you have time to get ready',
    },
    {
      color: 'var(--color-lightBlue)',
      text: 'Ease into the water to keep the experience positive',
    },
  ],
};

const HowToPrepareYourBaby = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-lightBlue)'
      waveColor='var(--color-lightBlue)'
    >
      <FlexWrapper className='overflow-hidden lg:p-20 items-stretch max-lg:py-20'>
        <div className='lg:w-[50%] relative z-0'>
          <Typography
            variant='h3'
            className='!text-darkBlue mb-2 font-primary max-w-[454px]'
          >
            {content.title}
          </Typography>
          <Typography
            variant='body2'
            className='lg:max-w-[420px] font-medium font-secondary text-offBlack'
          >
            {content.description1}
          </Typography>
          <br />
          <Typography
            variant='body2'
            className='lg:max-w-[420px] font-medium font-secondary text-offBlack'
          >
            {content.description2}
          </Typography>
          {/* Background Circles */}
          <div className='hidden lg:block absolute inset-0 z-[-1] scale-[2.5] w-full h-full'>
            <BackgroundCircles circlesOpacity='0.3' />
          </div>
        </div>
        <div className='lg:w-[50%] flex max-w-[494px] relative z-0 '>
          <ul className='home-card-left flex flex-col gap-3 justify-evenly bg-white pl-8 pr-12 py-[50px] lg:py-[64px] lg:px-[79px]'>
            {content.prepartionSteps.map((step, idx) => (
              <li key={idx} className='flex gap-4 items-center font-secondary text-black font-medium leading-[120%] max-w-[351px]'>
                <div className='relative inline-flex justify-center items-center px-3'>
                  <span className='inline-block absolute inset-0 z-[-1]'>
                    <IconFrame color={step.color} />
                  </span>
                  <span className='inline-block text-center  font-primary text-[15px] lg:text-lg font-bold text-white flex-1'>
                    {idx + 1}
                  </span>
                </div>
                {step.text}
              </li>
            ))}
          </ul>

          {/* Top Right Stars */}
          <div className='w-[100px] lg:w-[188px] h-[112px] lg:h-[187px] absolute -top-[33px] lg:top-0 right-0 lg:-right-[94px]'>
            <ThreeStareSlim color='var(--color-orange)' />
          </div>

          {/* Top Left Bubble */}
          <div className='absolute -top-[33px] left-0 lg:-top-10 lg:-left-10 w-[116px] h-[80px]'>
            <Bubbles color='var(--color-blue)' />
          </div>

          {/* Bottom Right Bubbles */}
          <div className='hidden lg:block absolute bottom-0 right-[-150px] w-[116px] h-[116px] rotate-[-18deg] lg:w-[342px] lg:h-[200px]'>
            <Bubbles color='var(--color-blue)' />
          </div>
        </div>
      </FlexWrapper>
    </FeatureSection>
  );
};

export default HowToPrepareYourBaby;