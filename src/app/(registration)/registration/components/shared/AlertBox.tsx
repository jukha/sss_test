import React from 'react';
import { alertCircle } from '@/assets';
import clsx from 'clsx';
import { FilterClassEnum } from '@/enum/filter-class.enum';
import FilteredImage from '@/components/FilteredImage';

type Props = {
  text: React.ReactNode;
  bulletTexts?: string[];
  type: 'info' | 'error' | 'alert' | 'info-no-icon';
  displayIcon?: boolean;
};

const AlertBox: React.FC<Props> = ({ text, type, bulletTexts, displayIcon }) => {
  const getColorScheme = () => {
    if (type === 'alert') return 'bg-lightYellow border-yellow';
    if (type === 'error') return 'bg-lightRed border-red';
    if (type === 'info') return 'bg-lightBlue border-blue';
    return 'bg-lightBlue border-blue';
  };

  const getIconFilter = () => {
    if (type === 'alert') return FilterClassEnum.Yellow;
    if (type === 'error') return FilterClassEnum.Red;
    return FilterClassEnum.DarkBlue;
  };

  return (
    <div
      className={clsx(
        'flex items-start gap-[6px] p-[16px] border-[1px] rounded-[8px] w-full',
        getColorScheme()
      )}
    >
      {(displayIcon !== false) && <FilteredImage filter={getIconFilter()} src={alertCircle} alt='icon' />}
      <div className='flex flex-col gap-[8px]'>
        <span>{text}</span>
        <ul className='list-disc'>
          {bulletTexts?.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlertBox;
