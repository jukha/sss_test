import IconFrame from '@/components/icons/IconFrame';
import Typography from '@/components/semantics/Typography';
import React from 'react';

type InfoBlockProps = {
  idx: number;
  heading?: string;
  description?: string;
};

const BlogInfoBlock = ({ idx, heading, description }: InfoBlockProps) => {
  return (
    <li
      key={idx}
      className='flex flex-col items-start md:flex-row md:gap-6 max-w-[818px]'
    >
      <div className='relative inline-flex justify-center items-center px-3 translate-y-1/12'>
        {/* IconFrame  */}
        <span className='inline-block absolute w-full h-full  z-[-1]'>
          <IconFrame color={'var(--color-orange)'} />
        </span>
        <span
          // Icon
          className='inline-block text-center  font-primary text-[44px] pt-1  font-bold text-white flex-1'
        >
          {idx + 1}
        </span>
      </div>

      <div className='flex-1'>
        {/* Header */}

        <Typography
          variant='h4'
          className='font-primary text-offBlack mb-3 font-bold'
        >
          {heading}
        </Typography>

        {/* Description */}

        <Typography
          variant='custom'
          className='font-secondary text-black font-medium leading-[120%] '
        >
          {description}
        </Typography>
      </div>
    </li>
  );
};

export default BlogInfoBlock;
