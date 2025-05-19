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
import clsx from 'clsx';
import { DeepPartial, useForm } from 'react-hook-form';
import GoBackTextButton from '../../shared/GoBackTextButton';
// import { useRegistrationForm } from '@/context/registration-form.context';
import AlertBox from '../../shared/AlertBox';
import {
  ALL_DAYS_ARRAY,
  DaysEnum,
  WEEKDAYS_ARRAY,
  WEEKENDS_ARRAY,
} from '@/enum/days.enum';
import { ALL_TIMES_ARRAY, TimesEnum } from '@/enum/times.enum';
import { mapAllTo } from '@/helpers/map-all-to';

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
};

enum WhenToStartEnum {
  ASAP,
  TwoWeeks,
  Specific,
}

export const DEFAULT_SELECTED_DAYS = mapAllTo(ALL_DAYS_ARRAY, false);
export const ALL_DAYS_SELECTED = mapAllTo(ALL_DAYS_ARRAY, true);
export const WEEKDAYS_SELECTED = mapAllTo(WEEKDAYS_ARRAY, true);
export const WEEKENDS_SELECTED = mapAllTo(WEEKENDS_ARRAY, true);

export const DEFAULT_SELECTED_TIMES = mapAllTo(ALL_TIMES_ARRAY, false);
export const ALL_TIMES_SELECTED = mapAllTo(ALL_TIMES_ARRAY, true);

type FormValues = {
  lessonsCount: number | null;
  whenToStart: WhenToStartEnum | null;
  specificDateToStart: string | null;
  selectedDays: Record<DaysEnum, boolean>;
  selectedWeekdayTimes: Record<TimesEnum, boolean>;
  selectedWeekendTimes: Record<TimesEnum, boolean>;
};

const formDefaultValues: DeepPartial<FormValues> = {
  lessonsCount: null,
  whenToStart: null,
  specificDateToStart: null,
  selectedDays: DEFAULT_SELECTED_DAYS,
  selectedWeekdayTimes: DEFAULT_SELECTED_TIMES,
  selectedWeekendTimes: DEFAULT_SELECTED_TIMES,
};

const RegistrationForm5: React.FC<Props> = ({ onNextClicked, onPreviousClicked }) => {
  const {
    // register,
    handleSubmit,
    setValue,
    // getValues,
    watch,
    // formState: { errors },
  } = useForm<FormValues>({ defaultValues: formDefaultValues });

  const onSubmit = async () => {
    onNextClicked();
  };

  const lessonsCount = watch('lessonsCount') || 0;
  const whenToStart = watch('whenToStart');
  const specificDateToStart = watch('specificDateToStart');
  const selectedDays = watch('selectedDays');
  const selectedWeekdayTimes = watch('selectedWeekdayTimes');
  const selectedWeekendTimes = watch('selectedWeekendTimes');

  const selectDays = (daysObject: Partial<Record<DaysEnum, boolean>>) => {
    const updated = {
      ...selectedDays,
      ...daysObject,
    };

    setValue('selectedDays', updated);
  };

  const selectWeekdayTimes = (
    timesObject: Partial<Record<TimesEnum, boolean>>
  ) => {
    const updated = {
      ...selectedWeekdayTimes,
      ...timesObject,
    };

    setValue('selectedWeekdayTimes', updated);
  };

  const selectWeekendTimes = (
    timesObject: Partial<Record<TimesEnum, boolean>>
  ) => {
    const updated = {
      ...selectedWeekendTimes,
      ...timesObject,
    };

    setValue('selectedWeekendTimes', updated);
  };

  const allWeekdaysSelected = Object.keys(WEEKDAYS_SELECTED).every(
    (day) => selectedDays[day as DaysEnum] === true
  );

  const allWeekendDaysSelected = Object.keys(WEEKENDS_SELECTED).every(
    (day) => selectedDays[day as DaysEnum] === true
  );

  const allDaysSelected = allWeekdaysSelected && allWeekendDaysSelected;

  const someWeekdaysSelected = Object.keys(WEEKDAYS_SELECTED).some(
    (day) => selectedDays[day as DaysEnum] === true
  );

  const someWeekendDaysSelected = Object.keys(WEEKENDS_SELECTED).some(
    (day) => selectedDays[day as DaysEnum] === true
  );

  const allTimesInWeekdaysSelected = Object.keys(ALL_TIMES_SELECTED).every(
    (time) => selectedWeekdayTimes[time as TimesEnum] === true
  );

  const allTimesInWeekendDaysSelected = Object.keys(ALL_TIMES_SELECTED).every(
    (time) => selectedWeekendTimes[time as TimesEnum] === true
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-[30px] items-center w-full'
    >
      <GoBackTextButton
        text='Schedule'
        onClick={onPreviousClicked}
      />

      <div className='flex flex-col gap-[8px] w-full'>
        <span>How many lessons would like per week*</span>
        <div className='flex gap-[6px] items-center'>
          {lessonsCount < 3 && (
            <div className={clsx('text-extraSmall text-gray')}>
              Pick 3 or more lessons per week to
            </div>
          )}

          <div
            className={clsx(
              'flex gap-[8px] px-[16px] py-[4px] rounded-[16px] bg-lightGray shrink',
              lessonsCount < 3 ? 'bg-gray' : 'bg-yellow'
            )}
          >
            <FilteredImage
              src={lock}
              filter={
                lessonsCount < 3
                  ? FilterClassEnum.Gray
                  : FilterClassEnum.Orange
              }
            />
            <span
              className={clsx(
                'text-extraSmall font-[700]',
                lessonsCount < 3 ? 'text-gray' : 'text-orange'
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

          <div className='flex flex-col gap-[16px] w-full'>
            <span>Select ALL days you’re available for lessons</span>

            <AlertBox
              text='Please choose as many days as possible for quicker instructor matching'
              type='info'
            />

            <div className='flex gap-[16px] self-start'>
              <CustomCheckbox
                checked={allWeekdaysSelected}
                text='Weekdays'
                onClick={() => selectDays(WEEKDAYS_SELECTED)}
              />
              <CustomCheckbox
                checked={allWeekendDaysSelected}
                text='Weekends'
                onClick={() => selectDays(WEEKENDS_SELECTED)}
              />
              <CustomCheckbox
                checked={allDaysSelected}
                text='All'
                onClick={() =>
                  selectDays({ ...WEEKDAYS_SELECTED, ...WEEKENDS_SELECTED })
                }
              />
            </div>

            <div className='grid mt-[16px] grid-cols-7 gap-[12px] w-full'>
              {Object.values(DaysEnum).map((el) => (
                <CustomButton
                  key={el}
                  text={el}
                  isActive={selectedDays[el]}
                  onClick={() =>
                    selectDays({ [el]: !selectedDays[el] } as Record<
                      DaysEnum,
                      boolean
                    >)
                  }
                  className='!px-0'
                />
              ))}
            </div>
          </div>

          {someWeekdaysSelected && (
            <div className='flex flex-col mt-[16px] gap-[16px] w-full'>
              <span>
                Select ALL times you’re available for lessons on weekdays
              </span>
              <CustomCheckbox
                checked={allTimesInWeekdaysSelected}
                text='Select All'
                onClick={() => selectWeekdayTimes(ALL_TIMES_SELECTED)}
              />

              <div className='grid grid-cols-4 gap-[12px] w-full'>
                {Object.values(TimesEnum).map((el) => (
                  <CustomButton
                    key={el}
                    text={el}
                    isActive={selectedWeekdayTimes[el]}
                    onClick={() =>
                      selectWeekdayTimes({
                        [el]: !selectedWeekdayTimes[el],
                      } as Record<TimesEnum, boolean>)
                    }
                    className='!px-0'
                  />
                ))}
              </div>
            </div>
          )}

          {someWeekendDaysSelected && (
            <div className='flex flex-col gap-[16px] w-full'>
              <span>
                Select ALL times you’re available for lessons on weekends
              </span>
              <CustomCheckbox
                checked={allTimesInWeekendDaysSelected}
                text='Select All'
                onClick={() => selectWeekendTimes(ALL_TIMES_SELECTED)}
              />

              <div className='grid grid-cols-4 gap-[12px] w-full'>
                {Object.values(TimesEnum).map((el) => (
                  <CustomButton
                    key={el}
                    text={el}
                    isActive={selectedWeekendTimes[el]}
                    onClick={() =>
                      selectWeekendTimes({
                        [el]: !selectedWeekendTimes[el],
                      } as Record<TimesEnum, boolean>)
                    }
                    className='!px-0'
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <CustomCurveButton type='submit' text='Continue' icon={blackArrow} />
      <GoBackTextButton
        text='Back to package selection'
        onClick={onPreviousClicked}
        size='small'
      />
    </form>
  );
};

export default RegistrationForm5;
