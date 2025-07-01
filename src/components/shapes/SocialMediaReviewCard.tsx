import Image from 'next/image';
import React from 'react';
import Typography from '../semantics/Typography';
import { FacebookIconBlue, GoogleIcon, RatingStarIcon } from '../icons';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';

type SocialMediaReviewCardProps = {
  data: CustomerReviewEntity;
  rating?: number;
  cardColor?: string;
};

const SocialMediaReviewCard = ({
  data,
  rating = 5,
  cardColor = 'var(--color-iceBlue)',
}: SocialMediaReviewCardProps) => {
  return (
    <div
      style={{ backgroundColor: cardColor }}
      className='flex flex-col justify-start min-w-[260px] rounded-[8px] px-[1.5em] py-[1em] items-center gap-3'
    >
      <div className='h-10 w-10 rounded-full relative overflow-hidden'>
        {data.avatarUrl && <Image src={data.avatarUrl} alt='author image' fill className='object-cover' unoptimized />}
      </div>
      <div>
        <Typography variant='custom' className='text-[18px] md:test-[28px] font-bold font-primary leading-[114%]'>
          {data.customerName}
        </Typography>
      </div>
      <div className='flex justify-center items-center'>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className='inline-block w-[24px] h-[24px]'>
            <RatingStarIcon />
          </span>
        ))}
      </div>
      <div>
        <Typography variant='custom' className='text-[14px] md:text-base font-secondary   max-w-[300px] text-center '>
          {data.body}
        </Typography>
      </div>
      <div className='w-6 h-6'>
        {data.socialPlatform?.toLowerCase() === 'google' ? <GoogleIcon /> : <FacebookIconBlue />}
      </div>
    </div>
  );
};

export default SocialMediaReviewCard;
