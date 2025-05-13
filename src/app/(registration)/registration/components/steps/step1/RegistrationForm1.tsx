'use client';

import { DeepPartial, useForm } from 'react-hook-form';
import CustomButton from '@/components/CustomButton';
import CustomCurveButton from '@/components/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
// import { registrationFormStore } from '@/stores/registration-form.store';
import { useEffect } from 'react';
import { blackArrow, placeMarker } from '@/assets';
import { extractRequiredFieldsFromObject } from '@/helpers/extract-required-fields-from-object';
import clsx from 'clsx';
// import { validateNumberInput } from '@/helpers/validate-number-input';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import GoBackTextButton from '../../shared/GoBackTextButton';
import AlertBox from '../../shared/AlertBox';
import { useRegistrationForm } from '@/context/registration-form.context';

type Props = {
  onNext: (data: FormValues, step: RegistrationStepEnum) => void;
  loading: boolean;
};

type FormValues = {
  zip: string | null;
  customerHasAccessToPool: boolean | null;
};

const formDefaultValues: DeepPartial<FormValues> = {
  zip: null,
  customerHasAccessToPool: null,
};

const RegistrationForm1: React.FC<Props> = ({ onNext, loading }) => {
  const { registrationForm, registrationErrors } = useRegistrationForm();
  const {
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormValues>({
    defaultValues: formDefaultValues,
  });

  const customerHasAccessToPool = watch('customerHasAccessToPool');
  const zipValue = watch('zip');

  useEffect(() => {
    if (registrationForm) {
      const values = getValues();
      reset(extractRequiredFieldsFromObject(registrationForm, values));
    }
  }, [registrationForm, reset]);

  useEffect(() => {
    if (!registrationErrors) {
      return;
    }

    for (const [k, v] of Object.entries(registrationErrors)) {
      if (Object.keys(formDefaultValues).includes(k)) {
        setError(k as keyof FormValues, { type: 'custom', message: v });
      }
    }
  }, [registrationErrors]);

  const onSubmit = async (data: FormValues) => {
    onNext(data, RegistrationStepEnum.Step1);
  };

  const handleChangeValue = (
    field: 'zip' | 'customerHasAccessToPool',
    value: string | boolean
  ) => {
    setValue(field, value);
    clearErrors(field);
  };

  const getZipCodeValue = () => {
    return zipValue || '';
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex  flex-col gap-[30px] items-center w-full'
    >
      <GoBackTextButton text='Check Availability' />

      <CustomInput
        text='Zip Code'
        maxLength={5}
        value={getZipCodeValue()}
        error={errors.zip?.message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeValue('zip', e.target.value)
        }
        icon={placeMarker}
      />

      <div className='flex flex-col gap-[10px] w-full'>
        <div className='flex justify-between w-full'>
          <span>Do you have access to pool?*</span>
          <span
            className={clsx(
              'text-red',
              errors.customerHasAccessToPool ? 'opacity-100' : 'opacity-0'
            )}
          >
            {errors.customerHasAccessToPool?.message || 'error'}
          </span>
        </div>

        <div className='flex gap-[16px]'>
          <CustomButton
            text='Yes'
            width='50%'
            onClick={() => handleChangeValue('customerHasAccessToPool', true)}
            isActive={customerHasAccessToPool === true}
          />
          <CustomButton
            text='No'
            width='50%'
            onClick={() => handleChangeValue('customerHasAccessToPool', false)}
            isActive={customerHasAccessToPool === false}
          />
        </div>
      </div>

      {(errors.zip || errors.customerHasAccessToPool) && (
        <AlertBox
          type='error'
          text='Woops looks like some info is missing. Please provide ZIP, do you have access to a pool or not?'
        />
      )}

      {customerHasAccessToPool === false && (
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
        disabled={Object.keys(errors).length > 0 || loading}
        text={loading ? 'Loading' : 'Continue'}
        icon={!loading && blackArrow}
      />
    </form>
  );
};

export default RegistrationForm1;
