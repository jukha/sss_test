import React from 'react';
import Typography from '../semantics/Typography';
import { BackgroundCircles, StarFishes } from '../decoration';
import ArrowButton from '../kit/buttons/ArrowButton';
import CustomInput from '../CustomInput';
import { personIcon } from '@/assets';

type Props = {
  title?: string;
  description?: string | undefined;
  buttonText?: string;
  buttonLink?: string;
};

const InlineRegistrationForm = ({
  title,
  description,
  buttonText,
  buttonLink,
}: Props) => {
  return (
    <div className='relative max-w-[920px] w-full mx-auto px-4 max-lg:py-32 py-24 max-lg:overflow-hidden'>
      <div className='absolute z-[-1] w-full h-full inline-register-form-bg bg-orange right-0 top-0 lg:right-[unset] lg:top-[unset] lg:-bottom-5 lg:-left-5'></div>
      <div className='absolute z-[-1] w-full inset-0 max-lg:h-[96%] h-full max-lg:w-[96%] inline-register-form-bg bg-yellow'>
        {/* Wave */}
        <div className='inline-register-form-wave bg-blue h-16 absolute w-full left-1/2 -translate-x-1/2 bottom-0'></div>
      </div>
      <Typography variant='h3' className='font-primary font-bold text-center'>
        {title}
      </Typography>
      <Typography
        variant='custom'
        className='font-secondary font-bold leading-[125%] text-black text-xl text-center mt-2 mb-7'
      >
        {description}
      </Typography>
      <div className='max-w-[80%] lg:max-w-[70%] mx-auto flex flex-col gap-2 lg:flex-row desktop:gap-4 mt-[30px] mb-[30px] lg:mb-[50px]'>
        <CustomInput text='Full Name' icon={personIcon} />
        <CustomInput text='Email' icon={personIcon} />
      </div>
      <div className='flex justify-center'>
        <ArrowButton
          text={buttonText ?? 'Register Now'}
          buttonClasses='bg-offBlack text-white'
          IconClasses='bg-yellow'
          iconColor='var(--color-black)'
          shadow={true}
          shadowClasses='bg-blue'
          link={buttonLink ?? '/registration'}
        />
      </div>

      {/* Top left circles */}
      <span className='inline-block z-[-1] absolute top-0 left-0 rotate-[30deg] max-lg:w-[40%]'>
        <BackgroundCircles />
      </span>
      {/* Bottom right circles */}
      <span className='inline-block absolute z-[-1] desktop:right-0 desktop:h-[90%] desktop:scale-[1] max-[400px]:w-[70%] bottom-0 right-0 rotate-[30deg]'>
        <BackgroundCircles />
      </span>
      {/* Bottom left fishes */}
      <span className='inline-block left-0 absolute lg:bottom-[40px] lg:left-[20px] max-w-[101px] max-h-[82px] lg:max-w-[212px] lg:max-h-[172px] z-[-1]'>
        <StarFishes />
      </span>
    </div>
  );
};

export default InlineRegistrationForm;
