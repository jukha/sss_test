import React from 'react';
import { CurvySquareWithBorder } from '@/components/icons';
import PriceSummaryBlock from './PriceSummaryBlock';

type Props = {
  costPerLessonPerStudent: string;
  lessons: {
    totalPrice: string;
    /** @example `18 x 30 Minute Lesson @ $90` */
    countingString: string;
    salePercent?: string;
  };
  fee: {
    totalPrice: string;
    /** @example `18 x 30 Minute Lesson @ $90` */
    countingString: string;
  };
  summary: {
    totalPrice: string;
    /** @example `18 x 30 Minute Lesson @ $90` */
    countingString: string;
    savingPercent: string;
  };
};

const LessonsPackageSummary: React.FC<Props> = ({
  costPerLessonPerStudent,
  lessons,
  fee,
  summary,
}) => {
  return (
    <div>
      <p className='font-bold text-[24px] leading-[1.2] text-center font-primary text-offBlack desktop:text-[32px] desktop:mb-2'>
        Cost per lesson per student:
        <br />
        <span className='text-[32px] desktop:text-[48px]'>
          ${costPerLessonPerStudent}
        </span>
      </p>
      <div className='relative py-[32px] px-[24px] desktop:py-[32px] desktop:px-[45px]'>
        <div className='relative z-1'>
          <p className='font-bold font-primary text-[24px] desktop:text-[32px]'>
            Lesson package summary
          </p>

          <Divider />

          <PriceSummaryBlock
            title='SWIMMING LESSONS'
            totalPrice={lessons.totalPrice}
            countingStr={lessons.countingString}
            countingStrSalePercent={lessons.salePercent}
            className='mt-4 desktop:mt-5'
          />

          <PriceSummaryBlock
            title='REGISTRATION FEE'
            totalPrice={fee.totalPrice}
            countingStr={fee.countingString}
          />

          <Divider />

          <PriceSummaryBlock
            title='CURRENT SELECTION TOTAL'
            totalPrice={summary.totalPrice}
            totalPriceSize='md'
            countingStr={summary.countingString}
            className='mt-4'
          />

          <div className='font-semibold font-primary text-[12px] desktop:text-base'>
            You&apos;re{' '}
            <span className='inline-block px-1 leading-4 rounded-[12px] bg-yellow text-red desktop:py-0.5 desktop:px-1.5'>
              saving {summary.savingPercent}%
            </span>{' '}
            with this package!
          </div>
        </div>

        <CurvySquareWithBorder className='absolute top-0 left-[-2.5%] w-[105%] h-full' />
      </div>
    </div>
  );
};

export default LessonsPackageSummary;

const Divider: React.FC = () => (
  <div className='h-0.5 bg-orange opacity-25 desktop:h-1' />
);
