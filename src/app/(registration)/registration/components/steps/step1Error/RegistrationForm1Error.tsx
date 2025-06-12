'use client';

import { blackArrow, mail } from '@/assets';
import CustomCurveButton from '../../shared/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import { useForm } from 'react-hook-form';
import GoBackTextButton from '../../shared/GoBackTextButton';
import { useRegistrationForm } from '@/context/registration-form.context';
import { useState } from 'react';
import clsx from 'clsx';
import { apiClient } from '@/api_client/api.client';

type ErrorType = 'outsideArea' | 'noPools';

type Props = {
  errorType: ErrorType;
  onPreviousClicked: () => void;
};

const errorText: Record<ErrorType, string> = {
  outsideArea:
    'Unfortunately, it seems you’re outside our service area, but we’re always expanding.',
  noPools:
    'Unfortunately, we don’t have any instructors with pool access in your area.',
};

const errorDescription: Record<ErrorType, string> = {
  outsideArea:
    'We noted your zip. We’ll notify you when Sunsational is available in your area!',
  noPools:
    'We have excellent instructors in your area, but we can’t provide pool access. We can notify you when we’re able to provide a pool, or you can change your pool access to yes to continue your registration. You will need to have a pool address to complete the registration.',
};

const goBachButtonText: Record<ErrorType, string> = {
  outsideArea: 'Try another zip code',
  noPools: 'Change my pool access to Yes',
};

const successMessage = 'We got it! We\'ll let you know when Sunsational can provide pool access in your area!';

type FormValues = {
  email: string | null;
};

const formDefaultValues: FormValues = {
  email: null,
};

const RegistrationForm1Error: React.FC<Props> = ({
  errorType,
  onPreviousClicked
}) => {
  const { registrationForm } = useRegistrationForm();

  const { handleSubmit, register, setError, formState: {errors} } = useForm<FormValues>({
    defaultValues: formDefaultValues,
  });

  const [sending, setSending] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const validateEmail = async (email: FormValues['email']) => {
    if (!email) {
      setError('email', {type: 'required', message: 'This field is required'});
      return false;
    }

    const validationResult = (await apiClient.emailValidation.validateSingle(email)).data;

    if (!validationResult.isValid) {
      setError('email', {type: 'custom', message: validationResult.errorMessage});
      return false;
    }

    return true;
  }

  const onSubmit = async (data: FormValues) => {
    try {
      setSending(true);
      const emailIsValid = await validateEmail(data.email);

      if (!emailIsValid) {
        setSending(false);
        return;
      }

      await apiClient.notifyMe.notify({email: data.email!, zip: registrationForm?.zip || ''});
      setSending(false);
      setShowSuccessMessage(true);

    } catch (err) {
      console.log(err);
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-[55px] items-center w-full'
    >
      <div className='flex flex-col gap-[30px] items-center w-full'>
        <GoBackTextButton
          text={'Zip code'}
          onClick={onPreviousClicked}
        />
        
        <h4 className='px-[20px] text-center'>
          {errorText[errorType]}
        </h4>

        <h4 className='px-[20px] text-center'>
          {showSuccessMessage ? successMessage : errorDescription[errorType]}
        </h4>

        <CustomInput
          {...register('email')}
          text='Your email address*'
          icon={mail}
          className={clsx(showSuccessMessage && 'hidden')}
          error={errors.email?.message}
        />
      </div>

      <div className='flex flex-col gap-[30px] items-center w-full'>
        {!showSuccessMessage &&
          <CustomCurveButton
            type='submit'
            text={sending ? 'Sending...' : 'Notify Me'}
            icon={blackArrow}
            disabled={sending}
          />
        }

        <GoBackTextButton
          text={goBachButtonText[errorType]}
          onClick={onPreviousClicked}
          size='small'
        />
      </div>
    </form>
  );
};

export default RegistrationForm1Error;
