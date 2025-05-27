import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { blackArrow, calendarAlert, calendarDate, calendarTwo, lock } from '@/assets';
import CustomButton from '@/components/CustomButton';
import CustomCurveButton from '@/components/CustomCurveButton';
import CustomDateInput from '@/components/CustomDatePicker';
import FilteredImage from '@/components/FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import { DAY_ORDER, DaysEnum, WEEKDAYS_ARRAY, WEEKENDS_ARRAY } from '@/enum/days.enum';
import { ALL_TIMES_ARRAY, TIMES_ORDER, TimesEnum } from '@/enum/times.enum';
import { useRegistrationForm } from '@/context/registration-form.context';
import { WhenToBeginEnum } from '@/enum/when-to-begin.enum';
import { convertDateFromUSFormatToInputValue, convertDateToUSFormat } from '@/helpers/date';

import GoBackTextButton from '../../shared/GoBackTextButton';
import AlertBox from '../../shared/AlertBox';
import { BuildOnFieldChangedEventHandler2, BuildOnFieldChangedHandlerFunction } from '../../../types';
import TimesSelector from './components/TimeSelector';
import FlexibleSchedule from './components/FlexibleSchedule';
import DaysSelector from './components/DaysSelector';
import ErrorHighlighter from './components/ErrorHighlighter';

const sortDays = (days: DaysEnum[]) => {
  return days.sort((a, b) => DAY_ORDER[a] - DAY_ORDER[b]);
};
const sortTimes = (times: TimesEnum[]) => {
  return times.sort((a, b) => TIMES_ORDER[a] - TIMES_ORDER[b]);
};

type WhenToBeginCard = {
  text: string;
  value: WhenToBeginEnum;
  icon?: StaticImageData | undefined;
};

const whenToBeginCards: WhenToBeginCard[] = [
  {
    text: 'ASAP',
    value: WhenToBeginEnum.Asap,
    icon: calendarAlert,
  },
  {
    text: 'Within two weeks',
    value: WhenToBeginEnum.TwoWeeks,
    icon: calendarTwo,
  },
  {
    text: 'Specific date',
    value: WhenToBeginEnum.Specific,
    icon: calendarDate,
  },
];

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
  buildOnFieldChangedHandler: BuildOnFieldChangedHandlerFunction;
  buildOnFieldChangedEventHandler2: BuildOnFieldChangedEventHandler2;
};

const RegistrationForm5: React.FC<Props> = ({
  onNextClicked,
  onPreviousClicked,
  buildOnFieldChangedHandler,
  buildOnFieldChangedEventHandler2,
}) => {
  const { registrationForm, registrationErrors, registrationErrorsText } = useRegistrationForm();

  const {
    lessonFrequency: formLessonsFrequency,
    customerWouldLikeToBegin,
    preferredLessonBeginDate,
    selectedDays,
    selectedWeekdayTimes,
    selectedWeekendTimes,
    flexibleSchedule,
    additionalSchedulingInformation,
  } = registrationForm ?? {};

  const setLessonFrequency = buildOnFieldChangedHandler('lessonFrequency');
  const setCustomerWouldLikeToBegin = buildOnFieldChangedHandler('customerWouldLikeToBegin');
  const setPreferredLessonBeginDate = buildOnFieldChangedHandler('preferredLessonBeginDate');

  const showDatePicker = customerWouldLikeToBegin === WhenToBeginEnum.Specific;
  const inputDateValue = convertDateFromUSFormatToInputValue(preferredLessonBeginDate ?? '');
  const lessonFrequency = !formLessonsFrequency ? 0 : formLessonsFrequency;

  const setSelectedDays = (days: DaysEnum[]) => {
    buildOnFieldChangedHandler('selectedDays')(sortDays(days).join(' '));
  };

  const setSelectedWeekdayTimes = (times: TimesEnum[]) => {
    buildOnFieldChangedHandler('selectedWeekdayTimes')(sortTimes(times).join(' '));
  };

  const setSelectedWeekendTimes = (times: TimesEnum[]) => {
    buildOnFieldChangedHandler('selectedWeekendTimes')(sortTimes(times).join(' '));
  };

  const setFlexibleSchedule = buildOnFieldChangedHandler('flexibleSchedule');
  const setAdditionalSchedulingInformation = buildOnFieldChangedEventHandler2('additionalSchedulingInformation');

  const selectedWeekdayTimesArray = (selectedWeekdayTimes ? selectedWeekdayTimes.split(' ') : []) as TimesEnum[];

  const selectedWeekendTimesArray = (selectedWeekendTimes ? selectedWeekendTimes.split(' ') : []) as TimesEnum[];

  const selectedDaysArray = (selectedDays ? selectedDays.split(' ') : []) as DaysEnum[];

  const [showFlexibleScheduling, setShowFlexibleScheduling] = useState(() => selectedDaysArray.length > 0);

  const handleLessonFrequencyClick = (selectedFrequency: string) => {
    setLessonFrequency(+selectedFrequency);
  };

  const handleWhenToBeginCardClick = (card: WhenToBeginCard) => {
    setCustomerWouldLikeToBegin(card.value);

    if (card.value !== WhenToBeginEnum.Specific) {
      setPreferredLessonBeginDate('');
    }
  };

  const handleDateInputChange = (date: string) => {
    setPreferredLessonBeginDate(convertDateToUSFormat(new Date(date)));
  };

  const handleTimesChange = (variant: 'weekday' | 'weekend') => {
    return (selectedTimes: TimesEnum[]) => {
      if (variant === 'weekday') {
        setSelectedWeekdayTimes(selectedTimes);
      } else {
        setSelectedWeekendTimes(selectedTimes);
      }
    };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextClicked();
  };

  const someWeekDaysSelected = WEEKDAYS_ARRAY.some((day) => selectedDaysArray.includes(day));

  const someWeekendDaysSelected = WEEKENDS_ARRAY.some((day) => selectedDaysArray.includes(day));

  useEffect(() => {
    if (!someWeekDaysSelected) {
      setSelectedWeekdayTimes([]);
    } else {
      setShowFlexibleScheduling(true);
    }
  }, [someWeekDaysSelected]);

  useEffect(() => {
    if (!someWeekendDaysSelected) {
      setSelectedWeekendTimes([]);
    } else {
      setShowFlexibleScheduling(true);
    }
  }, [someWeekendDaysSelected]);

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-[30px] items-center w-[calc(100vw-50px)] laptop:w-auto'>
      <GoBackTextButton text='Schedule' onClick={onPreviousClicked} />

      <div className='relative flex flex-col gap-[8px] w-full'>
        {registrationErrors?.lessonFrequency && <ErrorHighlighter />}

        <span className='font-medium'>How many lessons would like per week*</span>

        <div className='flex flex-col gap-[6px] items-start desktop:flex-row desktop:items-center'>
          {lessonFrequency < 3 && <div className='text-extraSmall text-gray'>Pick 3 or more lessons per week to</div>}

          <div
            className={clsx(
              'flex gap-[8px] px-[16px] py-[4px] rounded-[16px] bg-lightGray shrink',
              lessonFrequency < 3 ? 'bg-gray' : 'bg-yellow'
            )}
          >
            <FilteredImage src={lock} filter={lessonFrequency < 3 ? FilterClassEnum.Gray : FilterClassEnum.Orange} />
            <span className={clsx('text-extraSmall font-[700]', lessonFrequency < 3 ? 'text-gray' : 'text-orange')}>
              LEARN TO SWIM GUARANTEED
            </span>
          </div>
        </div>

        <div className='flex gap-[10px] mt-[8px]'>
          {Array.from({ length: 7 }).map((_, i) => (
            <CustomButton
              key={i}
              text={(i + 1).toString()}
              onClick={() => handleLessonFrequencyClick((i + 1).toString())}
              isActive={lessonFrequency === i + 1}
              className='grow'
            />
          ))}
        </div>
      </div>

      {lessonFrequency > 0 && (
        <>
          <div className='relative flex flex-col gap-[8px] w-full'>
            {registrationErrors?.customerWouldLikeToBegin && <ErrorHighlighter />}
            <span className='font-medium'>Select when would you like to begin*</span>

            <div className='grid grid-cols-3 gap-[8px]'>
              {whenToBeginCards.map((card) => (
                <CustomButton
                  key={card.value}
                  text={card.text}
                  onClick={() => handleWhenToBeginCardClick(card)}
                  isActive={customerWouldLikeToBegin === card.value}
                  icon={card.icon}
                  className='flex-col-reverse !justify-end'
                  textClassName='text-base font-medium'
                />
              ))}
            </div>
          </div>

          {showDatePicker && (
            <CustomDateInput
              error={Boolean(registrationErrors?.preferredLessonBeginDate)}
              visibleValue={preferredLessonBeginDate ?? ''}
              placeholder='Choose Start Date'
              inputValue={inputDateValue ?? ''}
              onChange={handleDateInputChange}
              dateInputProps={{
                min: new Intl.DateTimeFormat('en-CA').format(new Date()),
              }}
            />
          )}
        </>
      )}

      {customerWouldLikeToBegin && (
        <>
          <DaysSelector
            selectedDays={selectedDaysArray}
            onChange={setSelectedDays}
            error={registrationErrors?.selectedDays}
          />

          {someWeekDaysSelected && (
            <TimesSelector
              error={registrationErrors?.selectedWeekdayTimes}
              title='Select ALL times you’re available for lessons on weekdays'
              inputGroupName='weekdays_times'
              times={ALL_TIMES_ARRAY}
              initialSelectedTimes={selectedWeekdayTimesArray}
              onChange={handleTimesChange('weekday')}
            />
          )}

          {someWeekendDaysSelected && (
            <TimesSelector
              error={registrationErrors?.selectedWeekendTimes}
              title='Select ALL times you’re available for lessons on weekends'
              inputGroupName='weekend_times'
              times={ALL_TIMES_ARRAY}
              initialSelectedTimes={selectedWeekendTimesArray}
              onChange={handleTimesChange('weekend')}
            />
          )}
        </>
      )}

      {showFlexibleScheduling && (
        <FlexibleSchedule
          flexibleScheduleChecked={Boolean(flexibleSchedule)}
          additionalSchedulingInformation={additionalSchedulingInformation ?? ''}
          onAdditionalSchedulingInformationChange={setAdditionalSchedulingInformation}
          onFlexibleScheduleCheckedChange={setFlexibleSchedule}
        />
      )}

      {registrationErrorsText && (
        <AlertBox
          text={
            registrationErrors?.selectedDays === 'lessonFrequency'
              ? 'You have selected less days than the lesson frequency that you have specified. Woops, looks like some info is missing. Please provide what times are you available for lessons on weekdays.'
              : registrationErrorsText
          }
          type='error'
        />
      )}

      <div className='mt-12'>
        <CustomCurveButton type='submit' text='Continue' icon={blackArrow} />
      </div>

      <GoBackTextButton text='Back to package selection' onClick={onPreviousClicked} size='small' />
    </form>
  );
};

export default RegistrationForm5;
