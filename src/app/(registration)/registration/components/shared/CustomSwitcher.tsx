import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

type Props = {
  checked: boolean;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

const CustomSwitcher: React.FC<Props> = ({
  checked,
  initialChecked,
  onChange,
}) => {
  const [localChecked, setLocalChecked] = useState(initialChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalChecked?.(e.target.checked);
    onChange?.(e.target.checked);
  };

  const bgColor = localChecked ? 'bg-[#78E08A]' : 'bg-lightGray';
  const textColor = localChecked ? 'text-[#78E08A]' : 'text-gray';

  useEffect(() => {
    setLocalChecked(checked);
  }, [checked]);

  return (
    <div
      className={clsx(
        'relative w-[68px] h-[40px] rounded-[64px] flex items-center px-1 inset-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
        bgColor
      )}
    >
      <input
        checked={localChecked}
        type='checkbox'
        onChange={handleChange}
        className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
      />
      <div
        className={clsx(
          'w-8 h-8 rounded-4xl bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold text-xs leading-[1] flex items-center justify-center transition-transform',
          textColor,
          localChecked && 'translate-x-[28px]'
        )}
      >
        {localChecked ? 'ON' : 'OFF'}
      </div>
    </div>
  );
};

export default CustomSwitcher;
