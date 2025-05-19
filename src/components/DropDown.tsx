'use client';

import { useState } from 'react';
import FilteredImage from './FilteredImage';
import { arrowUp } from '@/assets';
import { DropDownType } from '@/types/dropdown.type';
import clsx from 'clsx';
import { FilterClassEnum } from '@/enum/filter-class.enum';

type Props = {
  dropDown: DropDownType;
};

const DropDown: React.FC<Props> = ({ dropDown }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col'>
      <div
        className='flex gap-[10px] justify-between cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{dropDown.header}</h3>
        <div className='curveCircle bg-teal min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] flex items-center justify-center '>
          <FilteredImage
            src={arrowUp}
            filter={FilterClassEnum.White}
            rotate={isOpen ? 'top' : 'bottom'}
          />
        </div>
      </div>

      <div
        className={clsx(
          'flex flex-col gap-[10px] transition-all pointer-events-none overflow-hidden',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-[0px] opacity-0'
        )}
      >
        {dropDown.textArticles.map((el, i) => (
          <div className='text-medium' key={i}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
