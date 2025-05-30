import React, { useState } from 'react';
import Image from 'next/image';

import CustomCurveButton from '@/components/CustomCurveButton';
import { CustomCheckbox } from '@/components/CustomCheckbox';
import { usePaymentDetails } from '@/context/payment-datails.context';
import { useRegistrationForm } from '@/context/registration-form.context';
import { accreditedBusinessLogo, blackArrow } from '@/assets';

import GoBackTextButton from '../../shared/GoBackTextButton';
import UpgradeLessonsCTA from './components/UpgradeLessonsCTA';
import CreditCardDetails from './components/CreditCardDetails';

const POLICY_URL =
  'https://legal-docs-public.s3.us-west-2.amazonaws.com/Swim+Lesson+Agreement+2023_website.pdf';

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
};

const RegistrationForm7: React.FC<Props> = ({
  onNextClicked,
  onPreviousClicked,
}) => {
  const {
    registrationForm,
    setRegistrationFormField,
  } = useRegistrationForm();
  const { policiesAgreement } = registrationForm ?? {};

  const { creditCardData, setCreditCardData } = usePaymentDetails();
  const [showPromocodeInput, setShowPromocodeInput] = useState(false);

  const handlePayAndConfirmClick = () => {
    onNextClicked();
  };
  const onPrevClick = () => {
    onPreviousClicked();
  };

  return (
    <div className='flex flex-col gap-8 desktop:gap-6'>
      <GoBackTextButton text='Checkout' onClick={onPrevClick} />

      <div className='font-medium font-secondary'>
        You will not be billed until you have been matched with a Sunsational
        Swim Instructor
      </div>

      {/* TODO receive data from reg form */}
      <UpgradeLessonsCTA
        lessonsCount='25'
        oldLessonPrice='59'
        newLessonPrice='57.00'
      />

      <CreditCardDetails
        initialDetails={creditCardData}
        onChange={setCreditCardData}
      />

      <div>
        {showPromocodeInput ? (
          <input
            type='text'
            className='py-[8px] px-[16px] w-full outline-none rounded-[10px] border-[2px] border-gray focus:border-yellow'
          />
        ) : (
          <button
            onClick={() => setShowPromocodeInput(true)}
            className='text-darkBlue font-medium font-secondary'
          >
            Have a promo code?
          </button>
        )}
      </div>

      <div className='flex items-start justify-start gap-4 py-4 pl-6 pr-8 border-[2px] rounded-lg bg-lightBlue border-blue desktop:gap-2'>
        <CustomCheckbox
          className='w-max'
          checked={policiesAgreement}
          onClick={(value) => { setRegistrationFormField('policiesAgreement', value); }}
        />
        <p className='leading-[1.2] font-medium'>
          I have read and agree to the{' '}
          <a href={POLICY_URL} className='text-darkBlue' target='_blank'>
            Liability Release, Assumption of Risk and Policies
          </a>
        </p>
      </div>

      <div className='flex flex-col gap-4 desktop:flex-row desktop:gap-6'>
        <Image
          src={accreditedBusinessLogo}
          alt=''
          className='w-[200px] h-[60px]'
        />
        <p className='w-[270px] flex items-start px-4 py-2 bg-lightGray rounded-lg text-xs font-medium leading-[1.2]'>
          🔒&nbsp;
          <span>
            View our privacy policy for more information on how we securely
            collect and store your data
          </span>
        </p>
      </div>

      <div className='flex justify-center'>
        <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
          <CustomCurveButton
            onClick={handlePayAndConfirmClick}
            text='Pay & Confirm'
            icon={blackArrow}
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <GoBackTextButton
          size='small'
          text='Back to pool details'
          onClick={onPrevClick}
        />
      </div>
    </div>
  );
};

export default RegistrationForm7;
