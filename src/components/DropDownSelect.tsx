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
};

const DropDownSelect: React.FC<Props> = ({ choices, width, text, error, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className='flex flex-col w-full relative' style={{ width }} ref={ref}>
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
          'flex items-center bg-white rounded-[10px] gap-[8px] p-[8px] border-[1px] cursor-pointer',
          error ? 'border-red-500' : 'border-yellow'
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className='grow h-[24px]'>{value?.text}</span>
        <FilteredImage
          src={arrowUp}
          rotate={isOpen ? 'top' : 'bottom'}
          filter={FilterClassEnum.Black}
        />
      </div>

      {isOpen && (
        <ContextMenuWrapper
          refAttachTo={ref}
          onClose={() => setIsOpen(false)}
          className='flex flex-col rounded-[10px] bg-white border-gray border-[1px]'
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
