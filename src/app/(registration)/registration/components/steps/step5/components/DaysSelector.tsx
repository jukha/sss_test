import React, { useEffect, useState } from 'react';
import AlertBox from '../../../shared/AlertBox';
import { CustomCheckbox } from '@/components/CustomCheckbox';
import { ALL_DAYS_ARRAY, DaysEnum, WEEKDAYS_ARRAY, WEEKENDS_ARRAY } from '@/enum/days.enum';
import CustomButton from '@/components/CustomButton';
import ErrorHighlighter from './ErrorHighlighter';

type Props = {
  selectedDays: DaysEnum[];
  error?: string;
  onChange?: (selectedDays: DaysEnum[]) => void;
};

const DaysSelector: React.FC<Props> = ({ selectedDays, error, onChange }) => {
  const [selectedDaysLocal, setSelectedDaysLocal] = useState(() => selectedDays);

  const allWeekDaysSelected = WEEKDAYS_ARRAY.every((day) => selectedDays.includes(day));

  const allWeekendDaysSelected = WEEKENDS_ARRAY.every((day) => selectedDays.includes(day));

  const allDaysSelected = allWeekDaysSelected && allWeekendDaysSelected;

  const handleDaysCheckboxesClick = (days: DaysEnum[]) => {
    return (checked: boolean) => {
      if (checked) {
        const newDays = [...new Set([...selectedDaysLocal, ...days])];
        setSelectedDaysLocal(newDays);
        onChange?.(newDays);
      }
    };
  };

  const handleDayClick = (day: DaysEnum) => {
    const dayAlreadyIn = selectedDaysLocal?.includes(day);

    const finalDays = dayAlreadyIn
      ? selectedDaysLocal.filter((selectedDay) => selectedDay !== day)
      : [...selectedDaysLocal, day];

    setSelectedDaysLocal(finalDays);
    onChange?.(finalDays);
  };

  useEffect(() => {
    setSelectedDaysLocal(selectedDays);
  }, [JSON.stringify(selectedDays)]);

  return (
    <div className='relative flex flex-col gap-[16px] w-full'>
      {error && <ErrorHighlighter />}

      <span className='font-medium'>Select ALL days you’re available for lessons</span>

      <AlertBox text='Please choose as many days as possible for quicker instructor matching' type='info' />

      <div className='flex gap-[16px] self-start'>
        <CustomCheckbox
          defaultChecked={allWeekDaysSelected}
          checked={allWeekDaysSelected}
          text='Weekdays'
          onClick={handleDaysCheckboxesClick(WEEKDAYS_ARRAY)}
        />
        <CustomCheckbox
          defaultChecked={allWeekendDaysSelected}
          checked={allWeekendDaysSelected}
          text='Weekends'
          onClick={handleDaysCheckboxesClick(WEEKENDS_ARRAY)}
        />
        <CustomCheckbox
          defaultChecked={allDaysSelected}
          checked={allDaysSelected}
          text='All'
          onClick={handleDaysCheckboxesClick(ALL_DAYS_ARRAY)}
        />
      </div>

      <div className='mt-8 overflow-x-auto flex w-[100vw] -translate-x-[25px] px-[25px] laptop:w-full laptop:translate-x-0 laptop:px-0'>
        <div className='flex gap-2 items-center laptop:w-full'>
          {Object.values(DaysEnum).map((el) => (
            <CustomButton
              key={el}
              text={el.slice(0, 3)}
              onClick={() => handleDayClick(el)}
              isActive={selectedDaysLocal?.includes(el)}
              className='shrink-0 min-w-[50px] laptop:grow-1'
              textClassName='max-w-[100%] font-medium'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaysSelector;
