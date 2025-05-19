import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { useRef } from 'react';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import { calendarDate } from '@/assets';

type Props = {
  text?: string;
  placeholder?: string;
  icon?: StaticImageData;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  maxLength?: number;
  className?: string;
  inputClassName?: string;
};

const CustomDateInput: React.FC<Props> = (props) => {
  const {
    text,
    icon,
    value,
    onChange,
    disabled,
    maxLength,
    error,
    className,
    inputClassName,
    placeholder,
    ...inputProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleWrapperClick = () => {
    if (disabled || !inputRef.current) return;
    inputRef.current?.showPicker?.();
    inputRef.current?.focus();
  };

  return (
    <label
      className={clsx(
        'flex flex-col gap-[8px] w-full',
        disabled && 'opacity-70',
        className
      )}
    >
      {(text || error) && (
        <div className='flex justify-between w-full'>
          <span className='text-offBlack font-medium'>{text}</span>
          <span
            className={clsx('text-red', error ? 'opacity-100' : 'opacity-0')}
          >
            {error || 'error'}
          </span>
        </div>
      )}
      <div
        className={clsx(
          'relative flex items-center bg-white rounded-[10px] border-[2px]',
          'focus-within:border-yellow',
          error ? 'border-red-500' : 'border-gray'
        )}
        onClick={handleWrapperClick}
      >
        <FilteredImage
          src={calendarDate}
          alt='icon'
          filter={FilterClassEnum.Black}
          className='ml-[8px] h-[24px] w-[24px] pointer-events-none'
        />

        {!value && placeholder && (
          <span
            className={clsx(
              'absolute left-[40px] pointer-events-none bg-white text-gray',
              icon ? 'ml-[32px]' : ''
            )}
          >
            {placeholder}
          </span>
        )}

        <input
          ref={inputRef}
          {...inputProps}
          type='date'
          id={text}
          maxLength={maxLength}
          className={clsx(
            'py-[8px] px-[16px] hideInputCalendar w-full outline-none appearance-none bg-transparent',
            !value && 'text-transparent',
            inputClassName
          )}
          value={value ?? ''}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </label>
  );
};

export default CustomDateInput;
