import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { InputHTMLAttributes } from 'react';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  text: string;
  icon?: StaticImageData;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  maxLength?: number;
  className?: string;
  inputClassName?: string;
};

const CustomInput: React.FC<Props> = (props) => {
  const {
    text,
    icon,
    value,
    onChange,
    onBlur,
    disabled,
    maxLength,
    error,
    className,
    inputClassName,
    ...inputProps
  } = props;
  return (
    <label
      className={clsx(
        'flex flex-col gap-[8px] w-full',
        disabled && 'opacity-70',
        className
      )}
    >
      <div className='flex justify-between w-full'>
        <span className='text-offBlack font-medium'>{text}</span>
        <span className={clsx('text-red', error ? 'opacity-100' : 'opacity-0')}>
          {error || 'error'}
        </span>
      </div>
      <div
        className={clsx(
          'flex items-center bg-white rounded-[10px] border-[2px] focus-within:border-yellow',
          error ? 'border-red-500' : 'border-gray'
        )}
      >
        {icon && (
          <FilteredImage
            src={icon}
            alt='icon'
            filter={FilterClassEnum.Gray}
            className='ml-[8px] h-[24px] w-[24px] '
          />
        )}
        <input
          {...inputProps}
          type={inputProps.type ?? 'text'}
          id={text}
          maxLength={maxLength}
          className={clsx(
            'py-[8px] px-[16px] w-full outline-none',
            inputClassName
          )}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />
      </div>
    </label>
  );
};

export default CustomInput;
