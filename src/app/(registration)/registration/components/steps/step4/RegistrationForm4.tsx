import React, { useState } from 'react';

import CustomCurveButton from '@/components/CustomCurveButton';
import { blackArrow } from '@/assets';
import GoBackTextButton from '../../shared/GoBackTextButton';
import RecommendedTime from './components/RecommendedTime';
import LessonMinutesSelector from './components/LessonMinutesSelector';
import LessonPackageSelector from './components/LessonPackageSelector';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';

const getLessonMinutesSelectorTitle = (studentsNames: string[]) => {
  if (studentsNames.length === 1) {
    return `How long would you like each swimming lesson to last for ${studentsNames[0]}`;
  }

  const namesWithoutLast = studentsNames.slice(0, studentsNames.length - 1);
  const lastName = [...studentsNames].splice(-1)[0];

  return `Select how much lesson time you want ${namesWithoutLast.join(
    ', '
  )} and ${lastName}`;
};

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;

  studentsNames?: string[];
  lessonsMinutes?: [number, number, number];
  recommendedTimeInMinutes?: number;
  packages?: LessonPackageEntity[];
  disableContinueBtn?: boolean;
  onLessonMinutesChange?: (index: number) => void;
  onPackageChange?: (index?: number) => void;
};

const RegistrationForm4: React.FC<Props> = ({
  onNextClicked,
  onPreviousClicked,

  studentsNames,
  lessonsMinutes,
  recommendedTimeInMinutes,
  packages,
  disableContinueBtn,
  onLessonMinutesChange,
  onPackageChange,
}) => {
  const [selectedLessonMinutesIndex, setSelectedLessonMinutesIndex] =
    useState<number>();
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number>();

  const handleLessonMinutesChange = (index: number) => {
    setSelectedLessonMinutesIndex(index);
    setSelectedPackageIndex(undefined);
    onLessonMinutesChange?.(index);
  };

  const handlePackageIndexChange = (index?: number) => {
    setSelectedPackageIndex(index);
    onPackageChange?.(index);
  };

  return (
    <div className='flex flex-col gap-[34px]'>
      <GoBackTextButton text='Swimming Lessons' onClick={onPreviousClicked} />
      {studentsNames && typeof recommendedTimeInMinutes !== 'undefined' && (
        <RecommendedTime
          timeInMinutes={recommendedTimeInMinutes.toString()}
          studentsNames={studentsNames}
        />
      )}

      {studentsNames && (
        <p className='font-bold font-secondary leading-[125%] text-[19px] text-center text-offBlack desktop:mt-[-18px] desktop:text-[24px]'>
          {getLessonMinutesSelectorTitle(studentsNames)}
        </p>
      )}

      {lessonsMinutes && (
        <LessonMinutesSelector
          timesInMinutes={lessonsMinutes}
          recommended={recommendedTimeInMinutes}
          onChange={handleLessonMinutesChange}
        />
      )}

      {selectedLessonMinutesIndex !== undefined &&
        lessonsMinutes &&
        packages && (
          <div className='desktop:translate-x-[-68px]'>
            <p className='font-bold text-2xl text-offBlack text-center mb-4 desktop:mb-[18px] desktop:translate-x-[68px]'>
              Select a package
            </p>
            <LessonPackageSelector
              lessonMinutes={lessonsMinutes[selectedLessonMinutesIndex]}
              selectedPackageIndex={selectedPackageIndex}
              packages={packages}
              onChange={handlePackageIndexChange}
            />
          </div>
        )}

      <div className='flex justify-center'>
        <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
          <CustomCurveButton
            text='Continue'
            onClick={onNextClicked}
            icon={blackArrow}
            disabled={disableContinueBtn}
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <GoBackTextButton
          size='small'
          text='Back to guardian/parent details'
          onClick={onPreviousClicked}
        />
      </div>
    </div>
  );
};

export default RegistrationForm4;
