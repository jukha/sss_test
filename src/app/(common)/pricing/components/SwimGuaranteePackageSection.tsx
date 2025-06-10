import { learnToSwimGuaranteeImg } from '@/assets';
import { RedTickIcon } from '@/components/icons';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import LessonPricingCard from '@/components/shapes/LessonPricingCard';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import NeedHelpButton from './NeedHelpButton';
import { LessonPackage } from '@/types/lesson.types';

export type SwimGuaranteePageData = {
  image: StaticImageData;
  lessonPackages: LessonPackage[];
  title: string;
  description: string;
  conditions: string[];
};

const data: SwimGuaranteePageData = {
  image: learnToSwimGuaranteeImg,
  title: 'Learn to Swim Guarantee Package',
  description:
    'Learn to swim to the edge of the pool without help by the end of the last lesson, guaranteed!',
  conditions: [
    'Age 3+ with no physical/mental disabilities',
    'Lessons are one-on-one and must be conducted a minimum of 3x per week and 30+ mins per student.',
    'If your child cannot perform our "Sunsational Safety Sequence" after their lesson package, you\'ll get up to four more lessons for free.',
  ],
  lessonPackages: [
    {
      id: 1, // Added id for consistency with LessonPackage type
      noOfLessons: 12, // This seems to be a fixed number for this package type
      options: [{ rate: '30 minutes', price: 120, discount: 4 }],
      ribbonText: 'MOST POPULAR',
      ribbonColor: 'red',
      cardColor: '#FFF5EF',
    },
    {
      id: 2, // Added id
      noOfLessons: 18, // Fixed for this package type
      options: [{ rate: '30 minutes', price: 120, discount: 4 }],
      cardColor: '#FFF9E1',
      ribbonText: 'BEST VALUE',
      ribbonColor: 'darkOrange',
    },
  ],
};

const SwimGuaranteePackageSection = () => {
  return (
    <Container className='flex flex-col justify-start items-center gap-10'>
      <FlexWrapper className='md:gap-16'>
        <div>
          <Image alt='instructor image' src={data.image} />
        </div>
        <div className='flex flex-col gap-4 md:gap-6 max-w-[511px]'>
          <div className='flex flex-col gap-2'>
            <Typography
              variant='custom'
              className='text-[32px] md:text-[48px] font-primary font-bold leading-[114%] md:leading-[110%] text-start max-w-[354px] md:max-w-[375px]'
            >
              {data.title}
            </Typography>
            <Typography
              variant='custom'
              className='text-base md:text-[20px] font-secondary font-medium leading-[120%]'
            >
              {data.description}
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            {data.conditions.map((condition, index) => (
              <div
                key={index}
                className='flex justify-start items-center gap-4'
              >
                <div className='shrink-0 h-[26px] w-[26px]'>
                  <RedTickIcon />
                </div>
                <Typography
                  variant='custom'
                  className='text-base leading-[120%] font-medium font-secondary'
                >
                  {condition}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </FlexWrapper>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
        <div className='flex flex-col gap-6  justify-center items-center px-12 mb-4 lg:mb-0'>
          <Typography
            variant='custom'
            className='text-offBlack text-[20px] font-secondary font-bold leading-[125%] text-center'
          >
            1 Student Only (30 Minutes)
          </Typography>
          <div className='w-full border-b-[2px]'></div>
          <Typography
            variant='custom'
            className='text-offBlack text-[20px] font-secondary font-bold leading-[125%] text-center max-w-[303px]'
          >
            2 or More Students back-to-back private lessons (1 Hour + total)
          </Typography>
        </div>
        {data.lessonPackages.map((pkg) => {
          return (
            <LessonPricingCard
              key={pkg.id} // Added key
              // Pass the whole package object as props, as expected by LessonPricingCard
              id={pkg.id}
              noOfLessons={pkg.noOfLessons}
              options={pkg.options}
              cardColor={pkg.cardColor}
              ribbonColor={pkg.ribbonColor}
              ribbonText={pkg.ribbonText}
            />
          );
        })}
      </div>
      <NeedHelpButton />
    </Container>
  );
};

export default SwimGuaranteePackageSection;
