import React, { useState } from 'react';
import Image from 'next/image';
import SelectDecorButton from './SelectDecorButton';
import { imageSun } from '@/assets';
import { WhiteCurvySubstrate } from '@/components/icons';
import clsx from 'clsx';

type Props = {
  id: number;
  isSelected: boolean;
  bgColor: string;
  mainColor: string;
  badgeText: string;
  lessonsCount: number;
  description: string;
  price: number;
  lessonMinutes: number;
  learnGuaranteed: boolean;
  otherCardSelected: boolean;
  onChange: (id: number) => void;
  nameAttr: string;
  salePercent?: number;
};

const LessonPackageCard = ({
  isSelected,
  bgColor,
  mainColor,
  badgeText,
  lessonsCount,
  description,
  price,
  lessonMinutes,
  salePercent,
  learnGuaranteed,
  otherCardSelected,
  id,
  onChange,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const changeStyle = hovered || isSelected;

  return (
    <label
      className={clsx(
        'flex flex-col items-center pt-[34px] pb-[30px] px-[16px] rounded-[32px] border-[2px] border-transparent relative leading-[1.2] desktop:pt-[22px] desktop:px-[6px] desktop:pb-4 transition-all',
        !isSelected && 'cursor-pointer',
        changeStyle && 'desktop:scale-[1.025]'
      )}
      style={{
        backgroundColor: bgColor,
        borderColor: changeStyle ? mainColor : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className='absolute w-max top-0 left-[50%] translate-[-50%] z-1 px-4 py-0.5 rounded-2xl font-bold text-[14px] uppercase text-white desktop:text-[10px] desktop:mt-0'
        style={{
          backgroundColor: mainColor,
        }}
      >
        {badgeText}
      </div>

      <div className='font-bold text-[32px] font-primary text-center desktop:text-[29px]'>{lessonsCount} lessons</div>

      <div className='font-semibold text-[16px] font-primary text-center mt-[6px] mb-[16px] desktop:text-[12px] desktop:mt-0 desktop:mb-2'>
        {description}
      </div>

      <div className='relative w-full h-[80px] mb-3 flex items-center justify-center desktop:w-[170px] desktop:h-[42px] desktop:mb-5'>
        <div className='relative z-1 flex items-center font-bold text-offBlack'>
          <div className='flex items-start text-black'>
            <span className='text-[20px] mt-[12px] desktop:text-[10px] desktop:mt-[5px]'>$</span>
            <span className='text-[48px] font-bold font-primary desktop:text-[22px]'>{price}</span>
          </div>
          <div className='uppercase text-[14px] mt-2 ml-1 mr-5 desktop:text-[10px] desktop:mt-0 desktop:ml-0 desktop:mr-2'>
            / {lessonMinutes} MINUTES
          </div>
          {salePercent && (
            <div className='px-[7px] py-0.5 mb-[-6px] rounded-[7px] bg-yellow text-red font-primary desktop:text-[14px] desktop:-mt-1.5'>
              -{salePercent}%
            </div>
          )}
        </div>

        <WhiteCurvySubstrate className='absolute top-0 left-0 w-full h-full' />
      </div>

      {learnGuaranteed && (
        <div
          className='flex gap-[12px] items-center w-[194px] mx-auto font-primary font-semibold desktop:text-[10px] desktop:w-[120px] desktop:gap-2'
          style={{ color: mainColor }}
        >
          <div className='w-[64] aspect-square relative rounded-[50%] bg-white shrink-0 desktop:w-[40px]'>
            <Image
              src={imageSun}
              alt=''
              className='absolute w-[50px] aspect-square top-1.5 left-2 desktop:w-[32px] desktop:top-1 desktop:left-1'
            />
          </div>
          Learn to Swim learnGuaranteed
        </div>
      )}

      <div className='desktop:mt-auto'></div>
      <SelectDecorButton
        selected={isSelected}
        size='md'
        className='mt-2 desktop:hidden'
        bgSvgClassName={otherCardSelected ? '!text-off-white' : ''}
      />

      <SelectDecorButton
        selected={isSelected}
        size='sm'
        className='mt-2 hidden desktop:block'
        bgSvgClassName={otherCardSelected ? '!text-off-white' : ''}
      />

      <input
        className='absolute w-0 h-0 invisible'
        type='radio'
        name='lesson_package'
        value={id}
        checked={isSelected}
        onChange={() => onChange(id)}
      />
    </label>
  );
};

export default LessonPackageCard;