import React from 'react';
import { logoSvg } from '@/assets';
import Image from 'next/image';
import clsx from 'clsx';

import SchoolCardBorder from './SchoolCardBorder';
import { ROW_CLASS } from './utils';

type Props = {
  features: React.ReactNode[];
  showSunsationalLogo: boolean;
  bolderColor: string;
  isLast?: boolean;
  featuresLabels?: string[];
  className?: string;
};

const SchoolCard: React.FC<Props> = ({
  features,
  showSunsationalLogo,
  bolderColor,
  isLast,
  featuresLabels,
  className,
}) => {
  return (
    <div className={clsx('pt-[142px] pb-[80px] relative min-w-[230px] max-w-[230px] h-full pl-8 pr-4', className)}>
      {showSunsationalLogo && (
        <div className='absolute z-1 w-[150px] h-[140px] -top-4 left-[50%] -translate-x-[50%]'>
          <Image src={logoSvg} alt='' fill />
        </div>
      )}

      <div className='relative z-1 flex flex-col gap-8'>
        {features.map((data, idx) => {
          return (
            <div key={idx} className={ROW_CLASS}>
              {featuresLabels?.[idx] && (
                <div className='font-primary font-bold text-[10px] text-center'>{featuresLabels[idx]}</div>
              )}
              {data}
            </div>
          );
        })}
      </div>

      <SchoolCardBorder
        color={bolderColor}
        className={clsx('absolute top-0 left-0', isLast && 'scale-x-[-1] scale-y-[97%]')}
      />
    </div>
  );
};

export default SchoolCard;
