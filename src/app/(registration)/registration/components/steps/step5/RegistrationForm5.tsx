import {
  blackArrow,
  calendarAlert,
  calendarDate,
  calendarTwo,
  lock,
} from '@/assets';
import CustomButton from '@/components/CustomButton';
import { CustomCheckbox } from '@/components/CustomCheckbox';
import CustomCurveButton from '@/components/CustomCurveButton';
import CustomDateInput from '@/components/CustomDatePicker';
import FilteredImage from '@/components/FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import clsx from 'clsx';
import { DeepPartial, useForm } from 'react-hook-form';
import GoBackTextButton from '../../shared/GoBackTextButton';
import { useRegistrationForm } from '@/context/registration-form.context';

type Props = {
  onNext?: (data: FormValues, step: RegistrationStepEnum) => void;
};

enum WhenToStartEnum {
  ASAP,
  TwoWeeks,
  Specific,
}

type FormValues = {
  lessonsCount: number | null;
  whenToStart: WhenToStartEnum | null;
  specificDateToStart: string | null;
};

const formDefaultValues: DeepPartial<FormValues> = {
  lessonsCount: null,
  whenToStart: null,
  specificDateToStart: null,
};

const RegistrationForm5: React.FC<Props> = ({ onNext }) => {
  const {
    // register,
    handleSubmit,
    setValue,
    // getValues,
    watch,
    // formState: { errors },
  } = useForm<FormValues>({ defaultValues: formDefaultValues });
  const { setRegistrationStep } = useRegistrationForm();

  const onSubmit = async (data: FormValues) => {
    onNext?.(data, RegistrationStepEnum.Step5);
  };

  const lessonsCount = watch('lessonsCount') || 0;
  const whenToStart = watch('whenToStart');
  const specificDateToStart = watch('specificDateToStart');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex  flex-col gap-[30px] items-center w-full'
    >
      <GoBackTextButton
        text='Schedule'
        onClick={() => setRegistrationStep(RegistrationStepEnum.Step4)}
      />

      <div className='flex flex-col gap-[8px] w-full'>
        <span>How many lessons would like per week*</span>
        <div className='flex gap-[6px] items-center'>
          {lessonsCount < 3 && (
            <div className={clsx('text-extraSmall text-darkGray')}>
              Pick 3 or more lessons per week to
            </div>
          )}

          <div
            className={clsx(
              'flex gap-[8px] px-[16px] py-[4px] rounded-[16px] bg-gray shrink',
              lessonsCount < 3 ? 'bg-darkGray' : 'bg-yellow'
            )}
          >
            <FilteredImage
              src={lock}
              filter={
                lessonsCount < 3
                  ? FilterClassEnum.DarkGray
                  : FilterClassEnum.Orange
              }
            />
            <span
              className={clsx(
                'text-extraSmall font-[700]',
                lessonsCount < 3 ? 'text-darkGray' : 'text-orange'
              )}
            >
              LEARN TO SWIM GUARANTEED
            </span>
          </div>
        </div>

        <div className='flex gap-[10px] mt-[8px]'>
          {Array.from({ length: 7 }).map((_, i) => (
            <CustomButton
              key={i}
              text={(i + 1).toString()}
              onClick={() => setValue('lessonsCount', i + 1)}
              isActive={lessonsCount === i + 1}
              className='grow'
            />
          ))}
        </div>
      </div>
      {lessonsCount >= 3 && (
        <>
          <div className='flex flex-col gap-[8px] w-full'>
            <span>Select when would you like to begin*</span>

            <div className='grid grid-cols-3 gap-[8px]'>
              <CustomButton
                text='ASAP'
                onClick={() => setValue('whenToStart', WhenToStartEnum.ASAP)}
                isActive={whenToStart === WhenToStartEnum.ASAP}
                icon={calendarAlert}
                className='flex-col-reverse !justify-end'
              />
              <CustomButton
                text='Within two weeks'
                onClick={() =>
                  setValue('whenToStart', WhenToStartEnum.TwoWeeks)
                }
                isActive={whenToStart === WhenToStartEnum.TwoWeeks}
                icon={calendarTwo}
                className='flex-col-reverse justify-end'
              />
              <CustomButton
                text='Specific date'
                onClick={() =>
                  setValue('whenToStart', WhenToStartEnum.Specific)
                }
                isActive={whenToStart === WhenToStartEnum.Specific}
                icon={calendarDate}
                className='flex-col-reverse justify-end'
              />
            </div>
          </div>

          {whenToStart === WhenToStartEnum.Specific && (
            <CustomDateInput
              placeholder='Choose Start Date'
              value={specificDateToStart || undefined}
              onChange={(e) => setValue('specificDateToStart', e.target.value)}
            />
          )}

          <div className='flex gap-[16px] self-start'>
            <CustomCheckbox text='Weekdays' />
            <CustomCheckbox text='Weekends' />
            <CustomCheckbox text='All' />
          </div>
        </>
      )}

      <CustomCurveButton type='submit' text='Continue' icon={blackArrow} />
      <GoBackTextButton
        text='Back to package selection'
        onClick={() => setRegistrationStep(RegistrationStepEnum.Step4)}
        size='small'
      />
    </form>
  );
};

export default RegistrationForm5;
