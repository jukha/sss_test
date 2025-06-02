import { WhyOneonOneLessonsImg } from '@/assets';
import { BackgroundCircles } from '@/components/decoration';
import FeatureSection from '@/components/FeatureSection';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import React from 'react';

const content = {
  sectionHeading:
    ' Why are one-on-one lessons more effective for water safety?',
  sectionDescription:
    'Drowning is the leading cause of death for children who are four and under and the second leading cause of unintentional injury-related death among children ages 14 and under. Most incidents occur in less than five minutes, often while a parent is nearby. Group lessons can introduce water skills, but they don’t provide the focused attention children need to master life-saving swim skills quickly. Private lessons, on the other hand, offer:',
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

type BenefitListItemProps = {
  title: string;
  description: string;
  index: number;
};

const BenefitListItem: React.FC<BenefitListItemProps> = ({ title, description, index }) => {
  return (
    <div key={index} className='flex flex-col justify-start items-start'>
      <Typography
        variant='custom'
        className='text-[25px] md:text-[32px]  font-bold font-primary text-yellow'
      >
        {title}
      </Typography>
      <Typography
        variant='custom'
        className='text-base md:text-[20px] font-medium font-secondary text-white leading-[120%]'
      >
        {description}
      </Typography>
    </div>
  );
};

const WhyOneOnOneLessonsSection = () => {
  return (
    <FeatureSection
      backgroundColor='var(--color-yellow)'
      waveColor='var(--color-yellow)'
      className='-translate-y-40'
    >
      <Container className='flex flex-col justify-start items-center relative overflow-x-clip mt-12'>
        <div className='flex flex-col gap-6 justify-start items-center relative z-10'>
          <Typography variant='h2' className='max-w-[837px] text-center'>
            {content.sectionHeading}
          </Typography>
          <Typography
            variant='body2'
            className='font-secondary font-bold md:font-medium leading-[120%] max-w-[354px] text-center md:max-w-[820px]'
          >
            {content.sectionDescription}
          </Typography>
        </div>

        <FlexWrapper
          stackOrder='second-top'
          className='!justify-center -translate-y-32 lg:-translate-y-0  relative z-10'
        >
          <div className='bg-offBlack home-card-left flex flex-col gap-4 md:gap-8 px-[2em] md:px-[4em] py-[3em] pb-[4em] lg:min-w-[450px] max-w-[613px] lg:translate-x-24'>
            {content.benefits.map((el, index) => (
              <BenefitListItem key={index} {...el} index={index} />
            ))}
          </div>
          <Image
            src={WhyOneonOneLessonsImg}
            alt='Kid Swimming Image'
            className='translate-y-32 shrink lg:translate-y-0 '
          />
        </FlexWrapper>
        <div className='absolute lg:top-[-10%] left-[5%] lg:left-[-5%] h-[600px] w-[400px] lg:h-[917px] lg:w-[758px]'>
          <BackgroundCircles
            circlesColor='var(--color-off-white)'
            circlesOpacity='0.4'
          />
        </div>
        <div className='absolute bottom-[-10%] right-[-10%] h-[917px] w-[758px] hidden lg:block rotate-[90deg]'>
          <BackgroundCircles
            circlesColor='var(--color-off-white)'
            circlesOpacity='0.4'
          />
        </div>
      </Container>
    </FeatureSection>
  );
};

export default WhyOneOnOneLessonsSection;
