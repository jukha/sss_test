'use client';
import React, { JSX, useEffect, useState } from 'react';
import RegistrationForm1 from '../steps/step1/RegistrationForm1';
import { RegistrationForm } from '@/entities/registration-form.entity';
// import { registrationFormStore } from '@/stores/registration-form.store';
import { registrationStepRepository } from '@/repositories/registration/registration-step.repository';
import Image from 'next/image';
import {
  girlAndMom,
  registrationStep1,
  registrationStep2,
  registrationStep3,
  registrationStep4,
  registrationStep5,
  registrationStep6,
  registrationStep7,
} from '@/assets';
import StepsIndicator from './StepsIndicator';
import { usePathname } from 'next/navigation';
import { getRegistrationRepository } from '@/repositories/registration/get-registration.repository';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';

import RegistrationForm1Success from '../steps/step1/RegistrationForm1Success';
import RegistrationForm1Error from '../steps/step1/RegistrationForm1Error';
import RegistrationForm2 from '../steps/step2/RegistrationForm2';
import RegistrationForm3 from '../steps/step3/RegistrationForm3';
import RegistrationForm5 from '../steps/step5/RegistrationForm5';
import { useRegistrationForm } from '@/context/registration-form.context';
import { getRegistrationErrors } from '@/utils/get-registration-errors';

type Props = {
  databaseId: string;
  secret: string;
  formId: string;
};

const stepsPictures = [
  registrationStep1,
  registrationStep2,
  registrationStep3,
  registrationStep4,
  registrationStep5,
  registrationStep6,
  registrationStep7,
];

const RegistrationFormWrapper: React.FC<Props> = ({
  databaseId,
  secret,
  formId,
}) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const {
    registrationForm,
    setRegistrationForm,
    registrationStep,
    setRegistrationStep,
    setRegistrationErrors,
  } = useRegistrationForm();

  useEffect(() => {
    if (!secret || !formId) return;

    (async () => {
      setLoading(true);
      const { data } = await getRegistrationRepository.get({
        headers: {
          'X-RegFormType-Id': formId,
          'X-Registration-Secret': secret,
          'X-Registration-Id': databaseId,
        },
      });

      setLoading(false);

      if (data) {
        setRegistrationForm(data);
        // setRegistrationStep(data.lastCompletedStep + 1);
      } else {
        setRegistrationStep(RegistrationStepEnum.Error);
      }
    })();
  }, [pathname, secret, formId]);

  const onNextStep = async (
    formData: Partial<RegistrationForm>,
    stepNumber: number
  ) => {
    const validatedData: Record<string, unknown> = {};

    for (const [k, v] of Object.entries(formData)) {
      if (v !== null || (typeof v === 'string' && v !== '')) {
        validatedData[k] = v;
      }
    }

    const zodErrors = getRegistrationErrors(validatedData, stepNumber);

    if (zodErrors) {
      setRegistrationErrors(zodErrors);
      return;
    }

    const { data } = await registrationStepRepository.post({
      data: validatedData,
      endpoint: `/${stepNumber}`,
      headers: {
        'X-RegFormType-Id': formId,
        'X-Registration-Secret': secret,
        'X-Registration-Id': databaseId,
      },
    });

    if (!data) return; // todo add error handling?

    setRegistrationForm(data);

    //!Need to get what step is going to be next from backend (RegistrationStepEnum)
    if (registrationStep === RegistrationStepEnum.Step1) {
      setRegistrationStep(RegistrationStepEnum.Step1Success);
      return;
    }
    setRegistrationStep(registrationStep + 1);
  };

  const formsToRender: Record<number, JSX.Element> = {
    [RegistrationStepEnum.Error]: <div>error</div>,
    [RegistrationStepEnum.Step1]: (
      <RegistrationForm1
        loading={loading}
        onNext={(data, step) => onNextStep(data, step)}
      />
    ),
    [RegistrationStepEnum.Step1Success]: <RegistrationForm1Success />,
    [RegistrationStepEnum.Step1Error]: (
      //need to specify error from backend
      <RegistrationForm1Error errorType='outsideArea' />
    ),
    [RegistrationStepEnum.Step2]: <RegistrationForm2 />,
    [RegistrationStepEnum.Step3]: (
      <RegistrationForm3
        initialValues={{
          firstName: registrationForm?.firstName,
          lastName: registrationForm?.lastName,
          email: registrationForm?.email,
          phone: registrationForm?.phone,
          parentGuardians: registrationForm?.parentGuardians,
        }}
        studentsNames={registrationForm?.students?.map(
          (student) => student.name
        )}
        onSubmit={(formData) => onNextStep(formData, 3)}
        onBackClick={() => setRegistrationStep(registrationStep - 1)}
      />
    ),
    [RegistrationStepEnum.Step5]: <RegistrationForm5 />,
  };

  return (
    <div className='flex flex-col relative w-full max-w-[750px] m-auto'>
      <Image
        src={girlAndMom}
        alt='image'
        className='absolute h-[140px] w-[160px] top-[-140px] right-0 laptop:h-[200px] laptop:w-[250px] laptop:top-[-200px] laptop:right-[-30px]'
      />
      <StepsIndicator
        icons={stepsPictures}
        currentStep={registrationStep}
        setStep={(n) => setRegistrationStep(n)}
      />
      <div className='flex flex-col items-center w-full bg-white rounded-[16px] py-[50px] px-[25px] laptop:px-[50px] desktop:py-[65px]'>
        <div className='desktop:max-w-[440px] w-full'>
          {formsToRender[registrationStep]}
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormWrapper;
