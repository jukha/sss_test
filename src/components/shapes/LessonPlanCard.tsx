import React from 'react';
import ArrowButton from '../kit/buttons/ArrowButton';
import FlexWrapper from '../layout/FlexWrapper';
import Typography from '../semantics/Typography';
import Image, { StaticImageData } from 'next/image';
import IconFrame from '../icons/IconFrame';

type LessonPlanCardType = {
  index: number;
  title: string;
  lessonLength?: string | undefined;
  recommendedLessons?: string | undefined;
  description?: string | undefined;
  conditions?: string[] | undefined;
  image: StaticImageData;
};

// Helper component for displaying lesson information with label and value
const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className='flex gap-1'>
    <Typography
      variant='custom'
      className='text-[18px] md:text-[24px] font-bold font-secondary leading-[125%]'
    >
      {label}:
    </Typography>
    <Typography
      variant='custom'
      className='text-[18px] md:text-[24px] font-bold font-secondary leading-[125%] text-red'
    >
      {value}
    </Typography>
  </div>
);

// Helper component for displaying condition items
const ConditionItem = ({ text }: { text: string }) => (
  <div className='flex justify-start items-center gap-2'>
    <span className='w-[15px] h-[15px] inline-block'>
      <IconFrame color='red' />
    </span>
    <Typography
      variant='custom'
      className='text-[20px] font-medium font-secondary leading-[120%] max-w-[351px]'
    >
      {text}
    </Typography>
  </div>
);

const LessonPlanCard = ({
  index,
  title,
  lessonLength,
  recommendedLessons,
  description,
  conditions,
  image,
}: LessonPlanCardType) => {
  return (
    <FlexWrapper
      stackOrder='second-top'
      direction={index % 2 === 0 ? 'row-reverse' : 'row'}
      key={index}
    >
      <div className='flex flex-1 lg:justify-center max-lg:flex-wrap gap-4 lg:gap-12 items-start '>
        <div className='flex flex-col gap-2'>
          <Typography
            variant='h3'
            className='font-primary capitalize mb-3 max-w-[375px]'
          >
            {title}
          </Typography>
          <div className='flex flex-col'>
            {lessonLength && (
              <InfoItem label='Lesson Length' value={lessonLength} />
            )}
            {recommendedLessons && (
              <InfoItem
                label='Recommended Lessons'
                value={recommendedLessons}
              />
            )}
          </div>

          {description && (
            <Typography
              variant='custom'
              className='text-base md:text-[20px] font-medium font-secondary max-w-[417px] leading-[120%] mb-4'
            >
              {description}
            </Typography>
          )}
          {conditions && (
            <div className='flex flex-col gap-4 mb-4'>
              {conditions.map((condition, index) => (
                <ConditionItem key={index} text={condition} />
              ))}
            </div>
          )}
          <div className='flex'>
            <ArrowButton
              text={'Sign up for Lessons'}
              buttonClasses='bg-offBlack text-white'
              iconColor='var(--color-black)'
              IconClasses='bg-yellow'
              shadow={true}
              shadowClasses='bg-blue'
              link='/registration'
            />
          </div>
        </div>
      </div>
      <div className='max-w-[840px] flex-1 relative z-0'>
        <Image src={image} alt={title} className='' />
      </div>
    </FlexWrapper>
  );
};

export default LessonPlanCard;
