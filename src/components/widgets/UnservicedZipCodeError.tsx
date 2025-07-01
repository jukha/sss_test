import CustomInput from '@/components/CustomInput';
import { mail } from '@/assets';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { apiClient } from '@/api_client/api.client';
import Button from '@/components/kit/buttons/Button';

type FormValues = {
  email: string | null;
};

const formDefaultValues: FormValues = {
  email: null,
};

const successMessage = 'We got it! We\'ll let you know when Sunsational can provide pool access in your area!';

type Props = {
  zipCode: string;
}

const UnservicedZipCodeError = ({ zipCode }: Props) => {
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

      await apiClient.notifyMe.notify({email: data.email!, zip: zipCode});
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
      className='flex flex-col gap-[30px] items-center w-full border-gray border-[1px] rounded-[15px] p-[20px]'
    >
      <div className='flex flex-col gap-[10px] items-center w-full'>
        <h4 className='px-[20px] text-center text-2xl font-[700]'>
          Unfortunately, we don’t have any instructors in your area
        </h4>

        <h4 className='px-[20px] text-center'>
          {showSuccessMessage && successMessage}
        </h4>

        <CustomInput
          {...register('email')}
          text='Your email address*'
          icon={mail}
          className={clsx(showSuccessMessage && 'hidden')}
          error={errors.email?.message}
        />
      </div>

      <div className='flex flex-col gap-[30px] items-center min-w-[150px]'>
        {!showSuccessMessage &&
          <Button
            type={'submit'}
            text={sending ? 'Sending...' : 'Notify Me'}
            disabled={sending}
            buttonClasses={"bg-offBlack text-white"}
            shadowClasses={"bg-blue"}
            shadow={true}
          />
        }
      </div>
    </form>
  );
};

export default UnservicedZipCodeError;
