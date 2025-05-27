import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Typography from '@/components/semantics/Typography';
import React from 'react';

const NeedHelpButton = () => {
  return (
    <div className='flex flex-col gap-4 justify-start items-center'>
      <ArrowButton
        shadow={false}
        buttonClasses='bg-offBlack font-primary text-white leading-[120%] font-semibold text-base md:text-[20px]'
        text='Book Swimming Lesson'
        IconClasses='bg-brightYellow'
        iconColor='black'
      />
      <div className='flex gap-2'>
        <Typography
          variant='custom'
          className='font-bold font-secondary leading-[120%] text-center text-[14px] uppercase text-offBlack'
        >
          Need help? Call
        </Typography>
        <Typography
          variant='custom'
          className='font-bold font-secondary leading-[120%] text-center text-[14px] uppercase text-red'
        >
          1-888-788-2140
        </Typography>
      </div>
    </div>
  );
};

export default NeedHelpButton;
