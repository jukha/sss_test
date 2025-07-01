import React from 'react';
import clsx from 'clsx';
import { SwimSchool } from './types';
import { BORDER_COLORS, DESKTOP_WHITE_LINE_BACKGROUND_TRANSLATION_Y, FIELDS_LABELS, ROW_CLASS } from './utils';
import SchoolCard from './SchoolCard';

type Props = {
  data: SwimSchool[];
};

const DesktopSwimSchoolCompetitor: React.FC<Props> = ({ data }) => {
  return (
    <div className='relative mt-[50px] pt-[60px] pl-[75px] pr-[64px] pb-[60px] mx-auto w-max'>
      <div className='absolute w-full h-full top-0 left-0 scale-x-[-1] slider-card-center bg-lightBlue' />
      <div className='absolute w-[98%] h-[95%] top-[2.5%] left-[1%] scale-x-[-1] slider-card-center bg-[#f4fbfd]' />

      <div
        className={clsx(
          'flex items-start max-w-[1250px] overflow-hidden pl-8',
          data.length > 4 && 'rounded-tr-[200px]'
        )}
      >
        <div className='absolute top-[192px] left-[5%] w-[85%] flex flex-col gap-2'>
          {FIELDS_LABELS.map((_, idx) => (
            <div
              key={idx}
              style={{
                transform: DESKTOP_WHITE_LINE_BACKGROUND_TRANSLATION_Y[idx]
                  ? `translateY(${DESKTOP_WHITE_LINE_BACKGROUND_TRANSLATION_Y[idx]})`
                  : undefined,
              }}
              className={clsx('min-h-[50px] w-full', idx % 2 === 0 && 'bg-white background-decoration')}
            />
          ))}
        </div>

        <div className='relative z-1 flex flex-col gap-8 pt-[142px] pb-[80px] max-w-[170px]'>
          {FIELDS_LABELS.map((text, idx) => {
            return (
              <div key={idx} className={ROW_CLASS}>
                {text}
              </div>
            );
          })}
        </div>

        <div className={clsx('flex items-stretch gap-1 overflow-x-auto',data.length > 4 && 'pr-24' )}>
          {data.map(({ features }, idx) => {
            const colorsIdx = idx % BORDER_COLORS.length;
            return (
              <SchoolCard
                key={idx}
                features={features}
                showSunsationalLogo={idx === 0}
                bolderColor={BORDER_COLORS[colorsIdx]}
                isLast={idx + 1 === data.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesktopSwimSchoolCompetitor;
