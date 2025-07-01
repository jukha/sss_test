import Typography from '@/components/semantics/Typography';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import Image from 'next/image';
import React from 'react';

type SwimmersBlogCardProps = {
  blog: BlogRecordEntity;
};

const SwimmersBlogCard = ({ blog }: SwimmersBlogCardProps) => {
  return (
    <>
      {blog.featuredImage && (
        <div>
          <Image
            src={blog.featuredImage}
            width={360}
            height={230}
            alt={`Image for blog: ${blog.title}`}
          />
        </div>
      )}

      <div className='flex flex-col'>
        <Typography
          variant='custom'
          className='text-[13px] md:text-[14px] font-secondary font-bold leading-[120%] text-start text-offBlack mb-1'
        >
          {blog.categories[0].name}
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
          {blog.body}
        </Typography>
      </div>
    </>
  );
};

export default SwimmersBlogCard;
