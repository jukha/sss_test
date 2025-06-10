import React from 'react';
import clsx from 'clsx';

type Props = {
  title: string;
  totalPrice: string;
  countingStr: string;
  underCountingChildren?: React.ReactNode;
  totalPriceSize?: 'sm' | 'md';
  countingStrSalePercent?: string;
  className?: string;
};

const PriceSummaryBlock: React.FC<Props> = ({
  title,
  totalPrice,
  countingStr,
  underCountingChildren,
  totalPriceSize = 'sm',
  countingStrSalePercent,
  className,
}) => {
  return (
    <div className={clsx('font-primary leading-[1.2] pb-2.5 text-offBlack desktop:pb-4', className)}>
      <div className='font-semibold uppercase text-[14px] desktop:text-[20px]'>{title}</div>
      <div
        className={clsx(
          'font-bold mt-1',
          totalPriceSize === 'sm' && 'text-[24px] desktop:text-[32px] -mb-1',
          totalPriceSize === 'md' && 'text-[32px] desktop:text-[48px]'
        )}
      >
        ${totalPrice}
      </div>
      <div className='flex items-center'>
        <div className='text-[10px] font-medium text-[#422019] desktop:text-[14px]'>{countingStr}</div>
        {countingStrSalePercent && (
          <div className='w-max px-[5px] py-[1px] ml-1 rounded-[5px] text-[10px] font-semibold bg-yellow text-red font-primary desktop:text-[14px]'>
            -{countingStrSalePercent}%
          </div>
        )}
      </div>
      {underCountingChildren}
    </div>
  );
};

export default PriceSummaryBlock;
