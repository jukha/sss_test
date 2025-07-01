import ArrowButton from '@/components/kit/buttons/ArrowButton';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  categories: string | null;
  title: string | null;
  teaser: string | null;
  img: string | null;
  link: string;
  hideButton?: boolean;
};

const BlogCard = (props: Props) => {
  return (
    <Link href={props.link}>
      <div className='max-w-[355px]  lg:max-w-[600px] flex justify-center items-start flex-col gap-4'>
        {props.img && (
          <Image
            width={360}
            height={230}
            className='w-[550px]'
            alt={`Image for blog: ${props.title}`}
            src={props.img}
            unoptimized
          />
        )}

        <div className='flex flex-col items-start gap-2 max-w-[550px]'>
          <Typography
            variant='custom'
            className='text-[13px] md:text-[20px] font-secondary font-bold leading-[120%] text-start text-offBlack mb-1 uppercase'
          >
            {props.categories}
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
            {props.teaser}
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
    </Link>
  );
};

export default BlogCard;
