import { CustomCheckbox } from '../../../shared/CustomCheckbox';
import clsx from 'clsx';
import React from 'react';

type Props = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  text?: React.ReactNode;
  error?: string;
};

const CheckboxWithText: React.FC<Props> = ({ checked, onChange, text, error }) => {
  return (
    <div
      className={clsx(
        'relative flex items-start justify-start gap-4 py-4 pl-6 pr-8 rounded-lg bg-lightBlue border-blue desktop:gap-2',
        error && 'border-red bg-lightRed'
      )}
    >
      <CustomCheckbox className='w-max' checked={checked} onClick={onChange} />
      <div className='leading-[1.2] font-medium'>{text}</div>
      {error && <p className='absolute top-0 right-2 text-red translate-y-[-100%]'>{error}</p>}
    </div>
  );
};

export default CheckboxWithText;
