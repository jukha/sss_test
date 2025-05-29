import React from 'react';
import BgCalloutYellow from '../shapes/BgCalloutYellow';
import {
  membersOfFemaleFounders,
  membersOfNdpa,
  membersOfStopDrowning,
  membersOfUssa,
} from '@/assets';
import Image from 'next/image';
import Typography from '../semantics/Typography';
import ThreeStars from '../decoration/ThreeStars';

const MembersOfSection = () => {
  return (
    <section className='section relative container'>
      <div className='absolute z-10 top-10 right-0 h-16 md:h-36'>
        <ThreeStars color='var(--color-orange)' />
      </div>
      <div className='absolute z-10 bottom-0 md:-bottom-10 left-0 h-16 md:h-36'>
        <ThreeStars color='var(--color-orange)' />
      </div>
      <Typography
        variant='h3'
        className='text-[40px] md:text-[64px] text-darkBlue font-primary font-bold leading-[115%] text-center mb-2 mb-4 max-w-[842px] mx-auto'
      >
        Members Of
      </Typography>
      <BgCalloutYellow>
        <div className='flex items-center justify-evenly lg:px-8'>
          <Image
            src={membersOfNdpa}
            alt='Member of National Drowning Prevention Alliance'
            className='max-w-[25%] mr-2'
          />
          <Image
            src={membersOfUssa}
            alt='Member of United States Swim School Association'
            className='max-w-[25%]'
          />
          <Image
            src={membersOfFemaleFounders}
            alt='Members of Female Founders'
            className='max-w-[25%]'
          />
          <Image
            src={membersOfStopDrowning}
            alt='Member Stop Drowning Now'
            className='max-w-[25%]'
          />
        </div>
      </BgCalloutYellow>
    </section>
  );
};

export default MembersOfSection;
