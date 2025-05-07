import { blackArrow, boyAndMom } from '@/assets';
import CustomCurveButton from '@/components/CustomCurveButton';
import GoBackTextButton from '@/components/GoBackTextButton';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { registrationFormStore } from '@/stores/registration-form.store';
import Image from 'next/image';

const RegistrationForm1Success = () => {
  const { setRegistrationStep } = registrationFormStore;
  return (
    <div className='flex flex-col gap-[30px] items-center w-full'>
      <GoBackTextButton
        text='Splashing! We have excellent Swim Instructors in San Diego, CA!'
        onClick={() => setRegistrationStep(RegistrationStepEnum.Step1)}
      />

      <Image src={boyAndMom} alt='picture' />

      <CustomCurveButton
        text='Continue'
        onClick={() => setRegistrationStep(RegistrationStepEnum.Step2)}
        icon={blackArrow}
      />
    </div>
  );
};

export default RegistrationForm1Success;
