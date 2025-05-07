'use client';

import { DeepPartial, useForm } from 'react-hook-form';
import CustomButton from '@/components/CustomButton';
import CustomCurveButton from '@/components/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import { registrationFormStore } from '@/stores/registration-form.store';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { blackArrow, placeMarker } from '@/assets';
import AlertBox from '@/components/AlertBox';
import { extractRequiredFieldsFromObject } from '@/helpers/extract-required-fields-from-object';
import clsx from 'clsx';
import { registrationStepRepository } from '@/repositories/registration/registration-step.repository';
import { validateNumberInput } from '@/helpers/validate-number-input';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import GoBackTextButton from '@/components/GoBackTextButton';

type Props = {
  onNext: (data: FormValues, step: RegistrationStepEnum) => void;
  disableInputs: boolean;
};

type FormValues = {
  zipCode: number | null;
  poolAccess: boolean | null;
};

const formDefaultValues: DeepPartial<FormValues> = {
  zipCode: null,
  poolAccess: null,
};

const RegistrationForm1: React.FC<Props> = observer(
  ({ onNext, disableInputs }) => {
    const { registrationForm } = registrationFormStore;
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

    const poolAccess = watch('poolAccess');
    const zipValue = watch('zipCode');

    useEffect(() => {
      if (registrationForm) {
        const values = getValues();
        reset(extractRequiredFieldsFromObject(registrationForm, values));
      }
    }, [registrationForm, reset]);

    useEffect(() => {
      if (!registrationStepRepository.validationErrors) {
        return;
      }

      for (const [k, v] of Object.entries(
        registrationStepRepository.validationErrors
      )) {
        if (Object.keys(formDefaultValues).includes(k)) {
          setError(k as keyof FormValues, { type: 'custom', message: v });
        }
      }
    }, [registrationStepRepository.validationErrors]);

    const onSubmit = async (data: FormValues) => {
      onNext(data, RegistrationStepEnum.Step1);
    };

    const handleChangeValue = (
      field: 'zipCode' | 'poolAccess',
      value: number | boolean
    ) => {
      setValue(field, value);
      clearErrors(field);
    };

    const getZipCodeValue = () => {
      if (zipValue === null || zipValue === 0) return '';
      return String(zipValue);
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
          error={errors.zipCode?.message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeValue('zipCode', validateNumberInput(e.target.value))
          }
          icon={placeMarker}
        />

        <div className='flex flex-col gap-[10px] w-full'>
          <div className='flex justify-between w-full'>
            <span>Do you have access to pool?*</span>
            <span
              className={clsx(
                'text-red',
                errors.poolAccess ? 'opacity-100' : 'opacity-0'
              )}
            >
              {errors.poolAccess?.message || 'error'}
            </span>
          </div>

          <div className='flex gap-[16px]'>
            <CustomButton
              text='Yes'
              width='50%'
              onClick={() => handleChangeValue('poolAccess', true)}
              isActive={poolAccess === true}
            />
            <CustomButton
              text='No'
              width='50%'
              onClick={() => handleChangeValue('poolAccess', false)}
              isActive={poolAccess === false}
            />
          </div>
        </div>

        {(errors.zipCode || errors.poolAccess) && (
          <AlertBox
            type='error'
            text='Woops looks like some info is missing. Please provide ZIP, do you have access to a pool or not?'
          />
        )}

        {poolAccess === false && (
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
          disabled={Object.keys(errors).length > 0 || disableInputs}
          text='Continue'
          icon={blackArrow}
        />
      </form>
    );
  }
);

export default RegistrationForm1;
