import React, { useState } from 'react';
import Image from 'next/image';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripePaymentElementOptions } from '@stripe/stripe-js';

import CustomCurveButton from '@/components/CustomCurveButton';
import { CustomCheckbox } from '@/components/CustomCheckbox';
import AlertBox from '../../shared/AlertBox';
import { useRegistrationForm } from '@/context/registration-form.context';
import { accreditedBusinessLogo, blackArrow } from '@/assets';

import GoBackTextButton from '../../shared/GoBackTextButton';
import UpgradeLessonsCTA from './components/UpgradeLessonsCTA';

import { validateFormStep } from '../../../logic/validation';
import { createCustomerAndAttachPaymentMethod } from '@/helpers/payment';

const POLICY_URL =
  'https://legal-docs-public.s3.us-west-2.amazonaws.com/Swim+Lesson+Agreement+2023_website.pdf';

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
};

const RegistrationForm7Internals: React.FC<Props> = ({
  onNextClicked,
  onPreviousClicked,
}) => {
  const {
    registrationForm,
    registrationStep,
    registrationErrorsText,
    setRegistrationFormField,
    setRegistrationErrors,
  } = useRegistrationForm();
  const { policiesAgreement } = registrationForm ?? {};

  const [showPromocodeInput, setShowPromocodeInput] = useState(false);
  const [paymentErrorText, setPaymentErrorText] = useState<string | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const elements = useElements();
  const stripe = useStripe();

  const handlePayAndConfirmClick = async () => {
    setPaymentErrorText(null);
    setIsProcessingPayment(true);
    const genericErrorMessage = 'An unexpected error has occured. Pls, try again.';
    try {
      let hasError = false;
      const validationErrors = validateFormStep(registrationForm, registrationStep);

      if (validationErrors) {
        setRegistrationErrors(validationErrors);
        hasError = true;
      } else {
        setRegistrationErrors({});
      }

      if (elements == null) {
        setPaymentErrorText(genericErrorMessage);
        setIsProcessingPayment(false);
        return;
      }

      if (stripe == null) {
        setPaymentErrorText(genericErrorMessage);
        setIsProcessingPayment(false);
        return;
      }

      if (registrationForm == null) {
        setPaymentErrorText(genericErrorMessage);
        setIsProcessingPayment(false);
        return;
      }

      console.log('starting validation...');
      const paymentMethodValidationResult = await elements.submit();
      console.log('PaymentMethod validation: ', paymentMethodValidationResult);
      if (paymentMethodValidationResult == null || paymentMethodValidationResult?.error) {
        console.log('Couldn\'t validate payment method.');
        console.log(paymentMethodValidationResult?.error?.message);
        hasError = true;
      }

      if (hasError) {
        setIsProcessingPayment(false);
        return;
      }

      const paymentMethodRegistrationResult = await stripe.createPaymentMethod({
        elements,
      });
      console.log('Payment method registration: ', paymentMethodRegistrationResult);
      if (paymentMethodRegistrationResult == null) {
        console.log('Couldn\'t register payment method.');
        setPaymentErrorText(genericErrorMessage);
        setIsProcessingPayment(false);
        return;
      }

      if (paymentMethodRegistrationResult.paymentMethod == null) {
        console.log('Couldn\'t register payment method.');
        setPaymentErrorText(genericErrorMessage);
        setIsProcessingPayment(false);
        return;
      }
      const finalResult = await createCustomerAndAttachPaymentMethod({
        firstName: registrationForm.firstName!,
        lastName: registrationForm.lastName!,
        email: registrationForm.email!,
        orderId: `${registrationForm.id}`,
        paymentMethodId: paymentMethodRegistrationResult.paymentMethod.id,
      });
      console.log('Customer creation and payment method attaching: ', finalResult);

      if (!finalResult?.success) {
        console.log('Couldn\'t create customer or attach payment method.');
        setPaymentErrorText(genericErrorMessage);
        setIsProcessingPayment(false);
        return;
      }

      setRegistrationFormField('isRegistrationComplete', true);
      onNextClicked();
      setIsProcessingPayment(false);

    } catch (err) {
      console.log(err);
      setPaymentErrorText(genericErrorMessage);
      setIsProcessingPayment(false);
    }
  };

  const options: StripePaymentElementOptions = {
    terms: {
      card: 'never',
      applePay: 'never',
      googlePay: 'never',
    },
    paymentMethodOrder: ['applePay','googlePay','card'],
  };

  return (
    <div className='flex flex-col gap-8 desktop:gap-6'>
      <GoBackTextButton text='Checkout' onClick={onPreviousClicked} />

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

      <PaymentElement options={options} />

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

      {registrationErrorsText && (
        <AlertBox
          type='error'
          text={registrationErrorsText}
        />
      )}

      {paymentErrorText && (
        <AlertBox
          type='error'
          text={paymentErrorText}
        />
      )}

      <div className='flex justify-center'>
        <div className='max-w-[251px] my-auto desktop:max-w-[342px]'>
          <CustomCurveButton
            onClick={handlePayAndConfirmClick}
            disabled={isProcessingPayment || !elements || !stripe}
            text={isProcessingPayment ? 'Processing...' : 'Pay & Confirm'}
            icon={blackArrow}
          />
        </div>
      </div>

      <div className='flex justify-center'>
        <GoBackTextButton
          size='small'
          text='Back to pool details'
          onClick={onPreviousClicked}
        />
      </div>
    </div>
  );
};

export default RegistrationForm7Internals;
