import React, { ReactNode } from 'react';
import Typography from '../semantics/Typography';

type TallCardProps = {
    icon: ReactNode,
    title: string;
    description1: string;
    description2?: string;
    minHeight?: string;
};

const TallFeaturesCard = (props: TallCardProps) => {
  return (
    <div className={`flex flex-col md:min-h-[${props.minHeight || '760px'}]  relative gap-4 px-[2em] md:px-[4em] py-[2em] md:py-[4em]`} >
      <span className='inline-block h-[64px] w-[64px] z-10'>
        {props.icon}
      </span>
      <Typography
        variant='custom'
        className='text-[27px] md:text-[32px] font-primary leading-[120%] font-bold text-yellow max-w-[254px]  md:max-w-[300px] z-10'
      >
        {props.title}
      </Typography>
      <Typography
        variant='custom'
        className='text-[17px] md:text-[20px] font-medium leadin-[120%] font-secondary text-white max-w-[254px]  md:max-w-[300px] z-10'
      >
        {props.description1}
      </Typography>
      {props.description2 && (
        <Typography
          variant='custom'
          className='text-[17px] md:text-[20px] font-medium leadin-[120%] font-secondary text-white max-w-[254px]  md:max-w-[300px] z-10'
        >
          {props.description2}
        </Typography>
      )}
      <div className='absolute w-full h-full -left-5 -top-5 bg-blue sunsational-difference-card-bg'></div>
      <div className='absolute w-full h-full left-0 top-0 bg-offBlack sunsational-difference-card-bg'></div>
    </div>
  );
};

export default TallFeaturesCard;
