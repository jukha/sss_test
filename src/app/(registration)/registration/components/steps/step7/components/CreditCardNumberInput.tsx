import {
  magneticCardIcon,
  nortonSecurityLogo,
  secureCardLogos,
} from '@/assets';
import Image from 'next/image';

type Props = {
  value: string;
  error?: string;
  onChange?: (value: string) => void;
};

const CreditCardNumberInput: React.FC<Props> = ({ value, error, onChange }) => {
  return (
    <label className='flex flex-col gap-2'>
      <div className='relative flex items-center gap-2 text-offBlack font-medium'>
        Credit Card Number
        <Image
          src={secureCardLogos}
          className='w-[104px] h-[20px]'
          alt=''
          loading='lazy'
        />
        {error && (
          <span className='absolute top-[50%] right-0 translate-y-[-50%] bg-white text-red'>
            {error}
          </span>
        )}
      </div>
      <div className='flex items-center gap-2 p-2 rounded-[10px] border-[2px] border-gray focus-within:border-yellow'>
        <Image
          src={magneticCardIcon}
          className='w-6 h-6 filterGray'
          alt=''
          loading='lazy'
        />

        <input
          value={value}
          type='text'
          className='outline-none w-full'
          inputMode='numeric'
          onChange={(e) => onChange?.(e.target.value)}
          maxLength={19}
          autoComplete='cc-number'
          name='cc-number'
        />

        <Image
          src={nortonSecurityLogo}
          className='w-[48px] h-[22px]'
          alt=''
          loading='lazy'
        />
      </div>
    </label>
  );
};

export default CreditCardNumberInput;
