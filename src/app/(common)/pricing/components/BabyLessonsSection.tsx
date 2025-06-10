import { babyLessonsImg } from '@/assets';
import Container from '@/components/layout/Container';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/semantics/Typography';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import LessonPricingCard from '@/components/shapes/LessonPricingCard';
import NeedHelpButton from './NeedHelpButton';
import { LessonPackage } from '@/types/lesson.types';

type BabyLessonsPageData = {
  title: string;
  description: string;
  noOfStudent: string;
  type: string;
  image: StaticImageData;
  lessonPackages: LessonPackage[];
};


const data: BabyLessonsPageData = {
  title: 'Baby/Toddler/ Child Lessons',
  description: ' The more lessons you buy the more you save',
  noOfStudent: '  1 Student',
  type: '30-45 Minute private Lessons',
  image: babyLessonsImg,
  lessonPackages: [
    // Renamed from lessonPrices
    {
      id: 1,
      noOfLessons: 6,
      options: [
        { rate: '30 minutes', price: 100 },
        { rate: '45 minutes', price: 120 },
      ],
      cardColor: '#EEFCFF',
    },
    {
      id: 2,
      noOfLessons: 12,
      options: [
        { rate: '30 minutes', price: 95, discount: 5 },
        { rate: '45 minutes', price: 115, discount: 7 },
      ],
      ribbonText: 'MOST POPULAR',
      ribbonColor: 'red',
      cardColor: '#FFF5EF',
    },
    {
      id: 3,
      noOfLessons: 18,
      options: [
        { rate: '30 minutes', price: 90, discount: 10 },
        { rate: '45 minutes', price: 110, discount: 15 },
      ],
      ribbonText: 'BEST VALUE',
      ribbonColor: 'darkOrange',
      cardColor: '#FFF9E1',
    },
  ],
};

const BabyLessonsSection = () => {
  return (
    <Container className='flex flex-col justify-start items-center gap-10'>
      <FlexWrapper className='md:gap-16'>
        <div>
          <Image className='' alt='instructor image' src={data.image} />
        </div>
        <div className='flex flex-col gap-4 md:gap-6'>
          <div className='flex flex-col gap-2'>
            <Typography
              variant='custom'
              className='text-[32px] md:text-[48px] font-primary font-bold leading-[114%] md:leading-[110%] text-start max-w-[354px] md:max-w-[375px]'
            >
              {data.title}
            </Typography>
            <Typography
              variant='custom'
              className='text-base md:text-[20px] font-secondary font-medium leading-[120%] whitespace-nowrap'
            >
              {data.description}
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography
              variant='custom'
              className='text-[20px] md:text-[24px] leading-[125%] font-bold font-secondary'
            >
              {data.noOfStudent}
            </Typography>
            <Typography
              variant='custom'
              className='text-[14px] md:text-[20px] leading-[120%] font-bold font-secondary text-red'
            >
              {data.type}
            </Typography>
          </div>
        </div>
      </FlexWrapper>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
        {data.lessonPackages.map((pkg) => {
          return (
            <LessonPricingCard
              key={pkg.id}
              id={pkg.id}
              options={pkg.options} // Pass the whole options array
              ribbonColor={pkg.ribbonColor}
              ribbonText={pkg.ribbonText}
              noOfLessons={pkg.noOfLessons}
              cardColor={pkg.cardColor}
            />
          );
        })}
      </div>
      <NeedHelpButton />
    </Container>
  );
};

export default BabyLessonsSection;
