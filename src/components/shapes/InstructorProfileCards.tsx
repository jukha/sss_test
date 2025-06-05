import Image from 'next/image';
import React from 'react';
import { ProtectIcon, ReviewStarIcon } from '../icons';
import Typography from '../semantics/Typography';
import Link from 'next/link';
import { InstructorEntity } from '@/entities/instructor.entity';
import { instructorProfileCardImage } from '@/assets'; // Fallback image

type Props = {
  profile: InstructorEntity; 
};

const InstructorProfileCards = ({ profile }: Props) => {
  const name = profile.name || 'N/A';

  const location = profile.address?.replace(/^, |, $/g, '') || 'N/A';

  let certificationText = 'Certification N/A';

  if (profile.registrationYear) {
    const year = new Date(profile.registrationYear).getFullYear();
    if (!isNaN(year)) {
      certificationText = `Sunsational Certified Since ${year}`;
    }
  } else if (profile.certifications) {
    certificationText = profile.certifications;
  }

  const about = profile.biography || 'No biography available.';
  const imageUrl = profile.avatarUrl || instructorProfileCardImage;

  const displayRating = 5 // we always show 5 stars

  return (
    <div className='mb-16'>
      <div className='flex gap-3 lg:gap-4 items-center w-full mb-[18px]'>
        {/* image */}
        <div className='relative'>
          <div className='instructor-profile-card-bg bg-blue'>
            <Image
              style={{ clipPath: 'inherit' }}
              className='relative top-1 left-1 h-full scale-120 max-lg:max-w-[105px]'
              src={imageUrl}
              alt={`Instructor ${name} profile Card Image`}
              width={105}
              height={105}
              objectFit='cover'
            />
          </div>
          <span className='inline-block absolute w-[31px] h-[31px] lg:w-[50px] lg:h-[50px] z-[99] -bottom-2 -right-3 lg:bottom-0 lg:-right-2'>
            <ProtectIcon strokeColor='var(--color-blue)' hasWhiteBg={true} />
          </span>
        </div>
        {/* text */}
        <div className='flex-1'>
          <div className='flex justify-between'>
            {/* Name */}
            <Typography
              variant='h4'
              className='font-bold font-primary text-offBlack leading-[120%]'
            >
              {name} {/* Use derived name */}
            </Typography>
            {/* Location */}

            {/* stars */}
            <div className='inline-flex gap-1'>
              {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className='inline-flex gap-2 h-5 w-5 lg:h-6 lg:w-6'
                  >
                    <ReviewStarIcon filled={i < displayRating} />{' '}
                  </span>
                )
              )}
            </div>
          </div>
          <Typography
            variant='custom'
            className='font-secondary font-bold text-sm lg:text-xl text-offBlack'
          >
            {location} {/* Use derived location */}
          </Typography>
          {/* Certification */}
          <Typography
            variant='custom'
            className='font-secondary font-bold text-sm lg:text-xl text-offBlack'
          >
            {certificationText} {/* Use derived certificationText */}
          </Typography>
        </div>
      </div>
      <Typography variant='body3' className='font-medium max-w-[672px] mb-6'>
        {about} {/* Use derived about */}
      </Typography>

      <div className='relative max-w-max z-0'>
        <Link
          href='#'
          className='text-center text-[20px] leading-[120%] font-bold font-primary py-3 px-5 inline-block'
        >
          Register Now
        </Link>
        <div className='bg-yellow absolute z-[-1] inset-0 scale-y-[-1] background-decoration'></div>
      </div>
    </div>
  );
};

export default InstructorProfileCards;
