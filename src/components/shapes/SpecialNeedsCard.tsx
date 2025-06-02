import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Typography from '../semantics/Typography';

type SpecialNeedsCardType = {
  icon: StaticImageData;
  title: string;
  key: number;
};

const SpecialNeedsCard = ({ key, icon, title }: SpecialNeedsCardType) => {
  return (
    <div
      key={key}
      className='max-w-[284px] swim-skill-card-bg px-[25px_31px] py-[25px_0px] min-h-[275px] min-w-[286px] flex flex-col gap-1 justify-start items-center bg-off-white'
    >
      <span className='bg-yellow inline-flex mx-auto w-[162px] h-[162px] rounded-full items-center justify-center'>
        <Image src={icon} alt='' />
      </span>
      <Typography
        variant='h6'
        className='font-secondary !font-bold !text-2xl text-off-black leading-[125%] mt-2 mb-[26px] text-center'
      >
        {title}
      </Typography>
    </div>
  );
};

export default SpecialNeedsCard;
