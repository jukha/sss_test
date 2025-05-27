import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

type Props = {
  checked: boolean;
  inputGroupName: string;
  from: string;
  to: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

const TimeSelectorCard: React.FC<Props> = ({ checked, inputGroupName, from, to, defaultChecked, onChange }) => {
  const [localChecked, setLocalChecked] = useState(Boolean(defaultChecked));
  const [hovered, setHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  useEffect(() => {
    setLocalChecked(checked);
  }, [checked]);

  const borderColor = localChecked || hovered ? 'border-white' : 'border-gray';
  const bgColor = localChecked || hovered ? 'bg-darkBlue' : 'bg-lightGray';
  const textColor = localChecked || hovered ? 'text-white' : '';

  return (
    <label
      className='w-max relative flex items-center justify-between cursor-pointer'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        checked={localChecked}
        onChange={handleChange}
        type='checkbox'
        name={inputGroupName}
        className='absolute w-0 h-0 top-0 left-0'
      />
      <div
        className={clsx(
          'font-medium text-center uppercase leading-[1.2] p-3 border rounded-l-lg transition-all',
          borderColor,
          bgColor,
          textColor
        )}
      >
        {from.replace(/\D/g, '')}
        <br />
        {from.replace(/\d/g, '')}
      </div>

      <div
        className={clsx(
          'absolute left-[50%] top-[50%] translate-[-50%] border-[.7px] rounded-2xl bg-white text-[7px] leading-[1] p-[3px]',
          borderColor
        )}
      >
        to
      </div>

      <div
        className={clsx(
          '-ml-[1px] font-medium text-center uppercase leading-[1.2] p-3 border rounded-r-lg transition-all',
          borderColor,
          bgColor,
          textColor
        )}
      >
        {to.replace(/\D/g, '')}
        <br />
        {to.replace(/\d/g, '')}
      </div>
    </label>
  );
};

export default TimeSelectorCard;
