import clsx from 'clsx';
import { useEffect, useState } from 'react';

type Props = {
  checked?: boolean;
  className?: string;
  text?: string;
  defaultChecked?: boolean;
  onClick?: (v: boolean) => void;
};

export const CustomCheckbox: React.FC<Props> = ({
  checked,
  className,
  text,
  defaultChecked,
  onClick,
}) => {
  const [localChecked, setLocalChecked] = useState(() => {
    return checked !== undefined ? checked : Boolean(defaultChecked);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checked === undefined) {
      setLocalChecked(e.target.checked);
    }
    onClick?.(e.target.checked);
  };

  useEffect(() => {
    if (checked !== undefined) {
      setLocalChecked(checked);
    }
  }, [checked]);

  return (
    <label
      className={clsx(
        'flex gap-2 items-center relative cursor-pointer',
        className
      )}
    >
      <input
        type='checkbox'
        checked={localChecked}
        onChange={handleChange}
        className='invisible w-0 h-0 absolute'
      />
      <span className='w-6 h-6 rounded-sm block bg-white border-2 border-gray relative'>
        {localChecked && (
          <svg
            className='absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)]'
            width='18'
            height='17'
            viewBox='0 0 18 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.5007 1.49898L6.98477 14.1396L1.78988 8.58648'
              stroke='#110241'
              strokeWidth='2.51534'
            />
          </svg>
        )}
      </span>
      <span className='font-medium'>{text}</span>
    </label>
  );
};
