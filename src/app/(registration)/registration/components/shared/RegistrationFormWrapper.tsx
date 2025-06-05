'use client';
import React, { JSX } from 'react';
import Image from 'next/image';
import { girlAndMom } from '@/assets';
import { circleNavigationBarSteps } from '../../logic/navigation';
import StepsIndicator from './StepsIndicator';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { RegistrationForm } from '@/entities/registration-form.entity';
import RegistrationForm1 from '../steps/step1/RegistrationForm1';
import RegistrationForm1Success from '../steps/step1Success/RegistrationForm1Success';
import RegistrationForm1Error from '../steps/step1Error/RegistrationForm1Error';
import RegistrationForm2 from '../steps/step2/RegistrationForm2';
import RegistrationForm3 from '../steps/step3/RegistrationForm3';
import RegistrationForm5 from '../steps/step5/RegistrationForm5';
import RegistrationForm6 from '../steps/step6/RegistrationForm6';
import RegistrationForm7 from '../steps/step7/RegistrationForm7';
import OrderConfirmed from './OrderConfirmed';
import { useRegistrationForm } from '@/context/registration-form.context';
import { validateFormField, validateFormStep } from '../../logic/validation';
import { OnFieldFocusLostHandlerFunction } from '../../types';
import clientDataApi from '@/actions/data/client-data-api';
import RegistrationForm4_1 from '@/app/(registration)/registration/components/steps/step4/step4_1/RegistrationForm4_1';
import RegistrationForm4_2 from '@/app/(registration)/registration/components/steps/step4/step4_2/RegistrationForm4_2';

type Props = {
  databaseId: string;
  secret: string;
  formId: string;
};

const RegistrationFormWrapper = ({ databaseId, secret, formId }: Props) => {
  const {
    registrationForm,
    registrationStep,
    setRegistrationStep,
    switchToNextStep,
    switchToPreviousStep,
    setRegistrationErrors,
    setOneFieldValidationErrors,
    clearFieldRegistrationErrors,
    formVersion,
    setFormVersion,
  } = useRegistrationForm();

  const onNextClicked = async (options?: { shouldNotSwitchToNextStep?: boolean }) => {
    const validationErrors = validateFormStep(registrationForm, registrationStep);

    if (validationErrors) {
      setRegistrationErrors(validationErrors);
      return;
    } else {
      setRegistrationErrors({});
    }

    setFormVersion(formVersion + 1);
    if (options?.shouldNotSwitchToNextStep !== false) {
      switchToNextStep();
    }

    await clientDataApi.registrationStep.create({version: formVersion})({
      registrationIdentifier: {
        id: databaseId,
        secret: secret,
        formTypeId: formId
      },
      version: formVersion,
      step: registrationStep,
      data: registrationForm!,
    })
  };

  const onPreviousClicked = async () => {
    switchToPreviousStep();

    const validationErrors = validateFormStep(registrationForm, registrationStep);
    if (validationErrors) return;

    setFormVersion(formVersion + 1);

    await clientDataApi.registrationStep.create({version: formVersion})({
      registrationIdentifier: {
        id: databaseId,
        secret: secret,
        formTypeId: formId
      },
      version: formVersion,
      step: registrationStep,
      data: registrationForm!,
    })
  };

  function buildOnFieldFocusLostHandler(fieldName: keyof RegistrationForm): OnFieldFocusLostHandlerFunction {
    return () => {
      const validationErrors = validateFormField({
        fieldName,
        fieldValue: registrationForm?.[fieldName],
        registrationStep,
      });

      clearFieldRegistrationErrors(fieldName);
      setOneFieldValidationErrors(validationErrors);
    };
  }

  const formsToRender: Record<number, JSX.Element> = {
    [RegistrationStepEnum.Error]: <div>error</div>,
    [RegistrationStepEnum.Step1]: (
      <RegistrationForm1
        registrationDataIsLoading={false}
        onNextClicked={onNextClicked}
        buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler}
      />
    ),
    [RegistrationStepEnum.Step1Success]: <RegistrationForm1Success onNextClicked={onNextClicked} />,
    [RegistrationStepEnum.Step1NoPoolsError]: (
      <RegistrationForm1Error errorType='noPools' onPreviousClicked={onPreviousClicked} />
    ),
    [RegistrationStepEnum.Step1OutsideAreaError]: (
      <RegistrationForm1Error errorType='outsideArea' onPreviousClicked={onPreviousClicked} />
    ),
    [RegistrationStepEnum.Step2]: (
      <RegistrationForm2
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
        buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler}
      />
    ),
    [RegistrationStepEnum.Step3]: (
      <RegistrationForm3
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
        buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler}
      />
    ),
    [RegistrationStepEnum.Step4_1]: (
      <RegistrationForm4_1 onNextClicked={onNextClicked} onPreviousClicked={onPreviousClicked} />
    ),
    [RegistrationStepEnum.Step4_2]: (
      <RegistrationForm4_2 onNextClicked={onNextClicked} onPreviousClicked={onPreviousClicked} />
    ),
    [RegistrationStepEnum.Step5]: (
      <RegistrationForm5 onNextClicked={onNextClicked} onPreviousClicked={onPreviousClicked} />
    ),
    [RegistrationStepEnum.Step6]: (
      <RegistrationForm6
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
        buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler}
      />
    ),
    [RegistrationStepEnum.Step7OrderConfirmed]: <OrderConfirmed />,
  };

  return (
    <div className='flex flex-col relative w-full max-w-[750px] h-full'>
      <Image
        src={girlAndMom}
        alt='image'
        className='absolute w-[120px] -translate-y-[100%] right-0 laptop:w-[250px] object-contain'
      />
      <StepsIndicator
        steps={circleNavigationBarSteps}
        currentStep={registrationStep}
        setStep={(step) => setRegistrationStep(step, true)}
      />
      <div className='flex flex-col items-center w-full h-full bg-white pt-[50px] pb-16 rounded-[16px] px-[25px] desktop:pt-[65px]'>
        <div className='w-full pb-6 desktop:max-w-[590px] desktop:px-[71px] desktop:min-h-[100%] overflow-y-auto overflow-x-hidden smallScroll'>
          {formsToRender[registrationStep]}

          {/*Make Step7 be never detached in order to Stripe PaymentElement iframe to always stay attached and never re-load. Otherwise it looses CC data previously entered. And loads slowly, BTW. :)*/}
          <div style={{display: registrationStep == RegistrationStepEnum.Step7 ? 'block' : 'none'}}>
            <RegistrationForm7 onNextClicked={onNextClicked} onPreviousClicked={onPreviousClicked} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormWrapper;
