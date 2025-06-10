import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { FilterClassEnum } from '@/enum/filter-class.enum';
import { calendarDate } from '@/assets';
import FilteredImage from '@/components/FilteredImage';

type Props = {
  inputValue: string;
  initialInputValue?: string;
  visibleValue?: string;
  placeholder?: string;
  error?: boolean;
  dateInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: (date: string) => void;
};

const CustomDatePicker: React.FC<Props> = ({
  inputValue,
  initialInputValue,
  visibleValue,
  placeholder,
  error,
  dateInputProps,
  onChange,
}) => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialInputValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  return (
    <label
      className={clsx(
        'relative rounded-lg border-2 border-gray flex items-center gap-2 p-2 w-full',
        error && 'border-red'
      )}
      onClick={() => dateInputRef.current?.showPicker()}
    >
      <FilteredImage
        src={calendarDate}
        alt='icon'
        filter={FilterClassEnum.Black}
        className='ml-[8px] h-[24px] w-[24px] pointer-events-none'
      />
      <input
        type='text'
        value={visibleValue}
        placeholder={placeholder}
        readOnly
        className='outline-none'
      />

      <input
        {...dateInputProps}
        ref={dateInputRef}
        className='absolute -bottom-1 left-4 w-0 h-0'
        type='date'
        value={value ?? ''}
        onChange={handleChange}
      />
    </label>
  );
};

export default CustomDatePicker;
