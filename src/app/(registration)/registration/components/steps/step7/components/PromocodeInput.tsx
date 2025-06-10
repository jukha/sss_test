import React, { useState } from 'react';
import Image from 'next/image';
import { checkmarkWhite } from '@/assets';
import clsx from 'clsx';

type Props = {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  savedUSD?: string;
  valid?: boolean;
};

const PromocodeInput: React.FC<Props> = ({ value, onChange, disabled, error, savedUSD, valid }) => {
  const [showPromocodeInput, setShowPromocodeInput] = useState(() => Boolean(value));
  const showIcon = Boolean(error ?? valid);

  if (!showPromocodeInput) {
    return (
      <button
        type='button'
        onClick={() => setShowPromocodeInput(true)}
        className='text-darkBlue font-medium font-secondary text-left cursor-pointer'
      >
        Have a promo code?
      </button>
    );
  }

  return (
    <label className='flex flex-col gap-2'>
      <div className='text-offBlack font-medium'>Promo code</div>

      <div
        className={clsx(
          'flex items-center gap-2 p-2 rounded-[10px] border-[2px] border-gray focus-within:border-yellow',
          valid && 'bg-lightGray',
          disabled && 'bg-lightGray border-yellow'
        )}
      >
        <input
          value={value}
          type='text'
          className='outline-none w-full'
          inputMode='numeric'
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        />

        {showIcon && (
          <div
            className={clsx(
              'w-6 h-6 rounded-[50%] shrink-0 flex items-center justify-center',
              error && 'bg-red',
              !error && valid && 'bg-darkBlue'
            )}
          >
            {error && <span className='w-3 h-0.5 bg-white rounded-sm' />}
            {!error && valid && <Image src={checkmarkWhite} className='w-[12px] h-2 ' alt='' loading='lazy' />}
          </div>
        )}
      </div>

      <div className='leading-[1.2]'>
        {error && <div className='font-medium font-secondary text-red'>{error}</div>}
        {!error && valid && savedUSD && (
          <div className='font-semibold font-primary'>
            You <span className='px-1 py-0.5 bg-yellow text-red rounded-2xl'>saves ${savedUSD}!</span> with this promo!
          </div>
        )}
      </div>
    </label>
  );
};

export default PromocodeInput;
