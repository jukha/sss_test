import { useLayoutEffect } from 'react';
import { useRegistrationForm } from '@/context/registration-form.context';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import LessonsTypeSelector from '../components/LessonTypeSelector';
import { LessonType } from '@/entities/lesson-package.entity';
import CustomCurveButton from '../../../shared/CustomCurveButton';
import { blackArrow } from '@/assets';
import GoBackTextButton from '../../../shared/GoBackTextButton';
import AlertBox from '../../../shared/AlertBox';
import { generateLessonPackageSelectionOptions } from '@/app/(registration)/registration/logic/utils/lesson-package/lesson-packages-selection';
import { extractLocationPackages } from '@/app/(registration)/registration/logic/utils/lesson-package/extract-location-data';
import { extractStudentAges } from '@/app/(registration)/registration/logic/utils/lesson-package/extract-students-data';
import { generateLessonTypesForSelect } from '@/app/(registration)/registration/logic/utils/lesson-package/lesson-types';

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
};

const RegistrationForm4_1: React.FC<Props> = ({ onNextClicked, onPreviousClicked }) => {
  const {
    registrationForm,
    setRegistrationFormField,
    setRegistrationStep,
    previousRegistrationStep,
    registrationErrors,
    registrationErrorsText,
  } = useRegistrationForm();
  const { data } = useLocationsAndPricing();
  const { zip, lessonType, lessonTime } = registrationForm ?? {};

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

  const onlyOneLessonTypeOption = packageSelectionOptions.lessonTypes.length === 1;

  const handleLessonTypeChange = (lessonType: string) => {
    setRegistrationFormField('lessonType', lessonType as LessonType);
    setRegistrationFormField('lessonTime', null);
    setRegistrationFormField('packageSize', null);
  };

  useLayoutEffect(() => {
    if (!onlyOneLessonTypeOption) return;

    setRegistrationFormField('lessonType', packageSelectionOptions.lessonTypes[0]);

    if (previousRegistrationStep === RegistrationStepEnum.Step4_2) {
      setRegistrationStep(RegistrationStepEnum.Step3);
    } else {
      setRegistrationStep(RegistrationStepEnum.Step4_2);
    }
  }, [onlyOneLessonTypeOption]);

  return (
    <div className='flex flex-col gap-[34px]'>
      <GoBackTextButton text='Swimming Lessons' onClick={onPreviousClicked} />

      {packageSelectionOptions.lessonTypes.length > 1 && (
        <div className='relative'>
          {registrationErrors?.lessonType && (
            <div className='absolute top-0 left-0 w-full h-full scale-110 border-[2px] bg-[#f8f2f26d] border-red rounded-lg' />
          )}
          <LessonsTypeSelector
            cardsList={generateLessonTypesForSelect(packageSelectionOptions.lessonTypes)}
            selectedValue={lessonType as LessonType | undefined}
            radioGroupName='lessons_type'
            onChange={handleLessonTypeChange}
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
        <GoBackTextButton size='small' text='Back to guardian/parent details' onClick={onPreviousClicked} />
      </div>
    </div>
  );
};

export default RegistrationForm4_1;
