import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';

type Props = HTMLAttributes<HTMLTextAreaElement> & {
  text?: string;
  icon?: StaticImageData;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  error?: string;
  maxLength?: number;
  placeholder?: string;
  rows?: number;
};

const CustomTextArea: React.FC<Props> = (props) => {
  const {
    text,
    icon,
    value,
    onChange,
    disabled,
    maxLength,
    error,
    placeholder,
    rows,
    ...inputProps
  } = props;
  return (
    <div className='flex flex-col gap-[8px] w-full'>
      {(text || error) && (
        <div className='flex justify-between w-full'>
          <label htmlFor={text} className='text-darkBlue font-medium'>
            {text}
          </label>
          <span
            className={clsx('text-red', error ? 'opacity-100' : 'opacity-0')}
          >
            {error || 'error'}
          </span>
        </div>
      )}

      <div
        className={clsx(
          'flex items-center bg-white rounded-[10px] border-[2px] focus-within:border-input-focus',
          error ? 'border-red-500' : 'border-input-border'
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
        <textarea
          {...inputProps}
          id={text}
          rows={rows || 4}
          maxLength={maxLength}
          className='py-[8px] px-[16px] w-full outline-none resize-none'
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CustomTextArea;
