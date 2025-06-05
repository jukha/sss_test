import React, { ReactNode } from 'react'
import IconFrame from '../icons/IconFrame';
import { Property } from 'csstype';
import clsx from 'clsx';
import Typography from '../semantics/Typography';

const PerkCard = ({
  description,
  descriptionClasses,
  icon,
  iconFrameColor,
}: {
  description: string;
  descriptionClasses: string;
  icon: ReactNode;
  iconFrameColor: Property.BackgroundColor;
}) => {
  return (
    <li className='flex-1 min-h-[224px] flex items-stretch relative'>
      <div className='w-full background-decoration bg-lightBlue flex items-center p-[33px_12px_21px_59px] lg:p-[42px_16px_28px_78px]'>
        <Typography
          variant='h4'
          className={clsx(
            'font-primary text-offBlack leading font-bold',
            descriptionClasses
          )}
        >
          {description}
        </Typography>
      </div>
      {/* Icon frame + Icon */}
      <div className='grid justify-items-center items-center absolute self-center -left-[60px]'>
        <span
          style={{ gridArea: '1/1' }}
          className='scale-x-[-1] inline-block w-[93px] h-[96px] lg:w-[123px] lg:h-[127px]'
        >
          <IconFrame color={iconFrameColor} />
        </span>
        <span
          style={{ gridArea: '1/1' }}
          className='z-0 inline-block w-12 h-12 lg:w-16 lg:h-16'
        >
          {icon}
        </span>
      </div>
    </li>
  );
};

export default PerkCard