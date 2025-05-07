'use client';

import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import DropDownSelect from '@/components/DropDownSelect';
import GoBackTextButton from '@/components/GoBackTextButton';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { registrationFormStore } from '@/stores/registration-form.store';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

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
};

const RegistrationForm2: React.FC<Props> = ({}) => {
  const { register, handleSubmit, setValue, getValues, watch } =
    useForm<FormValues>();
  const { setRegistrationStep } = registrationFormStore;
  const [countOfStudents, setCountOfStudents] = useState(1);
  const [howManyButtonsShown, setHowManyButtonsShown] = useState<3 | 6>(3);
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

  const students = watch('students');
  console.log(students);

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
        <span>Select how many students need swim lessons</span>
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

      <div className='flex flex-col gap-[24px] w-full'>
        {Array.from({ length: countOfStudents }).map((_, i) => {
          const students = getValues('students') || [];
          const ageValue = students[i]?.age || undefined;

          return (
            <div key={i} className='flex gap-[14px] items-end'>
              <CustomInput
                text='Student Name*'
                {...register(`students.${i}.name`)}
              />

              <DropDownSelect
                text='Student Age*'
                choices={ageChoices}
                value={ageValue}
                onChange={(v) => setValue(`students.${i}.age`, v)}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default RegistrationForm2;
