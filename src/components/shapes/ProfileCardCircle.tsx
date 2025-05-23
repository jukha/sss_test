import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Typography from '../semantics/Typography';
import { StericIcon } from '../icons';

interface Props {
  name: string;
  experience: string;
  description?: string;
  img: StaticImageData;
  rating: number;
}

const ProfileCardCircle = (props: Props) => {
  return (
    <div className='max-w-[370px] md:max-w-[417px] gap-6 p-2 md:p-4 flex flex-col  justify-start items-center'>
      {/* image */}

      <div className='review-card-cirle-bg bg-blue'>
        <Image
          style={{ clipPath: 'inherit' }}
          alt=' instructor image'
          src={props.img}
          className='translate-y-6 translate-x-3'
        />
      </div>

      <div className='flex flex-col gap-4 w-full justify-start items-start max-w-[272px]'>
        <Typography
          variant='custom'
          className='text-[40px] text-offBlack font-primary font-bold leading-[100%]'
        >
          {props.name}
        </Typography>
        <Typography
          variant='custom'
          className='text-[19px] font-secondary leading-[100%] font-bold'
        >
          {props.experience}
        </Typography>
        <Typography
          variant='custom'
          className='text-base font-medium leading-[120%] font-secondary text-offBlack'
        >
          {props.experience}
        </Typography>
        <div className='flex'>
          {Array.from({ length: props.rating }).map((_, i) => (
            <span key={i} className='inline-block w-[35px] h-[35px]'>
              <StericIcon />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCardCircle;
