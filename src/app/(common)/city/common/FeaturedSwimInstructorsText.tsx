import Typography from '@/components/semantics/Typography';
import React from 'react';

type Props = {
  title: string
  description: string;
}

export const FeaturedSwimInstructorsText = ({ description, title }: Props) => {
  return (
    <section className='md:px-[4em] relative flex flex-col gap-20 overflow-clip justify-start items-center mt-[50px]'>
      <div className='flex flex-col gap-6 justify-start items-center z-10'>
        <Typography
          variant='h2'
          className='max-w-[354px] md:max-w-[849px] text-center'
        >
          {title}
        </Typography>
        <Typography
          variant='body1'
          className='max-w-[354px] md:max-w-[820px] text-center font-bold md:font-medium text-offBlack whitespace-break-spaces'
        >
          {description}
        </Typography>
      </div>
    </section>
  )
}
