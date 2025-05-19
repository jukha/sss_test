'use client';

import { blackArrow, minus, personIcon, plus } from '@/assets';
import CustomButton from '@/components/CustomButton';
import CustomCurveButton from '@/components/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import CustomTextArea from '@/components/CustomTextArea';
import DropDownSelect from '@/components/DropDownSelect';
import AlertBox from '../../shared/AlertBox';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import GoBackTextButton from '../../shared/GoBackTextButton';
import { useRegistrationForm } from '@/context/registration-form.context';
import {
  BuildOnFieldChangedHandlerFunction,
  BuildOnFieldChangedEventHandler,
  BuildOnFieldChangedEventHandler2,
  BuildOnFieldFocusLostHandlerFunction
} from '../../../types';

const ageChoices = [
  { index: 0, text: '6-8 Months' },
  { index: 1, text: '10-12 Months' },
  { index: 2, text: '12-18 Months' },
  { index: 3, text: '19-23 Months' },
  { index: 4, text: '2 Years' },
  { index: 5, text: '2.5 Years' },
  { index: 6, text: '3 Years' },
  { index: 7, text: '3.5 Years' },
  { index: 8, text: '4-7 Years' },
  { index: 9, text: '8-12 Years' },
  { index: 10, text: '13-17 Years' },
  { index: 11, text: '18+ Years' },
];

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
  buildOnFieldChangedHandler: BuildOnFieldChangedHandlerFunction;
  buildOnFieldChangedEventHandler: BuildOnFieldChangedEventHandler;
  buildOnFieldChangedEventHandler2: BuildOnFieldChangedEventHandler2;
  buildOnFieldFocusLostHandler: BuildOnFieldFocusLostHandlerFunction;
};

const RegistrationForm2: React.FC<Props> = ({
  onNextClicked,
  onPreviousClicked,
  buildOnFieldChangedHandler,
  buildOnFieldChangedEventHandler,
  buildOnFieldChangedEventHandler2,
  buildOnFieldFocusLostHandler,
}) => {

  const {
    registrationForm,
    registrationErrors,
    registrationErrorsText
  } = useRegistrationForm();

  const getStudentsCount = () => {
    return registrationForm?.studentsCount || 0;
  };

  const setStudentsCount = buildOnFieldChangedHandler('studentsCount');
  useEffect(() => {
    if (getStudentsCount() == 0) {
      setStudentsCount(1);
    }
  }, []);

  const setIsCustomerAParentGuardianOfAll = buildOnFieldChangedHandler('isCustomerAParentGuardianOfAll');
  const setQuestionsOfInformationWeShouldNowAboutTheStudents = buildOnFieldChangedEventHandler2('questionsOfInformationWeShouldNowAboutTheStudents');

  const setStudentNameHandlers: ((e: React.ChangeEvent<HTMLInputElement>) => void)[] = [];
  for (let i = 1; i <= getStudentsCount(); i++) {
    // @ts-expect-error Dynamic field name construction
    setStudentNameHandlers[i] = buildOnFieldChangedEventHandler(`studentName${i}`);
  }

  const setStudentAgeHandlers: ((e: { text: string }) => void)[] = [];
  for (let i = 1; i <= getStudentsCount(); i++) {
    // @ts-expect-error Dynamic field name construction
    const handler = buildOnFieldChangedHandler(`studentAge${i}`);
    setStudentAgeHandlers[i] = ({ text }) => {
      handler(text);
    };
  }

  const [howManyButtonsShown, setHowManyButtonsShown] = useState<3 | 6>(3);
  const [isTextAreaShown, setIsTextAreaShown] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextClicked();
  };

  return (
    <form
      className='flex flex-col gap-[30px] items-center w-full'
      onSubmit={onSubmit}
    >
      <GoBackTextButton
        text='Student Details'
        onClick={onPreviousClicked}
      />

      <div className='flex flex-col w-full gap-[16px]'>
        <span className='font-medium'>
          Select how many students need swim lessons
        </span>
        <div className='flex gap-[8px] w-full flex-wrap'>
          {Array.from({ length: howManyButtonsShown }).map((_, i) => (
            <CustomButton
              key={i + 1}
              text={i + 1 + ' Student'}
              isActive={getStudentsCount() === i + 1}
              onClick={() => setStudentsCount(i + 1)}
              className='grow'
            />
          ))}

          <CustomButton
            text={howManyButtonsShown === 6 ? 'Less' : 'More'}
            onClick={() =>
              setHowManyButtonsShown((prev) => (prev === 3 ? 6 : 3))
            }
            className=' grow'
          />
        </div>
      </div>

      <div className='flex flex-col gap-[32px] w-full'>
        {Array.from({ length: getStudentsCount() }).map((_, i) => (
          <div key={i} className='flex flex-col gap-[14px] desktop:flex-row'>
            <CustomInput
              text='Student Name*'
              name={`studentName${i+1}`}
              // @ts-expect-error Dynamic field name construction
              error={registrationErrors?.[`studentName${i+1}`]}
              // @ts-expect-error Dynamic field name construction
              value={registrationForm?.[`studentName${i+1}`] || ''}
              onChange={setStudentNameHandlers[i+1]}
              // @ts-expect-error Dynamic field name construction
              onBlur={buildOnFieldFocusLostHandler(`studentName${i+1}`)}
              icon={personIcon}
              className='grow'
            />
            <DropDownSelect
              text='Student Age*'
              choices={ageChoices}
              // @ts-expect-error Dynamic field name construction
              error={registrationErrors?.[`studentAge${i+1}`]}
              // @ts-expect-error Dynamic field name construction
              value={{text: registrationForm?.[`studentAge${i+1}`] || ''}}
              onChange={setStudentAgeHandlers[i+1]}
              className='!w-[140px] shrink-0'
            />
          </div>
        ))}
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
          className='text-start flex-row-reverse p-[16px] desktop:w-[90%] !bg-lightBlue'
          textClassName='text-sm leading-[120%]'
        />

        {isTextAreaShown && (
          <CustomTextArea
            value={registrationForm?.questionsOfInformationWeShouldNowAboutTheStudents || ''}
            onChange={setQuestionsOfInformationWeShouldNowAboutTheStudents}
            onBlur={buildOnFieldFocusLostHandler('questionsOfInformationWeShouldNowAboutTheStudents')}
            placeholder='Tell us about your goals for your children! Any special needs, medical issues, or special information we should know?'
            rows={5}
          />
        )}
      </div>

      <div className='flex flex-col gap-[10px] w-full'>
        <div className='flex justify-between w-full'>
          <span className='font-medium'>
            Are you the Parent or Guardian of all of the students?*{' '}
          </span>
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
            onClick={() => setIsCustomerAParentGuardianOfAll(true)}
            isActive={registrationForm?.isCustomerAParentGuardianOfAll === true}
          />
          <CustomButton
            text='No'
            width='50%'
            onClick={() => setIsCustomerAParentGuardianOfAll(false)}
            isActive={registrationForm?.isCustomerAParentGuardianOfAll === false}
          />
        </div>
      </div>

      {registrationErrorsText && (
        <AlertBox
          type='error'
          text={registrationErrorsText}
        />
      )}

      <CustomCurveButton
        type='submit'
        text='Continue'
        icon={blackArrow}
      />

      <GoBackTextButton
        size='small'
        text='Back to metro areas selection'
        onClick={onPreviousClicked}
      />
    </form>
  );
};

export default RegistrationForm2;
