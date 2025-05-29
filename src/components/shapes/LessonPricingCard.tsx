import React from 'react';
import Typography from '../semantics/Typography';
import { LessonOption, LessonPackage } from '@/types/lesson.types';
import clsx from 'clsx';

const PriceRow = ({ price, rate, discount }: LessonOption) => {
  if (!price) return null;
  return (
    <div className='flex gap-1 items-center'>
      <div className='flex justify-center items-center'>
        <span className='font-bold flex items-center w-[13px] -translate-y-1'>
          $
        </span>
        <Typography
          variant='custom'
          className='text-[48px] font-primary font-bold leading-[110%]'
        >
          {price}
        </Typography>
      </div>
      <div className='flex items-end h-full translate-y-1 mr-4'>
        <Typography
          variant='custom'
          className='text-[14px] font-secondary font-bold uppercase leading-[120%]'
        >
          / {rate}
        </Typography>
      </div>
      {discount && (
        <span className='bg-yellow text-red font-primary px-2 py-1 text-base font-semibold leading-[120%] rounded-[7px]'>
          -{discount}%
        </span>
      )}
    </div>
  );
};

const LessonPricingCard = ({
  noOfLessons,
  options, // Use the new options prop
  ribbonText,
  ribbonColor,
  cardColor,
  blurPrice = true,
}: LessonPackage) => {
  return (
    <div
      style={{ backgroundColor: cardColor }}
      className='relative flex flex-col items-center gap-8 rounded-[32px] px-4 pt-12 pb-5 w-[362px] md:w-[400px]'
    >
      {/* Header */}
      <Typography
        variant='custom'
        className='text-[32px] font-primary font-bold leading-[120%]'
      >
        {noOfLessons} lessons
      </Typography>

      {/* Pricing Box */}
      <div className={clsx(
        blurPrice && 'blur-lg',
        'lesson-pricing-card relative w-full p-8 gap-8 bg-white flex flex-col items-center overflow-hidden'
      )}>
        {options.map((option, index) => (
          <PriceRow
            key={index} // Consider a more stable key if options can be reordered/changed
            price={option.price}
            rate={option.rate}
            discount={option.discount}
          />
        ))}
        {/* Decorative background layer */}
        <div className='absolute h-full w-full scale-150'></div>
      </div>

      {/* Ribbon */}
      {ribbonText && (
        <div
          style={{ backgroundColor: ribbonColor }}
          className='absolute top-0 mx-auto -translate-y-1/2 rounded-[8px] px-4 py-1 z-10'
        >
          <Typography
            variant='custom'
            className='text-[14px] font-secondary font-bold uppercase text-white'
          >
            {ribbonText}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default LessonPricingCard;
