'use client';
import React, { JSX, useEffect, useRef } from 'react';
import Image from 'next/image';
import { girlAndMom } from '@/assets';
import { circleNavigationBarSteps, isNavigationAllowed } from '../../logic/navigation';
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
import RegistrationForm7OrderConfirmed from '../steps/step7OrderConfirmed/RegistrationForm7OrderConfirmed';
import { useRegistrationForm } from '@/context/registration-form.context';
import { validateFormField, validateFormStep } from '../../logic/validation';
import { OnFieldFocusLostHandlerFunction } from '../../types';
import RegistrationForm4_1 from '@/app/(registration)/registration/components/steps/step4/step4_1/RegistrationForm4_1';
import RegistrationForm4_2 from '@/app/(registration)/registration/components/steps/step4/step4_2/RegistrationForm4_2';
import { useLocationsAndPricing } from '@/context/locations-and-prices.context';
import { extractLocationMetroArea } from '../../logic/utils/lesson-package/extract-location-data';
import { generateCanWeServeText } from '../../logic/utils/lesson-package/generate-can-we-serve-text';
import { apiClient } from '@/api_client/api.client';

type Props = {
  databaseId: string;
  secret: string;
  formId: string;
};

type OnNextClickedOptions = { shouldNotSwitchToNextStep?: boolean, awaitBeforeSwitchToNextStep?: boolean };

const RegistrationFormWrapper = ({ databaseId, secret, formId }: Props) => {
  const {
    registrationForm,
    setRegistrationFormField,
    registrationStep,
    setRegistrationStep,
    switchToNextStep,
    switchToPreviousStep,
    setRegistrationErrors,
    setOneFieldValidationErrors,
    clearFieldRegistrationErrors,
    formVersion,
    setFormVersion,
    forcePreviousStep,
    setForcePreviousStep,
    isConfirmationPage,
  } = useRegistrationForm();
  const { data } = useLocationsAndPricing()
  const { zip, customerHasAccessToPool, isRegistrationComplete } = registrationForm ?? {}

  const formTopElementRef = useRef<HTMLImageElement>(null)
  const formScrollableWrapperRef = useRef<HTMLDivElement>(null);

  const metroArea = extractLocationMetroArea({
    zip,
    zipCodesServiced: data?.zipCodesServiced,
    metroAreas: data?.metroAreas,
  });

  const injectCanWeServeTextValue = () => {
    // always get actual text, because isRegistrationComplete actual only on submit
    const canWeServeText = generateCanWeServeText({
      isRegistrationComplete: isRegistrationComplete,
      doWeHaveSIWithPool: metroArea?.haveSIWithPool,
      serviceAvailable: metroArea?.serviceAvailable,
      customerHasAccessToPool: customerHasAccessToPool,
    })

    // update if need it somewhere else on next step
    setRegistrationFormField('canWeServeText', canWeServeText);

    return canWeServeText;
  }

  const sendRegistrationFormToServer = async () => {
    setFormVersion(formVersion + 1);

    await apiClient.registration.step.create({
      registrationIdentifier: {
        id: databaseId,
        secret: secret,
        formTypeId: formId
      },
      version: formVersion,
      data: { ...registrationForm!, canWeServeText: injectCanWeServeTextValue() },
      sendWebhook: registrationStep === RegistrationStepEnum.Step3
    });
  }

  const onNextClicked = async (options?: OnNextClickedOptions) => {
    const validationErrors = validateFormStep(registrationForm, registrationStep);

    if (validationErrors) {
      setRegistrationErrors(validationErrors);
      return;
    } else {
      setRegistrationErrors({});
    }

    if (options?.awaitBeforeSwitchToNextStep) {
      await sendRegistrationFormToServer();
      if (options?.shouldNotSwitchToNextStep !== true) switchToNextStep();
    } else {
      if (options?.shouldNotSwitchToNextStep !== true) switchToNextStep();
      await sendRegistrationFormToServer();
    }
  };

  const onPreviousClicked = async () => {
    if (forcePreviousStep) {
      setRegistrationStep(forcePreviousStep)
      setForcePreviousStep(undefined)
    } else {
      switchToPreviousStep();
    }

    await sendRegistrationFormToServer();
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
    [RegistrationStepEnum.Step7OrderConfirmed]: (
      <RegistrationForm7OrderConfirmed />
    ),
  };

  useEffect(() => {
    if (formScrollableWrapperRef.current) {
      formScrollableWrapperRef.current.scrollTop = 0
    }
    if (formTopElementRef.current && document.body.clientWidth < 1440) {
      formTopElementRef.current.scrollIntoView({ inline: 'center' })
    }
  }, [registrationStep])

  return (
    <div className='flex flex-col relative w-full max-w-[750px] h-full'>
      <Image
        src={girlAndMom}
        alt='image'
        className='absolute w-[120px] -translate-y-[100%] right-0 laptop:w-[250px] object-contain'
        ref={formTopElementRef}
      />
      <StepsIndicator
        isNavigationAllowed={!isConfirmationPage && isNavigationAllowed(registrationStep)}
        steps={circleNavigationBarSteps}
        currentStep={registrationStep}
        setStep={async (step) => {
          setRegistrationStep(step, { pushToBrowserHistory: true, setPreviousAsCurrent: true });
          await sendRegistrationFormToServer();
        }}
        availableMaxStep={forcePreviousStep}
      />
      <div className='flex flex-col items-center w-full h-auto bg-white pt-[50px] pb-16 rounded-[16px] px-[25px] desktop:pt-[65px]'>
        <div
          ref={formScrollableWrapperRef}
          className='w-full pb-6 desktop:max-w-[590px] desktop:px-[71px]'
        >
          {formsToRender[registrationStep]}

          {/*Make Step7 be never detached in order to Stripe PaymentElement iframe to always stay attached and never re-load. Otherwise it looses CC data previously entered. And loads slowly, BTW. :)*/}
          <div style={{ display: registrationStep == RegistrationStepEnum.Step7 ? 'block' : 'none' }}>
            <RegistrationForm7 onNextClicked={onNextClicked} onPreviousClicked={onPreviousClicked} buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormWrapper;
