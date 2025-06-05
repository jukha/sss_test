import React from 'react';
import clsx from 'clsx';

type Props = {
  value: string;
  text: string;
  selected?: boolean;
  name?: string;
  onChange?: (value: string) => void;
};

const LessonsTypeCard: React.FC<Props> = ({ value, text, selected, name, onChange }) => {
  return (
    <label
      className={clsx(
        'relative w-[110px] h-[80px] px-4 flex flex-col items-center justify-center rounded-[6px] bg-lightGray cursor-pointer',
        'desktop:w-[140px] h-[105px] px-[30px]',
        selected && '!bg-darkBlue text-white'
      )}
    >
      <input
        type='radio'
        value={value}
        className='absolute w-0 h-0 opacity-0'
        name={name}
        checked={selected}
        onChange={() => onChange?.(value)}
      />
      <div className='flex flex-col items-center justify-center'>
        <div className='font-secondary text-[12px] font-medium text-center leading-[1.2]'>{text}</div>
      </div>
    </label>
  );
};

export default LessonsTypeCard;