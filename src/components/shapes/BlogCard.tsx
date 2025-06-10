import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Typography from '@/components/semantics/Typography';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  category: string;
  title: string;
  description: string;
  img: StaticImageData;
  link: string;
  hideButton?: boolean;
};

const BlogCard = (props: Props) => {
  return (
    <div className=' max-w-[355px]  lg:max-w-[600px] flex justify-center items-start flex-col gap-4'>
      <Image
        className='w-[550px]'
        alt={`Image for blog: ${props.title}`}
        src={props.img}
      />

      <div className='flex flex-col items-start gap-2 max-w-[550px]'>
        <Typography
          variant='custom'
          className='text-[13px] md:text-[20px] font-secondary font-bold leading-[120%] text-start text-offBlack mb-1'
        >
          {props.category}
        </Typography>
        <Typography
          variant='custom'
          className='text-[16px] md:text-[32px] font-semibold md:font-bold leading-[120%] text-start text-offBlack font-primary mb-2'
        >
          {props.title}
        </Typography>
        <Typography
          variant='custom'
          className='text-[14px] md:text-[20px] font-secondary font-medium text-start  leading-[120%] mb-2'
        >
          {props.description}
        </Typography>
        {!props.hideButton && (
          <ArrowButton
            link={props.link}
            buttonClasses='bg-offBlack h-14 font-primary font-semibold text-[20px] text-white'
            iconColor='black'
            IconClasses='bg-brightYellow scale-[0.75]'
            text='Read More'
          />
        )}
      </div>
    </div>
  );
};

export default BlogCard;
