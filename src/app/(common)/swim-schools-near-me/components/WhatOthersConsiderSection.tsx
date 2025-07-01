import React from 'react';
import { whatOthersConsiderSectionImg } from '@/assets';
import { Bubbles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import { HomeIcon, HourGlassIcon, LocationIcon } from '@/components/icons';
import Container from '@/components/layout/Container';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import OptionsRowBlock from './OptionsRowBlock';

const content = {
  description:
    'Choosing the best swim school near you depends on your needs and priorities. If you:',
  chooseOptions: [
    {
      icon: <HourGlassIcon />,
      iconFrameColor: 'var(--color-yellow)',
      text: 'Want the fastest progress and most personalized lessons',
      highlightText: 'Choose Sunsational Swim School.',
    },
    {
      icon: <HomeIcon />,
      text: 'Prefer social group classes at a fixed location',
      iconFrameColor: 'var(--color-orange)',
      highlightText: 'Choose a local swim facility.',
    },
    {
      icon: <LocationIcon />,
      text: 'Need lessons at home for added safety and convenience',
      iconFrameColor: 'var(--color-red)',
      highlightText: 'Choose Sunsational Swim School.',
    },
  ],
};

type Props = {
  city: string;
  state: string;
}

const WhatOthersConsiderSection: React.FC<Props> = ({ city, state }) => {
  return (
    <FeatureSection
      waveColor='var(--color-lightBlue)'
      backgroundColor='var(--color-lightBlue)'
    >
      <Container className='flex flex-col justify-start overflow-x-clip my-12 items-center relative gap-8'>
        <Typography variant='h2' className='text-center max-w-[911px]'>
          What Others Consider When Choosing A Swim School in {city}, {state}!
        </Typography>
        <div
          className={`w-full flex flex-col justify-center items-center relative  lg:overflow-visible md:my-16`}
        >
          <div className='relative flex justify-center  overflow-x-clip items-center w-full'>
            <Image
              src={whatOthersConsiderSectionImg}
              alt={'Advanced and Competetive Summers Image'}
              className='z-10 -translate-x-6 md:-translate-x-12'
            />
            {/* decoration el left */}
            <div className='absolute w-[168px] h-[145px]  lg:h-[503px] lg:w-[612px]  rotate-180 left-[-10%] top-0 md:left-[-10%] md:top-[-20%] opacity-30 '>
              {<Bubbles color='var(--color-blue)' />}
            </div>
          </div>
        </div>
        <Typography
          variant='custom'
          className='text-[18px] text-off-black md:text-black md:text-[20px] font-bold leading-[120%] mb-8 font-secondary max-w-[819px] whitespace-break-spaces text-start'
        >
          {content.description}
        </Typography>
        <div className='relative z-10 flex flex-col gap-16 justify-center items-center'>
          {content.chooseOptions.map((el, index) => {
            return (
              <OptionsRowBlock
                key={index}
                text={el.text}
                highlightText={el.highlightText}
                iconFrameColor={el.iconFrameColor}
                icon={el.icon}
              />
            );
          })}
        </div>
        {/* decoration el right */}
        <div className='absolute w-[168px] h-[145px]  lg:h-[503px] lg:w-[612px] right-[-10%] bottom-0 lg:right-[-10%] lg:bottom-[-5%] opacity-30'>
          {<Bubbles color='var(--color-blue)' />}
        </div>
      </Container>
    </FeatureSection>
  );
};

export default WhatOthersConsiderSection;
