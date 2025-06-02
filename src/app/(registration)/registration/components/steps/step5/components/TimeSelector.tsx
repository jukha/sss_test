import React, { useState } from 'react';

import { CustomCheckbox } from '@/components/CustomCheckbox';
import { TimesEnum } from '@/enum/times.enum';
import TimeSelectorCard from './TimeSelectorCard';
import ErrorHighlighter from './ErrorHighlighter';

type Props = {
  inputGroupName: string;
  times: TimesEnum[];
  title: string;
  error?: string;
  initialSelectedTimes?: TimesEnum[];
  onChange?: (selectedTimes: TimesEnum[]) => void;
};

const TimesSelector: React.FC<Props> = ({ inputGroupName, times, title, error, initialSelectedTimes, onChange }) => {
  const [selectedTimes, setSelectedTimes] = useState(() => initialSelectedTimes ?? []);

  const allTimesSelected = times.every((time) => selectedTimes.includes(time));

  const handleTimeChange = (time: TimesEnum) => (checked: boolean) => {
    let result: TimesEnum[] = [];

    if (checked) {
      result = [...new Set([...selectedTimes, time])];
    } else {
      result = selectedTimes.filter((selectedTime) => selectedTime !== time);
    }

    setSelectedTimes(result);
    onChange?.(result);
  };

  return (
    <div className='relative flex flex-col gap-[16px] w-full mt-6'>
      {error && <ErrorHighlighter />}

      <span className='font-medium'>{title}</span>

      <div className='flex gap-2 items-center justify-items-start mb-8 font-medium'>
        <CustomCheckbox
          checked={allTimesSelected}
          onClick={(selected) => {
            if (selected) {
              setSelectedTimes(times);
              onChange?.(times);
            }
          }}
        />
        Select all
      </div>

      <div className='grid grid-cols-3 gap-[15px] laptop:grid-cols-4'>
        {times.map((time) => {
          const [from, to] = time.split('-');

          return (
            <TimeSelectorCard
              checked={selectedTimes.includes(time)}
              key={time}
              inputGroupName={inputGroupName}
              from={from}
              to={to}
              onChange={handleTimeChange(time)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimesSelector;
