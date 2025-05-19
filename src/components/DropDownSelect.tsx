'use client';

import clsx from 'clsx';
import { useRef, useState } from 'react';
import FilteredImage from './FilteredImage';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import { arrowUp } from '@/assets';
import ContextMenuWrapper from './ContextMenuWrapper';
import ContextMenuButton from './ContextMenuButton';

type Choice = { index: number; text: string };

type Props = {
  choices: Choice[];
  width?: string;
  text: string;
  error?: string;
  value?: Choice;
  onChange: (v: Choice) => void;
  onBlur?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  className?: string;
};

const DropDownSelect: React.FC<Props> = ({
  choices,
  width,
  text,
  error,
  value,
  onChange,
  onBlur,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className={clsx('flex flex-col w-full relative gap-[8px]', className)}
      style={{ width }}
      ref={ref}
    >
      <div className='flex justify-between w-full'>
        <label htmlFor={text} className='text-offBlack font-medium'>
          {text}
        </label>
        <span className={clsx('text-red', error ? 'opacity-100' : 'opacity-0')}>
          {error || 'error'}
        </span>
      </div>

      <button
        type='button'
        className={clsx(
          'flex items-center bg-white rounded-[10px] gap-[8px] p-[8px] border-[2px] cursor-pointer focus:border-yellow',
          error ? 'border-red-500' : 'border-gray'
        )}
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={onBlur}
      >
        <span className='grow h-[24px] whitespace-nowrap overflow-clip max-w-[80%]'>
          {value?.text}
        </span>
        <FilteredImage
          src={arrowUp}
          rotate={isOpen ? 'top' : 'bottom'}
          filter={FilterClassEnum.Black}
        />
      </button>

      {isOpen && (
        <ContextMenuWrapper
          refAttachTo={ref}
          onClose={() => setIsOpen(false)}
          className='flex flex-col rounded-[10px] bg-white border-lightGray border-[1px]'
        >
          {choices.map((el, i) => (
            <ContextMenuButton
              onClick={() => {
                onChange(el);
                setIsOpen(false);
              }}
              key={i}
              text={el.text}
            />
          ))}
        </ContextMenuWrapper>
      )}
    </div>
  );
};

export default DropDownSelect;
