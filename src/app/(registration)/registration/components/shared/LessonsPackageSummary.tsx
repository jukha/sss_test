import React from 'react';
import { CurvySquareWithBorder } from '@/components/icons';
import PriceSummaryBlock from './PriceSummaryBlock';
import clsx from 'clsx';
import ContactDetailsBlock from './ContactDetailsBlock';
import { ContactDetails, LessonPackageSummary } from '../../logic/utils/lesson-package/lesson-packages-summary';

type Props = {
  studentsCount: number;
  summary: LessonPackageSummary;
  contactDetails?: ContactDetails;
  isOrderConfirmed?: boolean;
};

const Divider = () => <div className='h-0.5 bg-orange opacity-25 desktop:h-1' />;

const LessonsPackageSummary = ({ studentsCount, summary, contactDetails, isOrderConfirmed }: Props) => {
  const lessonsCountingStr = `${summary.packageSize} x ${summary.lessonTime} Minutes Lessons @ $${summary.lessonPrice}`;
  const studentsCountingStr = `${studentsCount} Students x $${summary.registrationFee}`;

  return (
    <div className='max-w-[540] mx-auto'>
      <p className='font-bold text-[24px] leading-[1.2] text-center font-primary text-offBlack desktop:text-[32px] desktop:mb-2'>
        {isOrderConfirmed ? (
          <span className='text-center text-orange'>
            Your Order has been
            <br />
            Confirmed
          </span>
        ) : (
          <>
            Cost per lesson per student:
            <br />
            <span className='text-[32px] desktop:text-[48px]'>${summary.costPerLessonPerStudent.toFixed(2)}</span>
          </>
        )}
      </p>

      <div className='relative py-[32px] px-[24px] desktop:py-[32px] desktop:px-[45px]'>
        <div className={clsx('relative z-1 ', isOrderConfirmed && 'h-[320px] overflow-y-scroll desktop:h-[400px]')}>
          <div>
            <p className='font-bold font-primary text-[24px] desktop:text-[32px]'>Lesson package summary</p>

            <Divider />

            <PriceSummaryBlock
              title='SWIMMING LESSONS'
              totalPrice={`${summary.totalLessonsPrice}`}
              countingStr={lessonsCountingStr}
              countingStrSalePercent={
                Boolean(summary.lessonDiscountPercent) ? `${summary.lessonDiscountPercent}` : undefined
              }
              className='mt-4 desktop:mt-5'
            />

            <PriceSummaryBlock
              title='REGISTRATION FEE'
              totalPrice={`${summary.totalRegistrationFee}`}
              countingStr={studentsCountingStr}
            />

            <Divider />

            <PriceSummaryBlock
              title='CURRENT SELECTION TOTAL'
              totalPrice={`${summary.orderTotal}`}
              totalPriceSize='md'
              countingStr={`${lessonsCountingStr} & ${studentsCountingStr}`}
              className='mt-4'
            />

            {Boolean(summary.lessonDiscountPercent) && (
              <div className='font-semibold font-primary text-[12px] desktop:text-base'>
                You&apos;re{' '}
                <span className='inline-block px-1 leading-4 rounded-[12px] bg-yellow text-red desktop:py-0.5 desktop:px-1.5'>
                  saving {summary.lessonDiscountPercent}%
                </span>{' '}
                with this package!
              </div>
            )}
          </div>

          {isOrderConfirmed && contactDetails && (
            <div className='min-h-[100%]'>
              <p className='mt-8 font-bold text-[24px] leading-[1.2] font-primary text-offBlack desktop:text-[32px] desktop:mb-2'>
                Contact Details
              </p>

              <Divider />

              <div className='flex flex-col gap-3 mt-4 desktop:gap-4'>
                <ContactDetailsBlock label='Name' description={contactDetails.fullName} />
                <ContactDetailsBlock label='Email' description={contactDetails.email} />
                <ContactDetailsBlock label='Phone' description={contactDetails.phone} />
                <ContactDetailsBlock label='Address' description={contactDetails.address} />
              </div>
            </div>
          )}
        </div>

        <CurvySquareWithBorder className='absolute top-0 left-[-2.5%] w-[105%] h-full' />
      </div>
    </div>
  );
};

export default LessonsPackageSummary;
