import Image from 'next/image';
import React from 'react';
import Typography from '../semantics/Typography';
import { SocialMediaReviewCardType } from '@/types/social-media-review.type';
import { FacebookIconBlue, GoogleIcon, RatingStarIcon } from '../icons';

const SocialMediaReviewCard = (props: SocialMediaReviewCardType) => {
  return (
    <div
      style={{ backgroundColor: props.cardColor }}
      className='flex flex-col justify-start min-w-[260px] rounded-[8px] px-[1.5em] py-[1em] items-center gap-3'
    >
      <div className='h-24 w-24 relative rounded-full  overflow-hidden'>
        <Image
          style={{ objectFit: 'cover' }}
          alt='test'
          src={props.image}
          className='rounded-full absolute h-full w-full'
        />
      </div>
      <div>
        <Typography
          variant='custom'
          className='text-[18px] md:test-[28px] font-bold font-primary leading-[114%]'
        >
          {props.name}
        </Typography>
      </div>
      <div className='flex justify-center items-center'>
        {Array.from({ length: props.rating }).map((_, i) => (
          <span key={i} className='inline-block w-[24px] h-[24px]'>
            <RatingStarIcon />
          </span>
        ))}
      </div>
      <div>
        <Typography
          variant='custom'
          className='text-[14px] md:text-base font-secondary   max-w-[300px] text-center '
        >
          {props.review}
        </Typography>
      </div>
      <div className='w-6 h-6'>
        {props.platform === 'google' ? <GoogleIcon /> : <FacebookIconBlue />}
      </div>
    </div>
  );
};

export default SocialMediaReviewCard;
