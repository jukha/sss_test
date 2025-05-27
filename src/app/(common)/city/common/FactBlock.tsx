import React from 'react';
import { SwimLessonFact } from '@/types/swim-lesson.types';

export const FactBlock = ({ position, title, text, color = 'var(--color-yellow)' }: SwimLessonFact) => {
  if (!position || !title) return null;

  const positionClasses: { [key: string]: string } = {
    'top-right': 'justify-end items-start w-full h-full',
    'bottom-right': 'justify-end items-end w-full lg:h-full',
    'bottom-left': 'justify-start items-end w-full lg:h-full',
    'left-center': 'justify-start items-center w-full lg:h-full',
  };

  return (
    <div className={`flex ${positionClasses[position]}`}>
      <div
        style={{ backgroundColor: color }}
        className={
          'flex flex-col justify-center items-center chip-bg  px-[1em] md:px-[2em] py-[1em] max-h-[120px] md:max-h-[200px]'
        }
      >
        <span className='inline-block text-[42px] lg:text-[80px] max-w-[219px] md:max-w-[414px] text-center font-primary font-bold leading-[112%]'>
          {title}
        </span>

        <span className='inline-block max-w-[215px] md:max-w-[415px] text-[18px] md:text-[28px] leading-[112%] font-medium text-center'>
          {text}
        </span>
      </div>
    </div>
  );
};
