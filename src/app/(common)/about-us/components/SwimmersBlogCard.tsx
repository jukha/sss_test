import Typography from '@/components/semantics/Typography';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Blog = {
  category: string;
  title: string;
  description: string;
  img: StaticImageData;
}

const SwimmersBlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <div className=''>
        <Image alt={`Image for blog: ${blog.title}`} src={blog.img} />
      </div>
      <div className='flex flex-col'>
        <Typography
          variant='custom'
          className='text-[13px] md:text-[14px] font-secondary font-bold leading-[120%] text-start text-offBlack mb-1'
        >
          {blog.category}
        </Typography>
        <Typography
          variant='custom'
          className='text-[16px] md:text-[20px] font-semibold leading-[120%] text-start text-offBlack font-primary mb-2'
        >
          {blog.title}
        </Typography>
        <Typography
          variant='custom'
          className='text-[14px] md:text-[16px] font-secondary font-medium text-start text-offBlack leading-[120%]'
        >
          {blog.description}
        </Typography>
      </div>
    </>
  );
};

export default SwimmersBlogCard;
