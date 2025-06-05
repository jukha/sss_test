import { logoSvg } from '@/assets';
import Image from 'next/image';
import React from 'react';
import DecorativeBorderColumns from './DecorativeBorderColumns';
import { SwimSchool } from './SwimSchoolComparison';
import FeatureValue from './FeatureValue';

type Props = {
  data: SwimSchool[];
};

const SwimSchoolComparisonDesktopSection: React.FC<Props> = ({ data }) => {
  const featureLabels = data[0].features.map((f) => f.label);

  return (
    <div className='hidden relative max-w-[1280px] mx-auto section pt-[177px] pb-28 lg:px-14 lg:flex items-center justify-center min-h-[868px]'>
      {/* Background layers */}
      <div className='absolute z-[-3] inset-0 slider-card-center scale-x-[-1] bg-lightBlue'></div>
      <div className='absolute z-[-3] w-[98%] h-[95%] top-1/2 left-1/2 scale-x-[-1] translate-x-[-50%] translate-y-[-50%] slider-card-center bg-[#f4fbfd]'></div>

      {/* Decorative SVGs aligned with grid columns */}
      <div
        className='absolute inset-0 pointer-events-none z-10 items-center'
        style={{
          display: 'grid',
          gridTemplateColumns: `minmax(150px, 1fr) repeat(${data.length}, 1fr) 30px`,
        }}
      >
        {/* Skip first column (Feature labels) */}
        <div></div>

        {/* Decorative border SVG element */}
        {data.map((_, idx) => (
          <div
            key={`svg-col-${idx}`}
            className='relative h-[80%] hidden lg:flex items-center justify-center'
            style={{ gridColumn: idx + 2 }}
          >
            {/* Show sunsational Logo on the first slide */}
            {idx === 0 && (
              <div className='absolute top-[-50px]'>
                <Image src={logoSvg} alt='Sunsational Swim School Logo' />
              </div>
            )}

            <DecorativeBorderColumns index={idx} />
          </div>
        ))}
      </div>

      {/* *************** */}
      {/* Main Grid Start */}
      {/* *************** */}
      <div
        className='grid w-full desktop:min-w-[1200px] relative'
        style={{
          gridTemplateColumns: `repeat(${data.length + 1}, minmax(150px, 1fr))`,
        }}
      >
        {/* Header row */}
        <div className='py-4 px-6 relative font-primary font-bold text-sm text-offBlack leading-[120%]'>
          Feature
          <div className='bg-white background-decoration absolute inset-0 w-full h-full -z-[3]'></div>
        </div>
        {data.map((school, idx) => (
          <div
            key={idx}
            className='py-4 px-6 pr-20 relative font-primary font-bold text-center text-sm text-offBlack leading-[120%] z-[20]'
          >
            {school.name}
          </div>
        ))}

        {/* Content rows */}
        {featureLabels.map((label, rowIdx) => (
          <React.Fragment key={rowIdx}>
            <div className='py-4 px-6 relative z-0 font-primary font-bold text-sm text-offBlack leading-[120%]'>
              <span className='max-w-[170px] inline-block'>{label}</span>
              {rowIdx % 2 === 1 && (
                <div className='bg-white background-decoration absolute inset-0 w-full h-full -z-[3]'></div>
              )}
            </div>

            {/* Features Start */}
            {data.map((school, colIdx) => {
              const feature = school.features.find((f) => f.label === label);
              return (
                <div
                  key={colIdx}
                  className='py-4 px-6 text-left relative font-primary font-bold text-sm text-offBlack leading-[120%] z-[20]'
                >
                  {feature ? <FeatureValue value={feature.value} symbol={feature.symbol} /> : '-'}
                </div>
              );
            })}
            {/* Features End */}
          </React.Fragment>
        ))}
      </div>
      {/* *************** */}
      {/* Main Grid End */}
      {/* *************** */}
    </div>
  );
};

export default SwimSchoolComparisonDesktopSection;
