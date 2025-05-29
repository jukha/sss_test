import Image from 'next/image';
import React from 'react'
import Typography from '../semantics/Typography';
import { BenefitsContentCardProps } from '../sections/BenefitsShowCaseSection';

  const BenefitsContentCard: React.FC<BenefitsContentCardProps> = ({
    title,
    description,
    img,
    titleBgColor = 'bg-white',
    imageScale = 1,
    icon,
  }) => {
    // checking if color is light
    const fontColor = /light/i.test(titleBgColor) ? 'text-black' : 'text-white';
    return (
      <div className='flex flex-col items-center w-full md:max-w-[500px] relative'>
        {title && (
          <div className='flex flex-col justify-start items-center gap-6 p-10 pt-[60px] md:pt-[90px] w-full max-h-[345px]'>
            <Typography
              variant='custom'
              className='text-[14px] md:text-[20px] font-secondary font-medium leading-[120%] max-w-[302px] md:max-w-[421px] text-black'
            >
              {description}
            </Typography>
            <div
              style={{ backgroundColor: titleBgColor }}
              className={`flex w-full lg:min-h-[154px] absolute top-0 -translate-y-1/2 justify-start items-center gap-4 background-decoration max-w-[370px] md:max-w-[504px]  px-4 md:px-8 py-4`}
            >
              <span className='hidden md:inline-block h-[75px] w-[75px] shrink-0'>
                {icon}
              </span>
              <Typography
                variant='h4'
                className={`text-black font-bold font-primary leading-[120%] ${fontColor}`}
              >
                {title}
              </Typography>
            </div>
            <div className='hidden md:block absolute top-0 left-0 w-full h-full bg-off-white z-[-1] slider-card-center'></div>
          </div>
        )}
        {img && (
          <div className='relative w-full h-[345px] max-w-[500px] overflow-hidden -translate-y-10 md:-translate-y-0'>
            <Image
              src={img}
              alt='Benefit Illustration'
              className='absolute top-0 left-0 w-full h-full'
              style={{ objectFit: 'contain', scale: imageScale }}
            />
          </div>
        )}
      </div>
    );
  };

export default BenefitsContentCard