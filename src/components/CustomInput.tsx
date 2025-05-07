import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';

type Props = HTMLAttributes<HTMLInputElement> & {
  text: string;
  icon?: StaticImageData;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  maxLength?: number;
};

const CustomInput: React.FC<Props> = (props) => {
  const {
    text,
    icon,
    value,
    onChange,
    disabled,
    maxLength,
    error,
    ...inputProps
  } = props;
  return (
    <div className='flex flex-col gap-[10px] w-full'>
      <div className='flex justify-between w-full'>
        <label htmlFor={text} className='text-darkBlue'>
          {text}
        </label>
        <span className={clsx('text-red', error ? 'opacity-100' : 'opacity-0')}>
          {error || 'error'}
        </span>
      </div>
      <div
        className={clsx(
          'flex items-center bg-white rounded-[10px] gap-[8px] border-[1px]',
          error ? 'border-red-500' : 'border-yellow'
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
          type='text'
          id={text}
          maxLength={maxLength}
          className='p-[8px] w-full outline-none'
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CustomInput;
