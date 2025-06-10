import { whySurvivalFloatLessonImg } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const content = {
  heading: 'What are survival float lessons?',
  description: [
    'Parents often ask if we teach survival float, self-rescue techniques or Infant Swimming Resource (ISR) lessons. We share the same fundamental goal as ISR - ensuring water safety - but our teaching methods differ.',
    'ISR often uses a method called “forced back floating”, where toddlers are repeatedly submerged to trigger a floating reflex. While learning to float is valuable, this method can cause negative associations with water.',
    'At Sunsational Swim School, we focus on teaching both floating and essential swimming strokes. This ensures toddlers can stay afloat as well as move to safety confidently.',
    'Our experienced instructors use gentle encouragement and positive reinforcement, which helps toddlers develop water skills in a fun, nurturing environment. We’re committed to building a foundation of water confidence and lifelong enjoyment of swimming.',
  ],
  benefits: [
    {
      title: 'Faster progress',
      description:
        'One on one home swimming lessons help kids with overcoming a fear of the water and improves retention.',
    },
    {
      title: 'Personalized safety training',
      description:
        'Lessons adapt to their needs to teach critical survival skills like floating, safe exits, and self-rescue.',
    },
    {
      title: 'Fewer distractions',
      description:
        'Kids get immediate feedback, unlike group lessons where teaching swim lessons is a juggling act.',
    },
    {
      title: 'Familiar, safe environment',
      description:
        'Kids are more comfortable practising a life skill where they’ll swim most often.',
    },
  ],
};

const WhySurvivalFloatLessonsSection = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-lightBlue)'
      waveColor='var(--color-lightBlue)'
    >
      <Container className='flex flex-col justify-start items-center relative overflow-x-clip mt-12'>
        <FlexWrapper
          stackOrder='second-top'
          className='!justify-center relative z-10'
        >
          <div className='bg-white home-card-left flex flex-col gap-4 md:gap-8 px-[2em]  md:px-[5em] py-[3em] pb-[4em] lg:min-w-[450px] max-w-[613px] lg:translate-x-24'>
            <div className='flex flex-col max-w-[434px] justify-start items-start gap-4 lg:gap-6'>
              <Typography
                variant='custom'
                className='text-[32px] md:text-[48px]  font-bold font-primary text-darkBlue leading-[114%]'
              >
                {content.heading}
              </Typography>
              {content.description.map((text, index) => {
                return (
                  <Typography
                    key={index}
                    variant='custom'
                    className='text-[14px] md:text-[20px] font-medium font-secondary text-offBlack leading-[120%]'
                  >
                    {text}
                  </Typography>
                );
              })}
            </div>
          </div>
          <Image
            src={whySurvivalFloatLessonImg}
            alt='Kid Swimming Image'
            className=' shrink'
          />
        </FlexWrapper>
        {/* decoration elements */}
        <div className='absolute lg:top-[-25%] left-[5%] lg:left-[-10%] h-[600px] w-[400px] lg:h-[917px] lg:w-[758px]'>
          <BackgroundCircles
            circlesColor='var(--color-off-white)'
            circlesOpacity='0.4'
          />
        </div>
        <div className='absolute bottom-[-20%] right-[-20%] h-[917px] w-[758px] hidden lg:block rotate-[90deg]'>
          <BackgroundCircles
            circlesColor='var(--color-off-white)'
            circlesOpacity='0.4'
          />
        </div>
      </Container>
    </FeatureSection>
  );
};

export default WhySurvivalFloatLessonsSection;
