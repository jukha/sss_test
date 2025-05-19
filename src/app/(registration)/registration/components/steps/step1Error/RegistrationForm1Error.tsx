'use client';

import {blackArrow, mail} from '@/assets';
import CustomCurveButton from '@/components/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import {notifyMeRegistrationRepository} from '@/repositories/registration/notify-me-registration.repository';
import {useForm} from 'react-hook-form';
import GoBackTextButton from '../../shared/GoBackTextButton';
import {useRegistrationForm} from '@/context/registration-form.context';
import {useState} from 'react';
import clsx from 'clsx';
import {sendgrid} from '@/sendgrid';

type ErrorType = 'outsideArea' | 'noPools';

type Props = {
  errorType: ErrorType;
  onPreviousClicked: () => void;
  // onBack: (options: {resetPool?: boolean, resetZip?: boolean}) => void;
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
  const { handleSubmit, register, setError, formState: {errors} } = useForm<FormValues>({
    defaultValues: formDefaultValues,
  });

  const [loading, setLoading] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { registrationForm } = useRegistrationForm();

  const validateEmail = async (email: FormValues['email']) => {
    if (!email) {
      setError('email', {type: 'required', message: 'This field is required'});
      return false;
    }

    setLoading(true);
    const emailIsValid = await sendgrid.validateEmail(email);
    setLoading(false);

    if (!emailIsValid) {
      setError('email', {type: 'custom', message: 'Email is invalid'});
      return false;
    }

    return true;
  }

  const onSubmit = async (data: FormValues) => {
    if (!await validateEmail(data.email)) return;

    notifyMeRegistrationRepository.post({ data: {...data, zip: registrationForm?.zip} });
    setShowSuccessMessage(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-[55px] items-center w-full'
    >
      <div className='flex flex-col gap-[30px] items-center w-full'>
        <GoBackTextButton
          text={errorText[errorType]}
          onClick={onPreviousClicked}
        />

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
            text={loading ? 'Loading...' : 'Notify Me'}
            icon={blackArrow}
            disabled={loading}
          />
        }

        <GoBackTextButton
          text={goBachButtonText[errorType]}
          onClick={onPreviousClicked}
          // onClick={() => onBack({resetPool: errorType === 'noPools', resetZip: errorType === 'outsideArea'})}
          size='small'
        />
      </div>
    </form>
  );
};

export default RegistrationForm1Error;
