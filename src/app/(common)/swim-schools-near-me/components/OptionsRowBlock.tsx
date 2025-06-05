import React from 'react';
import IconFrame from '@/components/icons/IconFrame';
import { Property } from 'csstype';
import Typography from '@/components/semantics/Typography';

type RowBlockProps = {
  text: string;
  highlightText: string;
  iconFrameColor: Property.BackgroundColor;
  icon: React.ReactNode;
};

const OptionsRowBlock = ({
  text,
  highlightText,
  iconFrameColor,
  icon,
}: RowBlockProps) => {
  return (
    <div className='flex flex-col gap-6 lg:flex-row lg:gap-9'>
      <div className='relative w-[64px] h-[64px]'>
        <span className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
          <IconFrame color={iconFrameColor} />
        </span>
        <span className='w-full h-full inline-block relative z-10'>{icon}</span>
      </div>
      <Typography
        variant='custom'
        className='max-w-[715px] font-bold font-primary leading-[120%] text-[33px] text-start'
      >
        {text}&nbsp;-&nbsp;
        <span className='text-darkBlue'>{highlightText}</span>
      </Typography>
    </div>
  );
};

export default OptionsRowBlock;
