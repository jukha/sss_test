'use client';

import { blackArrow, minus, personIcon, plus } from '@/assets';
import CustomButton from '@/components/CustomButton';
import CustomCurveButton from '@/components/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import CustomTextArea from '@/components/CustomTextArea';
import DropDownSelect from '@/components/DropDownSelect';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { DeepPartial, useForm } from 'react-hook-form';
import GoBackTextButton from '../../shared/GoBackTextButton';
import { useRegistrationForm } from '@/context/registration-form.context';

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
  onNext?: (data: FormValues, step: RegistrationStepEnum) => void;
};

type Student = {
  name: string;
  age: { index: number; text: string } | null;
};

type FormValues = {
  students: Student[];
  additionalInfo: string;
  guardOfStudents: null | boolean;
};

const formDefaultValues: DeepPartial<FormValues> = {
  students: [],
  additionalInfo: '',
  guardOfStudents: null,
};

const RegistrationForm2: React.FC<Props> = ({}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: formDefaultValues });
  const { setRegistrationStep } = useRegistrationForm();
  const [countOfStudents, setCountOfStudents] = useState(1);
  const [howManyButtonsShown, setHowManyButtonsShown] = useState<3 | 6>(3);
  const [isTextAreaShown, setIsTextAreaShown] = useState(false);

  const students = watch('students') || [];
  const guardOfStudents = watch('guardOfStudents');

  const onSubmit = () => {};

  useEffect(() => {
    const currentStudents = getValues('students') || [];
    const newStudent = { name: '', age: null };
    const newStudents = Array.from(
      { length: countOfStudents },
      (_, i) => currentStudents[i] || newStudent
    );
    setValue('students', newStudents);
  }, [countOfStudents]);

  return (
    <form
      className='flex flex-col gap-[30px] items-center w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <GoBackTextButton
        text='Student Details'
        onClick={() => setRegistrationStep(RegistrationStepEnum.Step1)}
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
              isActive={countOfStudents === i + 1}
              onClick={() => setCountOfStudents(i + 1)}
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
        {Array.from({ length: countOfStudents }).map((_, i) => (
          <div key={i} className='flex flex-col gap-[14px] desktop:flex-row'>
            <CustomInput
              text='Student Name*'
              {...register(`students.${i}.name`)}
              icon={personIcon}
              className='grow'
            />
            <DropDownSelect
              text='Student Age*'
              choices={ageChoices}
              value={students[i]?.age || undefined}
              onChange={(v) => setValue(`students.${i}.age`, v)}
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
          className='text-start flex-row-reverse p-[16px] desktop:w-[90%] !bg-extraLightBlue'
          textClassName='text-sm leading-[120%]'
        />

        {isTextAreaShown && (
          <CustomTextArea
            {...register('additionalInfo')}
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
              errors.guardOfStudents ? 'opacity-100' : 'opacity-0'
            )}
          >
            {errors.guardOfStudents?.message || 'error'}
          </span>
        </div>

        <div className='flex gap-[16px]'>
          <CustomButton
            text='Yes'
            width='50%'
            onClick={() => setValue('guardOfStudents', true)}
            isActive={guardOfStudents === true}
          />
          <CustomButton
            text='No'
            width='50%'
            onClick={() => setValue('guardOfStudents', false)}
            isActive={guardOfStudents === false}
          />
        </div>
      </div>

      <CustomCurveButton
        type='submit'
        disabled={Object.keys(errors).length > 0}
        text='Continue'
        icon={blackArrow}
      />

      <GoBackTextButton
        size='small'
        text='Back to metro areas selection'
        onClick={() => setRegistrationStep(RegistrationStepEnum.Step1)}
      />
    </form>
  );
};

export default RegistrationForm2;
