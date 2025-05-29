import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Typography from '../semantics/Typography';
import { StericIcon } from '../icons';
import { swimInstructorReviewImg1 } from '@/assets';

// prop types for the main component
type Props = {
  name?: string;
  experience?: string;
  img?: StaticImageData;
  rating?: number;
  review?: string;
  instructorQuote?: string;
};

// props for the reusable TextBlock subcomponent
type TextBlockProps = {
  text?: string | React.ReactNode;
  variant?: 'h2' | 'custom';
  className?: string;
};

// Main ProfileCardCircle component
const ProfileCardCircle = ({
  name = '',
  experience = '',
  img = swimInstructorReviewImg1,
  rating = 0,
  review = '',
  instructorQuote = '',
}: Props) => {
  // Dynamic styles for name text block depending on whether it's part of a review
  const nameTextBlockStyles = review
    ? 'text-base font-secondary font-bold leading-[120%]'
    : 'text-[40px] text-offBlack font-primary font-bold leading-[100%]';

  // Reusable text block to reduce duplication and manage typography consistently
  const TextBlock = ({
    text,
    variant = 'custom',
    className,
  }: TextBlockProps) => {
    if (!text) return null;

    return (
      <Typography variant={variant} className={className}>
        {text}
      </Typography>
    );
  };

  return (
    <div className='max-w-[370px] md:max-w-[417px] gap-6 p-2 md:p-4 flex flex-col justify-start items-center'>
      {/* Profile Image section */}
      <div className='review-card-cirle-bg bg-blue'>
        <Image
          style={{ clipPath: 'inherit' }}
          alt='Instructor image'
          src={img}
          className='translate-y-6 translate-x-3'
        />
      </div>

      {/* Text content */}
      <div className='flex flex-col gap-4 w-full justify-start items-start max-w-[297px]'>
        {/* User review text */}
        <TextBlock
          text={review}
          className='text-base font-secondary md:font-medium font-bold leading-[120%]'
        />

        {/* Name, optionally prefixed with "-" if part of a review */}
        <TextBlock
          text={review ? `- ${name}` : name}
          className={nameTextBlockStyles}
        />

        {/* Experience text (e.g., "5 years experience") */}
        <TextBlock
          text={experience}
          className='text-[19px] font-secondary leading-[100%] font-bold'
        />

        {/* Instructor's quote or statement */}
        <TextBlock
          text={instructorQuote}
          className='text-base font-medium leading-[120%] font-secondary text-offBlack'
        />

        {/* Rating stars */}
        <div className='flex'>
          {Array.from({ length: rating }).map((_, i) => (
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
