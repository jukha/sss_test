import { useState } from 'react';
import LessonMinutesCard from './LessonMinutesCard';

const LESSON_MINUTES_COLORS = ['#F86008', '#1A8DC6', '#110241'];

type Props = {
  timesInMinutes: [number, number, number];
  initialValue?: number;
  recommended?: number;
  onChange?: (selectedIndex: number) => void;
};

const LessonMinutesSelector = ({
  timesInMinutes,
  initialValue,
  recommended,
  onChange,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(() => initialValue);

  const handleChange = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };

  return (
    <div className='overflow-y-auto ml-[-25px] mt-[-15px] px-[25px] pt-[15px] w-[100vw] desktop:w-auto desktop:overflow-visible desktop:m-0 desktop:p-0'>
      <fieldset className='flex gap-[15px]'>
        {timesInMinutes.map((time, idx) => (
          <LessonMinutesCard
            key={time}
            index={idx}
            time={time}
            isSelected={selectedIndex === idx}
            otherCardSelected={
              selectedIndex !== undefined && selectedIndex !== idx
            }
            isRecommended={recommended === time}
            onChange={handleChange}
            cardColor={LESSON_MINUTES_COLORS[idx]}
            nameAttr='lesson_minutes'
          />
        ))}
      </fieldset>
    </div>
  );
};

export default LessonMinutesSelector;
