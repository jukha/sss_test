import React, { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripePaymentElementOptions } from '@stripe/stripe-js';
import { Prisma } from '@/__generated__/prisma';

import CustomCurveButton from '../../shared/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import AlertBox from '../../shared/AlertBox';
import { useRegistrationForm } from '@/context/registration-form.context';
import { accreditedBusinessLogo, blackArrow } from '@/assets';
import { createCustomerAndAttachPaymentMethod } from '@/helpers/payment';
import useDebounce from '@/hooks/use-debounce';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';
import { LessonType } from '@/entities/lesson-package.entity';

import { BuildOnFieldFocusLostHandlerFunction } from '../../../types';
import GoBackTextButton from '../../shared/GoBackTextButton';
import UpgradeLessonsCTA from './components/UpgradeLessonsCTA';
import PromocodeInput from './components/PromocodeInput';
import CheckboxWithText from './components/CheckboxWithText';
import { validateFormStep } from '../../../logic/validation';
import { validatePromocode } from '../../../logic/utils/lesson-package/validate-promocode';
import { generateLessonPackageSelectionOptions } from '../../../logic/utils/lesson-package/lesson-packages-selection';
import { extractLocationPackages } from '../../../logic/utils/lesson-package/extract-location-data';
import { extractStudentAges } from '../../../logic/utils/lesson-package/extract-students-data';
import { extractPackageForUpgrade } from '../../../logic/utils/lesson-package/extract-package-for-upgrade';
import { isEveryoneAdults } from '../../../logic/is-everyone-adults';

const POLICY_URL = 'https://legal-docs-public.s3.us-west-2.amazonaws.com/Swim+Lesson+Agreement+2023_website.pdf';

type Props = {
  onNextClicked: () => void;
  onPreviousClicked: () => void;
  buildOnFieldFocusLostHandler: BuildOnFieldFocusLostHandlerFunction;
};

const RegistrationForm7Internals: React.FC<Props> = ({ onNextClicked, onPreviousClicked, buildOnFieldFocusLostHandler }) => {
  const {
    registrationForm,
    registrationStep,
    registrationErrorsText,
    setRegistrationFormField,
    registrationErrors,
    setRegistrationErrors,
    isLessonPackageSizeUpgradeDeclined,
    setIsLessonPackageSizeUpgradeDeclined,
    setIsUpgradedTo25LessonPackageSize,
    setOneFieldValidationErrors,
  } = useRegistrationForm();
  const { data } = useLocationsAndPricing();
  const {
    zip,
    policiesAgreement,
    youngstersPoliciesAgreement,
    haveCustomerBeenHelpedBy,
    lessonTime,
    packageSize,
    lessonType,
    validatedPromoCode,
    promoDiscount,
    upsell_from,
  } = registrationForm ?? {};

  const [paymentErrorText, setPaymentErrorText] = useState<string | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const showPromocodeInput = !upsell_from || isLessonPackageSizeUpgradeDeclined;

  const [promocode, setPromocode] = useState(() => validatedPromoCode ?? '');
  const debouncedPromocode = useDebounce(promocode, 500);

  const studentAges = extractStudentAges(registrationForm)
  const shouldShowYoungsterPoliciesAgreementCheckbox = !isEveryoneAdults(studentAges);

  const packageSelectionOptions = generateLessonPackageSelectionOptions({
    packages: extractLocationPackages({
      zip,
      zipCodesServiced: data?.zipCodesServiced,
      metroAreas: data?.metroAreas,
      pricing: data?.pricing,
    }),
    studentAges,
    selectedLessonType: lessonType as LessonType,
    selectedLessonLength: lessonTime,
    include25LessonsPackages: true,
  });
  const selectedPackage = packageSelectionOptions.packages.find((pack) => pack.lessonQty === packageSize);
  const packageForUpgrade = extractPackageForUpgrade({
    initialPackageSize: packageSize,
    availablePackages: packageSelectionOptions.packages,
  });
  const shouldShowUpgradeCTA = isLessonPackageSizeUpgradeDeclined ? false : !promocode.length && !upsell_from;

  const handleUpgradeClick = () => {
    if (selectedPackage && packageForUpgrade) {
      setRegistrationFormField('upsell_from', BigInt(selectedPackage.lessonQty));
      setIsLessonPackageSizeUpgradeDeclined(false);
      setRegistrationFormField('packageSize', packageForUpgrade.lessonQty);
      setRegistrationFormField('paidLessons', packageForUpgrade.lessonQty ?? null);

      if (packageForUpgrade.lessonQty === 25) {
        setIsUpgradedTo25LessonPackageSize(true);
      }
    }
  };

  const elements = useElements();
  const stripe = useStripe();

  const handlePayAndConfirmClick = async () => {
    setPaymentErrorText(null);
    setIsProcessingPayment(true);
    const genericErrorMessage = 'An unexpected error has occured. Pls, try again.';
    try {
      let hasError = false;
      let validationErrors = validateFormStep(registrationForm, registrationStep);

      if (shouldShowYoungsterPoliciesAgreementCheckbox && !registrationForm?.youngstersPoliciesAgreement) {
        if (!validationErrors) {
          validationErrors = {}
        } 
        validationErrors['youngstersPoliciesAgreement'] = "Required"
      }

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
        console.log("Couldn't validate payment method.");
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
        console.log("Couldn't register payment method.");
        setPaymentErrorText(genericErrorMessage);
        setIsProcessingPayment(false);
        return;
      }

      if (paymentMethodRegistrationResult.paymentMethod == null) {
        console.log("Couldn't register payment method.");
        setPaymentErrorText(genericErrorMessage);
        setIsProcessingPayment(false);
        return;
      }
      setRegistrationFormField('stripeToken', paymentMethodRegistrationResult.paymentMethod.id)
      
      const finalResult = await createCustomerAndAttachPaymentMethod({
        firstName: registrationForm.firstName!,
        lastName: registrationForm.lastName!,
        email: registrationForm.email!,
        orderId: `${registrationForm.id}`,
        paymentMethodId: paymentMethodRegistrationResult.paymentMethod.id,
      });
      console.log('Customer creation and payment method attaching: ', finalResult);

      if (!finalResult?.success) {
        console.log("Couldn't create customer or attach payment method.");
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
    layout: 'tabs',
    terms: {
      card: 'never',
      applePay: 'never',
      googlePay: 'never',
    },
    paymentMethodOrder: ['applePay', 'googlePay', 'card'],
  };

  useLayoutEffect(() => {
    if (!data?.promoCodes) {
      return;
    }

    const promocodeResult = validatePromocode({
      promocode: debouncedPromocode,
      promocodes: data.promoCodes,
      lessonTime,
      packageSize,
      lessonType: lessonType as LessonType,
    });

    const hasPromocodeBonuses = promocodeResult?.freeLessons || promocodeResult?.salePrice;

    setRegistrationFormField('validatedPromoCode', hasPromocodeBonuses ? promocode : null);
    setRegistrationFormField('freeLessons', promocodeResult?.freeLessons ?? null);
    setRegistrationFormField(
      'promoDiscount',
      promocodeResult?.salePrice ? (promocodeResult.salePrice as unknown as Prisma.Decimal) : null
    );
  }, [debouncedPromocode, packageSize]);

  return (
    <div className='flex flex-col gap-8 desktop:gap-6'>
      <GoBackTextButton text='Checkout' onClick={onPreviousClicked} />

      <div className='font-medium font-secondary'>
        You will not be billed until you have been matched with a Sunsational Swim Instructor
      </div>

      {shouldShowUpgradeCTA && packageForUpgrade && selectedPackage && (
        <UpgradeLessonsCTA
          lessonsCount={`${packageForUpgrade.lessonQty}`}
          oldLessonPrice={selectedPackage.price ? `${selectedPackage.price}` : ''}
          newLessonPrice={packageForUpgrade.price ? `${packageForUpgrade.price}` : ''}
          onNoClick={() => setIsLessonPackageSizeUpgradeDeclined(true)}
          onUpgradeClick={handleUpgradeClick}
        />
      )}

      {showPromocodeInput && (
        <>
          <PromocodeInput
            value={promocode}
            onChange={setPromocode}
            savedUSD={promoDiscount ? promoDiscount.toString() : undefined}
            valid={Boolean(validatedPromoCode)}
            error={
              debouncedPromocode.length > 0 && !validatedPromoCode
                ? 'Woops, this is promo code is invalid or expired'
                : undefined
            }
          />

          {debouncedPromocode.length > 0 && (
            <p className='text-sm'>
              Promo codes cannot be used with bonus upgrade offers.
              <br />
              Remove promo code to see your upgrade offer.
            </p>
          )}
        </>
      )}

      <CheckboxWithText
        checked={Boolean(policiesAgreement)}
        onChange={(value) => {
          setRegistrationFormField('policiesAgreement', value);
        }}
        text={
          <>
            I have read and agree to the{' '}
            <a href={POLICY_URL} className='text-darkBlue' target='_blank'>
              Liability Release, Assumption of Risk and Policies
            </a>
          </>
        }
        error={registrationErrors?.policiesAgreement && 'Required'}
      />

      {shouldShowYoungsterPoliciesAgreementCheckbox && (
        <CheckboxWithText
          checked={Boolean(youngstersPoliciesAgreement)}
          onChange={(value) => {
            setRegistrationFormField('youngstersPoliciesAgreement', value);
            setOneFieldValidationErrors({ youngstersPoliciesAgreement: undefined })
          }}
          text='I understand that for swimmers under 18 years of age, a parent or guardian must provide direct supervision at all times during lessons. I also acknowledge that a parent or guardian is required to be in the water with all swimmers under 2 years old.'
          error={registrationErrors?.youngstersPoliciesAgreement && 'Required'}
        />
      )}

      <PaymentElement options={options} />

      <div className='flex flex-col gap-4 desktop:flex-row desktop:gap-6'>
      <Image src={accreditedBusinessLogo} alt='' className='w-[200px] h-[60px]' />
      <p className='w-[270px] flex items-start px-4 py-2 bg-lightGray rounded-lg text-xs font-medium leading-[1.2]'>
      🔒&nbsp;
      <span>View our privacy policy for more information on how we securely collect and store your data</span>
      </p>
      </div>

      { policiesAgreement && (
        <CustomInput
          text='Have you been helped by a Sunsational representative?'
          name='haveCustomerBeenHelpedBy'
          placeholder='Please enter their name'
          error={registrationErrors?.haveCustomerBeenHelpedBy}
          value={haveCustomerBeenHelpedBy || ''}
          onChange={(e) => {
            setRegistrationFormField('haveCustomerBeenHelpedBy', e.target.value);
          }}
          onBlur={buildOnFieldFocusLostHandler('haveCustomerBeenHelpedBy')}
          className='w-full opacity-40'
        />
      )}

      {registrationErrorsText && <AlertBox type='error' text={registrationErrorsText} />}

      {paymentErrorText && <AlertBox type='error' text={paymentErrorText} />}

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
        <GoBackTextButton size='small' text='Back to pool details' onClick={onPreviousClicked} />
      </div>
    </div>
  );
};

export default RegistrationForm7Internals;
