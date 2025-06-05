import React from 'react';
import DecorativeBorderColumns from './DecorativeBorderColumns';
import Typography from '@/components/semantics/Typography';
import Image from 'next/image';
import { logoSvg } from '@/assets';
import { SwimSchool } from './SwimSchoolComparison';
import FeatureValue from './FeatureValue';

type Props = {
  school: SwimSchool;
  index: number;
};

const SwimSchoolSlide: React.FC<Props> = ({ school, index }) => {
  return (
    <div className='embla__slide'>
      <div className='min-w-[90%] flex-shrink-0 rounded-xl pt-[122px] p-6 relative'>
        {/* Decorative Border */}
        <div className='absolute inset-0 z-[1]'>
          <DecorativeBorderColumns index={index} />
        </div>

        {/* Logo for first slide only */}
        {index === 0 && (
          <div className='absolute -top-[30px] left-1/2 -translate-x-1/2 z-2'>
            <Image src={logoSvg} alt='Sunsational Swim School Logo' />
          </div>
        )}

        {/* Title */}
        <Typography
          variant='custom'
          className='text-center font-primary font-bold text-[10px] text-offBlack leading-[120%] relative z-10'
        >
          Feature
        </Typography>
        <Typography
          variant='custom'
          className='text-center font-primary font-bold text-sm text-offBlack leading-[120%] relative z-10 mb-8'
        >
          {school.name}:
        </Typography>

        {/* Features List */}
        <ul className='-mt-4'>
          {school.features.map((feature, i) => (
            <li
              key={i}
              className='py-4 px-6 text-left relative font-primary font-bold text-sm text-offBlack leading-[120%] z-[20]'
            >
              <Typography variant='custom' className='text-[10px] text-center'>
                {feature.label}:
              </Typography>
              <Typography variant='custom' className='text-sm text-center'>
                <FeatureValue value={feature.value} symbol={feature.symbol} />
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwimSchoolSlide;
