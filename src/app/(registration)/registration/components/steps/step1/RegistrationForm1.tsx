'use client';

import CustomButton from '../../shared/CustomButton';
import CustomCurveButton from '../../shared/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import { useState } from 'react';
import { blackArrow, placeMarker } from '@/assets';
import clsx from 'clsx';
import GoBackTextButton from '../../shared/GoBackTextButton';
import AlertBox from '../../shared/AlertBox';
import { useRegistrationForm } from '@/context/registration-form.context';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';
import { checkServiceabilityByZip } from '@/utils/check-serviceability-by-zip';
import { ServiceabilityErrorEnum } from '@/enum/serviceability-error.enum';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { validateFormStep } from '../../../logic/validation';
import { BuildOnFieldFocusLostHandlerFunction } from '../../../types';

const SERVICEABILITY_ERROR_TO_STEP_MAPPING = {
  [ServiceabilityErrorEnum.NoPools]: RegistrationStepEnum.Step1NoPoolsError,
  [ServiceabilityErrorEnum.OutsideArea]: RegistrationStepEnum.Step1OutsideAreaError,
}

type Props = {
  onNextClicked: (options?: {shouldNotSwitchToNextStep?: boolean}) => Promise<void>;
  buildOnFieldFocusLostHandler: BuildOnFieldFocusLostHandlerFunction;
  registrationDataIsLoading: boolean;
};

const prepareZipValue = (v: string) => v.replace(/\D/gi, '').slice(0, 5);

const RegistrationForm1 = ({
  onNextClicked,
  buildOnFieldFocusLostHandler,
  registrationDataIsLoading
}: Props) => {

  const {
    registrationForm,
    setRegistrationFormField,
    registrationErrors,
    registrationErrorsText,
    // setZipCodeError,
    registrationStep,
    setRegistrationStep,
    setRegistrationErrors,
  } = useRegistrationForm();

  const locationsAndPricing = useLocationsAndPricing();

  const [checkingServiceability, setCheckingServiceability] = useState(false);

  const onZipFocusLost = buildOnFieldFocusLostHandler('zip');

  const loading =
    locationsAndPricing.loading ||
    registrationDataIsLoading ||
    checkingServiceability;
  
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationFormField('zip', prepareZipValue(e.target.value));
    setRegistrationFormField('poolAddress', null);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!locationsAndPricing.data) {
      throw new Error('Not loaded yet');
    }

    const validationErrors = validateFormStep(registrationForm, registrationStep);

    if (validationErrors) {
      setRegistrationErrors(validationErrors);
      return;
    } else {
      setRegistrationErrors({});
    }

    const serviceabilityCheckOptions = {
      zipCode: registrationForm?.zip || '',
      requirePool: !registrationForm?.customerHasAccessToPool,
      locationsAndPricing: locationsAndPricing.data,
    }

    setCheckingServiceability(true);

    const serviceabilityError = await checkServiceabilityByZip(serviceabilityCheckOptions)
      .finally(() => setCheckingServiceability(false));

    if (!serviceabilityError) {
      await onNextClicked();
      return;
    }

    setRegistrationStep(SERVICEABILITY_ERROR_TO_STEP_MAPPING[serviceabilityError]);
    await onNextClicked({shouldNotSwitchToNextStep: true});
  };

  const getZipCodeValue = () => {
    return registrationForm?.zip || '';
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex  flex-col gap-[30px] items-center w-full'
    >
      <GoBackTextButton text='Check Availability' />

      <CustomInput
        text='Zip Code'
        maxLength={5}
        value={getZipCodeValue()}
        error={registrationErrors?.zip}
        onChange={handleZipChange}
        onBlur={onZipFocusLost}
        icon={placeMarker}
        inputMode='numeric'
      />

      <div className='flex flex-col gap-[10px] w-full'>
        <div className='flex justify-between w-full'>
          <span>Do you have access to pool?*</span>
          <span
            className={clsx(
              'text-red',
              registrationErrors?.customerHasAccessToPool ? 'opacity-100' : 'opacity-0',
            )}
          >
            {registrationErrors?.customerHasAccessToPool || 'error'}
          </span>
        </div>

        <div className='flex gap-[16px]'>
          <CustomButton
            text='Yes'
            width='50%'
            onClick={() => setRegistrationFormField('customerHasAccessToPool', true)}
            isActive={registrationForm?.customerHasAccessToPool === true}
          />
          <CustomButton
            text='No'
            width='50%'
            onClick={() => setRegistrationFormField('customerHasAccessToPool', false)}
            isActive={registrationForm?.customerHasAccessToPool === false}
          />
        </div>
      </div>

      {registrationErrorsText && (
        <AlertBox
          type='error'
          text={registrationErrorsText}
        />
      )}

      {registrationForm?.customerHasAccessToPool === false && (
        <AlertBox
          type='info'
          text='If you don’t have access to one of the following pool types, you can change your answer to yes.'
          bulletTexts={[
            'Housing community pool (condo, HOA, etc)',
            'Friend or family pool',
            'Gym pool (ask for permission prior to registering)',
            'Public pools (ask for permission prior to registering)',
          ]}
        />
      )}

      <CustomCurveButton
        type='submit'
        disabled={loading}
        text={loading ? 'Loading...' : 'Continue'}
        icon={!loading && blackArrow}
      />
    </form>
  );
};

export default RegistrationForm1;
