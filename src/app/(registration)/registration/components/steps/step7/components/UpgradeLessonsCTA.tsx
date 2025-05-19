import React from 'react';
import Image from 'next/image';
import { blackArrow } from '@/assets';
import { CurvySubstrate, CurvySubstrate2 } from '@/components/icons';

type Props = {
  lessonsCount: string;
  newLessonPrice: string;
  oldLessonPrice: string;
  onUpgradeClick?: () => void;
  onNoClick?: () => void;
};

const UpgradeLessonsCTA: React.FC<Props> = ({
  lessonsCount,
  newLessonPrice,
  oldLessonPrice,
  onUpgradeClick,
  onNoClick,
}) => {
  return (
    <div className='flex flex-col gap-2 items-center bg-off-white p-4 rounded-lg font-secondary leading-[1.2] text-offBlack'>
      <div className='text-center font-bold'>
        <span className='text-sm uppercase'>
          Upgrade to a {lessonsCount} lesson pack now!
        </span>
        <br />
        <span className='text-medium'>
          Get more lessons and save!
          <br /> Pay ${newLessonPrice}/Lesson vs ${oldLessonPrice}/Lesson
        </span>
      </div>
      <div className='flex items-center gap-3 font-primary text-xs font-semibold'>
        <button
          className='relative leading-[1] py-2 pl-2.5 pr-7'
          onClick={onUpgradeClick}
        >
          <span className='relative z-1'>Upgrade now</span>
          <span className='w-4.5 h-4.5 absolute top-[50%] right-1 translate-y-[-50%] flex items-center justify-center z-1'>
            <Image src={blackArrow} alt='' className='relative z-1 w-2 h-2' />
            <CurvySubstrate className='absolute top-0 left-0 text-orange w-full h-full' />
          </span>
          <CurvySubstrate2 className='absolute top-0 left-0 text-yellow w-full h-full' />
        </button>

        <button onClick={onNoClick}>No Thanks</button>
      </div>
    </div>
  );
};

export default UpgradeLessonsCTA;
