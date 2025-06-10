import React from 'react';
import Container from '../layout/Container';
import Typography from '../semantics/Typography';
import { StaticImageData } from 'next/image';
import { benefitsOfKidsSwim, benefitsOfKidsSwim2 } from '@/assets';
import { Property } from 'csstype';
import ArrowButton from '../kit/buttons/ArrowButton';
import {
  GraduationCapIcon,
  HappyIcon,
  MedalFirstPlaceIcon,
  MuscleIcon,
  SnorkelIcon,
  SwimmingPoolIcon,
} from '../icons';
import BenefitsContentCard from '../shapes/BenefitsContentCard';

const defaultContent = {
  heading: 'Benefits of kids swimming lessons',
  buttonText: 'Book Now',
  buttonLink: '/registration',
  steps: [
    {
      title: 'Kids swimming lessons reduce the risk of drowning',
      icon: <SwimmingPoolIcon />,
      titleBgColor: 'var(--color-darkBlue)',
      description:
        'A 2009 study found that children who take kids swimming lessons have a significantly lower risk of accidental drowning. Learning to swim is essential for your kid’s safety and confidence in the water.',
    },
    {
      img: benefitsOfKidsSwim2,
      imageScale: 1.3,
    },
    {
      title: 'Swimming is a lifelong activity',
      icon: <MedalFirstPlaceIcon />,
      titleBgColor: 'var(--color-blue)',
      description:
        'Unlike many sports, swimming is something kids can start at any age, and continue throughout their lives. Swim classes introduce young swimmers to a skill that is best developed early.',
    },
    {
      title: 'Swimming builds strength and endurance',
      icon: <MuscleIcon />,
      titleBgColor: 'var(--color-darkBlue)',
      description:
        'Obesity is a rising problem in America, and swimming lessons for children might just be the answer. Swimming is a great full-body workout that improves cardiovascular health and builds muscle strength.',
    },
    {
      title: 'Important skill for fun and safety',
      icon: <HappyIcon />,
      titleBgColor: 'var(--color-lightBlue)',
      description:
        'Swimming isn’t just about safety, it’s about enjoying the time in the water with confidence. Kids swimming lessons teach children lifesaving skills while also helping kids learn to enjoy swimming for the rest of their lives.',
    },
    {
      title: 'Kids who swim do better in school',
      icon: <GraduationCapIcon />,
      titleBgColor: 'var(--color-blue)',
      description:
        'This might surprise parents, but studies have shown children who undertake swim lessons at an early age develop stronger cognitive and motor skills, which can help them succeed in school. This means they might do better!',
    },
    { img: benefitsOfKidsSwim },
    {
      title: 'A fun way to stay active and healthy',
      icon: <SnorkelIcon />,
      titleBgColor: 'var(--color-lightBlue)',
      description:
        'Swimming isn’t just a fun activity and an important life skill, it’s also a fantastic form of exercise. Non-weight bearing and able to work out every single muscle group, starting swim lessons will keep them fit until they’ve grown!',
    },
  ],
};

export type BenefitsContentCardProps = {
  title?: string;
  description?: string;
  img?: StaticImageData;
  icon?: React.ReactNode;
  titleBgColor?: Property.BackgroundColor;
  imageScale?: number;
};

type BenefitsShowCaseProps = {
  heading?: string;
  data?: BenefitsContentCardProps[];
  sectionDescriptionBottom?: string;
  buttonText?: string;
  buttonLink?: string;
};

const BenefitsShowCaseSection: React.FC<BenefitsShowCaseProps> = ({
  heading = defaultContent.heading,
  data = defaultContent.steps,
  buttonText = defaultContent.buttonText,
  buttonLink = defaultContent.buttonLink,
  sectionDescriptionBottom = '',
}) => {
  return (
    <Container className='flex flex-col items-center'>
      <div className='flex justify-center items-center'>
        <Typography
          variant='h2'
          className='font-primary max-w-[817px] text-center'
        >
          {heading}
        </Typography>
      </div>

      <div className='pt-24 pb-10 flex flex-wrap justify-center items-center gap-y-14 md:gap-y-28 gap-x-6'>
        {data.map((item, index) => (
          <BenefitsContentCard key={index} {...item} />
        ))}
      </div>
      <div className='mb-8'>
        <ArrowButton
          text={buttonText}
          link={buttonLink}
          buttonClasses='bg-offBlack text-white font-primary font-semibold'
          shadowClasses='bg-blue'
          shadow={true}
          IconClasses='bg-yellow'
          iconColor='black'
        />
      </div>
      <Typography
        className='text-[20px] font-medium font-secondary leading-[120%] max-w-[657px] text-center'
        variant='custom'
      >
        {sectionDescriptionBottom}
      </Typography>
    </Container>
  );
};

export default BenefitsShowCaseSection;
