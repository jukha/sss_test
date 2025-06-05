import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type Props = {
  value: string;
  text: string;
  selected?: boolean;
  name?: string;
  icon?: string | StaticImport;
  onChange?: (value: string) => void;
};

const SelectableCard: React.FC<Props> = ({
  value,
  text,
  selected,
  name,
  icon,
  onChange,
}) => {
  return (
    <label
      className={clsx(
        'relative w-full h-[80px] px-4 flex flex-col items-center justify-center rounded-[6px] bg-lightGray cursor-pointer',
        'desktop:h-[105px] desktop:px-[30px]',
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
        {icon && (
          <Image
            src={icon}
            alt=''
            className={clsx(selected && 'filterWhite')}
          />
        )}
        <div className='font-secondary text-[12px] font-medium text-center leading-[1.2]'>
          {text}
        </div>
      </div>
    </label>
  );
};

export default SelectableCard;
