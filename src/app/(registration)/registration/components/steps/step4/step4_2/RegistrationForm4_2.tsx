import React, { useLayoutEffect, useState } from 'react';

import CustomCurveButton from '@/components/CustomCurveButton';
import { blackArrow } from '@/assets';
import GoBackTextButton from '../../../shared/GoBackTextButton';
import RecommendedTime from './../components/RecommendedTime';
import LessonMinutesSelector from './../components/LessonMinutesSelector';
import LessonPackageSelector from './../components/LessonPackageSelector';
import { useRegistrationForm } from '@/context/registration-form.context';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';
import { LessonPackageEntity, LessonType } from '@/entities/lesson-package.entity';
import AlertBox from '../../../shared/AlertBox';
import {
  extractStudentAges,
  extractStudentNames,
} from '@/app/(registration)/registration/logic/utils/lesson-package/extract-students-data';
import { generateLessonPackageSelectionOptions } from '@/app/(registration)/registration/logic/utils/lesson-package/lesson-packages-selection';
import { extractLocationPackages } from '@/app/(registration)/registration/logic/utils/lesson-package/extract-location-data';
import { generatePackagesForDisplay } from '@/app/(registration)/registration/logic/utils/lesson-package/format-packages';
import { byLessonQtyDesc } from '@/app/(registration)/registration/logic/utils/lesson-package/sort-packages';

const getStudentFirstName = (name: string) => {
  return name.split(' ')[0];
};

const getLessonMinutesSelectorTitle = (studentsNames: string[]) => {
  if (studentsNames.length === 1) {
    return `How long would you like each swimming lesson to last for ${studentsNames[0]}`;
  }

  const namesWithoutLast = studentsNames.slice(0, studentsNames.length - 1);
  const lastName = [...studentsNames].splice(-1)[0];

  return `Select how much lesson time you want ${namesWithoutLast.join(', ')} and ${lastName}`;
};

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
};

const RegistrationForm4_2: React.FC<Props> = ({ onNextClicked, onPreviousClicked }) => {
  const { registrationForm, setRegistrationFormField, registrationErrors, registrationErrorsText } =
    useRegistrationForm();

  const { zip, lessonType, lessonTime, packageSize } = registrationForm ?? {};
  const { data } = useLocationsAndPricing();
  const studentsNames = extractStudentNames(registrationForm).map(getStudentFirstName);
  const [selectedPackage, setSelectedPackage] = useState<LessonPackageEntity>();

  const packageSelectionOptions = generateLessonPackageSelectionOptions({
    packages: extractLocationPackages({
      zip,
      zipCodesServiced: data?.zipCodesServiced,
      metroAreas: data?.metroAreas,
      pricing: data?.pricing,
    }),
    studentAges: extractStudentAges(registrationForm),
    selectedLessonType: lessonType as LessonType,
    selectedLessonLength: lessonTime,
  });

  const onlyOneLessonLengthOption = packageSelectionOptions.lessonLengths.length === 1;

  const handleLessonPackageIdChange = (id?: number) => {
    setSelectedPackage(packageSelectionOptions.packages.find((pack) => pack.id === id));
  };

  const handleLessonLengthChange = (minutes: number) => {
    setRegistrationFormField('lessonTime', minutes);
    setSelectedPackage(undefined);
  };

  useLayoutEffect(() => {
    if (onlyOneLessonLengthOption) {
      setRegistrationFormField('lessonTime', packageSelectionOptions.lessonLengths[0]);
    } else {
      setRegistrationFormField('lessonTime', lessonTime ?? null);
    }

    if (packageSize) {
      setSelectedPackage(packageSelectionOptions.packages.find((pack) => pack.lessonQty === packageSize));
    }
  }, []);

  useLayoutEffect(() => {
    setRegistrationFormField('packageSize', selectedPackage?.lessonQty ?? null);
  }, [selectedPackage?.id]);

  return (
    <div className='flex flex-col gap-[34px]'>
      <GoBackTextButton text='Swimming Lessons' onClick={onPreviousClicked} />

      {Boolean(studentsNames && packageSelectionOptions.recommendedLessonLength && lessonType === 'private') && (
        <RecommendedTime
          timeInMinutes={packageSelectionOptions.recommendedLessonLength.toString()}
          studentsNames={studentsNames}
        />
      )}

      {Boolean(studentsNames.length) && (
        <p className='font-bold font-secondary leading-[125%] text-[19px] text-center text-offBlack desktop:mt-[-18px] desktop:text-[24px]'>
          {getLessonMinutesSelectorTitle(studentsNames)}
        </p>
      )}

      {lessonType && packageSelectionOptions.lessonLengths.length > 1 && (
        <div className='relative'>
          {registrationErrors?.lessonTime && (
            <div className='absolute top-0 left-0 w-full h-full scale-110 border-[2px] bg-[#f8f2f26d] border-red rounded-lg' />
          )}
          <LessonMinutesSelector
            selectedValue={lessonTime}
            timesInMinutes={packageSelectionOptions.lessonLengths}
            recommended={packageSelectionOptions.recommendedLessonLength}
            onChange={handleLessonLengthChange}
          />
        </div>
      )}

      {lessonTime && packageSelectionOptions.packages && (
        <div className='desktop:translate-x-[-68px] relative'>
          <p className='font-bold text-2xl text-offBlack text-center mb-4 desktop:mb-[18px] desktop:translate-x-[68px]'>
            Select a package
          </p>
          <LessonPackageSelector
            lessonMinutes={lessonTime}
            selectedPackageId={selectedPackage?.id}
            packages={generatePackagesForDisplay(packageSelectionOptions.packages.toSorted(byLessonQtyDesc))}
            error={registrationErrors?.packageSize}
            onChange={handleLessonPackageIdChange}
          />
        </div>
      )}

      {registrationErrorsText && <AlertBox type='error' text={registrationErrorsText} />}

      <div className='flex justify-center'>
        <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
          <CustomCurveButton text='Continue' onClick={onNextClicked} icon={blackArrow} />
        </div>
      </div>

      <div className='flex justify-center'>
        <GoBackTextButton
          size='small'
          text={
            packageSelectionOptions.lessonTypes.length > 1
              ? 'Back to lesson type selection'
              : 'Back to guardian/parent details'
          }
          onClick={onPreviousClicked}
        />
      </div>
    </div>
  );
};

export default RegistrationForm4_2;
