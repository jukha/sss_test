'use client';

import { blackArrow, mail } from '@/assets';
import CustomCurveButton from '@/components/CustomCurveButton';
import CustomInput from '@/components/CustomInput';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { notifyMeRegistrationRepository } from '@/repositories/registration/notify-me-registration.repository';
import { useForm } from 'react-hook-form';
import GoBackTextButton from '../../shared/GoBackTextButton';
import { useRegistrationForm } from '@/context/registration-form.context';

type ErrorType = 'outsideArea' | 'noPools';

type Props = {
  errorType: ErrorType;
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

type FormValues = {
  email: string | null;
};

const formDefaultValues: FormValues = {
  email: null,
};

const RegistrationForm1Error: React.FC<Props> = ({ errorType }) => {
  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: formDefaultValues,
  });
  const { setRegistrationStep } = useRegistrationForm();

  const onSubmit = async (data: FormValues) => {
    //need to do validation
    notifyMeRegistrationRepository.post({ data: data });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-[55px] items-center w-full'
    >
      <div className='flex flex-col gap-[30px] items-center w-full'>
        <GoBackTextButton
          text={errorText[errorType]}
          onClick={() => setRegistrationStep(RegistrationStepEnum.Step1)}
        />

        <h4 className='px-[20px] text-center'>{errorDescription[errorType]}</h4>

        <CustomInput
          {...register('email')}
          text='Your email address*'
          icon={mail}
        />
      </div>

      <div className='flex flex-col gap-[30px] items-center w-full'>
        <CustomCurveButton type='submit' text='Notify Me' icon={blackArrow} />

        <GoBackTextButton
          text={goBachButtonText[errorType]}
          onClick={() => setRegistrationStep(RegistrationStepEnum.Step1)}
          size='small'
        />
      </div>
    </form>
  );
};

export default RegistrationForm1Error;
