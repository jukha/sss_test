import React from 'react';
import Typography from '../semantics/Typography';

type ContentItem = {
  label: string;
  Icon: React.ReactNode;
  colorClass: string;
};

type Props = {
  content: ContentItem;
};

const ChipWithIcon: React.FC<Props> = ({ content }) => {
  return (
    <div
      className='flex justify-center items-center gap-2 px-6 py-1 rounded-[32px] relative'
    >
      <span className='inline-block h-10 w-10'>{content.Icon}</span>
      <Typography
        variant='custom'
        className='text-[20px] leading-[125%] font-bold font-secondary'
      >
        {content.label}
      </Typography>
      <div
        className={`absolute w-full h-full rounded-[32px] ${content.colorClass} opacity-20 z-[-1]`}
      ></div>
    </div>
  );
};

export default ChipWithIcon;
