'use client';

import { blackArrow, minus, personIcon, plus } from '@/assets';
import CustomButton from '../../shared/CustomButton';
import CustomCurveButton from '../../shared/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import CustomTextArea from '../../shared/CustomTextArea';
import DropDownSelect from '../../shared/DropDownSelect';
import AlertBox from '../../shared/AlertBox';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import GoBackTextButton from '../../shared/GoBackTextButton';
import { useRegistrationForm } from '@/context/registration-form.context';
import { BuildOnFieldFocusLostHandlerFunction } from '../../../types';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { extractStudentAges } from '../../../logic/utils/lesson-package/extract-students-data';
import { hasStudentsAboveThreeYearsOld } from '../../../logic/utils/lesson-package/has-students-above-3-years-old';

const ageChoices = [
  '6-8 Months',
  '10-12 Months',
  '12-18 Months',
  '19-23 Months',
  '2 Years',
  '2.5 Years',
  '3 Years',
  '3.5 Years',
  '4-7 Years',
  '8-12 Years',
  '13-17 Years',
  '18+ Years',
];

type Props = {
  onNextClicked: () => Promise<void>;
  onPreviousClicked: () => Promise<void>;
  buildOnFieldFocusLostHandler: BuildOnFieldFocusLostHandlerFunction;
};

const RegistrationForm2 = ({ onNextClicked, onPreviousClicked, buildOnFieldFocusLostHandler }: Props) => {
  const {
    registrationForm,
    setRegistrationFormField,
    registrationErrors,
    registrationErrorsText,
  } = useRegistrationForm();

  const clearRestStudentsData = (studentsCount: number) => {
    const allStudentsKeys = [1, 2, 3, 4, 5, 6];
    const currentStudentsKeys = allStudentsKeys.slice(studentsCount);

    currentStudentsKeys.forEach((studentKey) => {
      // @ts-expect-error Dynamic field name construction
      setRegistrationFormField(`studentName${studentKey}`, null);
      // @ts-expect-error Dynamic field name construction
      setRegistrationFormField(`studentAge${studentKey}`, null);
    });
  };

  const studentsCount = registrationForm?.studentsCount || 0;

  useEffect(() => {
    clearRestStudentsData(studentsCount);

    // if (studentsCount == 0) {
    //   setRegistrationFormField('studentsCount', 1);
    // }
  }, [studentsCount]);

  const studentsAges = extractStudentAges(registrationForm)

  useEffect(() => {
    setRegistrationFormField('hasStudentsAboveThreeYearsOld', hasStudentsAboveThreeYearsOld(studentsAges))
  }, [JSON.stringify(studentsAges)])

  const [howManyButtonsShown, setHowManyButtonsShown] = useState<3 | 6>(3);

  const [isTextAreaShown, setIsTextAreaShown] = useState(
    Boolean(registrationForm?.questionsOfInformationWeShouldNowAboutTheStudents)
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextClicked();
  };

  return (
    <form className='flex flex-col gap-[30px] items-center w-full' onSubmit={onSubmit}>
      <GoBackTextButton text='Student Details' onClick={onPreviousClicked} />

      <div className='flex flex-col w-full gap-[16px]'>
        <div className='flex justify-between w-full'>
          <span className='font-medium'>Select how many students need swim lessons</span>
          <span
            className={clsx(
              'text-red',
              registrationErrors?.studentsCount ? 'opacity-100' : 'opacity-0'
            )}
          >
            {registrationErrors?.studentsCount || 'error'}
          </span>
        </div>

        <div className='flex gap-[8px] w-full flex-wrap'>
          {Array.from({ length: howManyButtonsShown }).map((_, i) => (
            <CustomButton
              key={i + 1}
              text={i + 1 + ' Student'}
              isActive={studentsCount === i + 1}
              onClick={() => {
                setRegistrationFormField('studentsCount', i + 1);
              }}
              className='grow'
            />
          ))}

          <CustomButton
            text={howManyButtonsShown === 6 ? 'Less' : 'More'}
            onClick={() => setHowManyButtonsShown((prev) => (prev === 3 ? 6 : 3))}
            className=' grow'
          />
        </div>
      </div>

      <div className='flex flex-col gap-[32px] w-full'>
        {Array.from({ length: studentsCount }).map((_, i) => {
          const studentNameKey = `studentName${i + 1}` as keyof RegistrationForm;
          const studentNameValue = (registrationForm?.[studentNameKey] ?? '') as string;
          const studentAgeKey = `studentAge${i + 1}` as keyof RegistrationForm;
          const studentAgeValue = (registrationForm?.[studentAgeKey] ?? '') as string;

          return (
            <div key={i} className='flex flex-col gap-[14px] desktop:flex-row'>
              <CustomInput
                text='Student Name*'
                name={`studentName${i + 1}`}
                error={registrationErrors?.[studentNameKey]}
                value={studentNameValue}
                onChange={(e) => {
                  setRegistrationFormField(studentNameKey, e.target.value);
                }}
                onBlur={buildOnFieldFocusLostHandler(studentNameKey)}
                icon={personIcon}
                className='tablet:w-auto'
              />
              <DropDownSelect
                text='Student Age*'
                choices={ageChoices.map((c, i) => ({ index: i, text: c }))}
                error={registrationErrors?.[studentAgeKey]}
                value={{ text: studentAgeValue, index: i }}
                onChange={(choice) => {
                  setRegistrationFormField(studentAgeKey, choice.text);
                }}
                className='tablet:max-w-[40%]'
                dropdownWrapperClassName='!top-[102%]'
              />
            </div>
          );
        })}
      </div>

      <div className='w-full flex flex-col gap-[16px] pt-[16px] border-t-[1px] border-black'>
        <CustomButton
          text={
            isTextAreaShown
              ? 'Remove additional information about the students'
              : 'Additional information about the students (goals, special needs, etc...)'
          }
          onClick={() => setIsTextAreaShown((prev) => !prev)}
          icon={isTextAreaShown ? minus : plus}
          className='text-start flex-row-reverse p-[16px] desktop:w-[90%] !bg-lightBlue !text-offBlack'
          textClassName='text-sm leading-[120%]'
        />

        {isTextAreaShown && (
          <CustomTextArea
            value={registrationForm?.questionsOfInformationWeShouldNowAboutTheStudents || ''}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setRegistrationFormField('questionsOfInformationWeShouldNowAboutTheStudents', e.target.value);
            }}
            onBlur={buildOnFieldFocusLostHandler('questionsOfInformationWeShouldNowAboutTheStudents')}
            placeholder='Tell us about your goals for your children! Any special needs, medical issues, or special information we should know?'
            rows={5}
          />
        )}
      </div>

      <div className='flex flex-col gap-[10px] w-full'>
        <div className='flex justify-between w-full'>
          <span className='font-medium'>Are you the Parent or Guardian of all of the students?* </span>
          <span
            className={clsx(
              'text-red',
              registrationErrors?.isCustomerAParentGuardianOfAll ? 'opacity-100' : 'opacity-0'
            )}
          >
            {registrationErrors?.isCustomerAParentGuardianOfAll || 'error'}
          </span>
        </div>

        <div className='flex gap-[16px]'>
          <CustomButton
            text='Yes'
            width='50%'
            onClick={() => setRegistrationFormField('isCustomerAParentGuardianOfAll', true)}
            isActive={registrationForm?.isCustomerAParentGuardianOfAll === true}
          />
          <CustomButton
            text='No'
            width='50%'
            onClick={() => setRegistrationFormField('isCustomerAParentGuardianOfAll', false)}
            isActive={registrationForm?.isCustomerAParentGuardianOfAll === false}
          />
        </div>
      </div>

      {registrationErrorsText && <AlertBox type='error' text={registrationErrorsText} />}

      <CustomCurveButton type='submit' text='Continue' icon={blackArrow} />
      <GoBackTextButton size='small' text='Back to metro areas selection' onClick={onPreviousClicked} />
    </form>
  );
};

export default RegistrationForm2;
