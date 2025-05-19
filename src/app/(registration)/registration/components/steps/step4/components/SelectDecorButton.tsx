import Image from 'next/image';
import clsx from 'clsx';

import { blackArrow } from '@/assets';
import { CurvySubstrate, CurvySubstrate2 } from '@/components/icons';

type Props = {
  className?: string;
  bgSvgClassName?: string;
  selected?: boolean;
  size?: 'sm' | 'md';
};

const SelectDecorButton = ({className, bgSvgClassName, selected, size = 'sm'}: Props) => (
  <div
    className={clsx(
      'relative leading-[1]',
      className,
      size === 'sm' && 'min-w-[84px]',
      size === 'md' && 'min-w-[155px]'
    )}
  >
    <div
      className={clsx(
        'flex gap-[8px] items-center justify-center relative z-1',
        size === 'sm' && 'py-2.5 pl-[12px] pr-[28px]',
        size === 'md' && 'py-3 pl-[42px] pr-[48px]'
      )}
    >
      <span
        className={clsx(
          'font-semibold font-primary -mb-1',
          size === 'sm' && 'text-[12px]',
          size === 'md' && 'text-[14px]'
        )}
      >
        {selected ? 'Selected' : 'Select'}
      </span>
      <span
        className={clsx(
          'absolute top-[50%] translate-y-[-50%] flex items-center justify-center',
          size === 'sm' && 'w-[18px] h-[18px] right-1',
          size === 'md' && 'w-[22px] h-[22px] right-1.5'
        )}
      >
        <Image
          src={blackArrow}
          alt=''
          className={clsx(
            'relative z-1',
            size === 'sm' && 'w-[8px] h-[8px]',
            size === 'md' && 'w-[10px] h-[10px]'
          )}
        />
        <CurvySubstrate className='absolute top-0 left-0 text-lightYellow w-full h-full' />
      </span>
    </div>

    <CurvySubstrate2
      className={clsx(
        'absolute top-0 left-0 text-yellow w-full h-full',
        bgSvgClassName
      )}
    />
  </div>
);

export default SelectDecorButton;
