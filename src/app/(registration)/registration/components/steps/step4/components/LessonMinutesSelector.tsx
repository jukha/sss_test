import { useEffect, useState } from 'react';
import LessonMinutesCard from './LessonMinutesCard';
import clsx from 'clsx';

const LESSON_MINUTES_COLORS = ['#F86008', '#1A8DC6', '#110241'];

type Props = {
  timesInMinutes: number[];
  selectedValue?: number | null;
  recommended?: number;
  onChange?: (selectedMinutes: number) => void;
};

const LessonMinutesSelector = ({ timesInMinutes, selectedValue, recommended, onChange }: Props) => {
  const [selectedMinutes, setSelectedMinutes] = useState<number | undefined | null>(selectedValue);

  const handleChange = (selectedMinutes: number) => {
    setSelectedMinutes(selectedMinutes);
    onChange?.(selectedMinutes);
  };

  useEffect(() => {
    setSelectedMinutes(selectedValue);
  }, [selectedValue]);

  return (
    <div className='overflow-y-auto ml-[-25px] mt-[-15px] px-[25px] pt-[15px] w-[100vw] desktop:w-auto desktop:overflow-visible desktop:m-0 desktop:p-0'>
      <fieldset className={clsx('flex gap-[15px]', timesInMinutes.length === 2 && 'justify-center')}>
        {timesInMinutes.map((minutes, idx) => (
          <LessonMinutesCard
            key={minutes}
            minutes={minutes}
            isSelected={selectedMinutes === minutes}
            otherCardSelected={Boolean(selectedMinutes && selectedMinutes !== minutes)}
            isRecommended={recommended === minutes}
            onChange={handleChange}
            cardColor={LESSON_MINUTES_COLORS[idx % LESSON_MINUTES_COLORS.length]}
            nameAttr='lesson_minutes'
          />
        ))}
      </fieldset>
    </div>
  );
};

export default LessonMinutesSelector;
