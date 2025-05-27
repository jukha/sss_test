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
import RegistrationForm4 from '../steps/step4/RegistrationForm4';
import RegistrationForm5 from '../steps/step5/RegistrationForm5';
import RegistrationForm6 from '../steps/step6/RegistrationForm6';
import RegistrationForm7 from '../steps/step7/RegistrationForm7';
import OrderConfirmed from './OrderConfirmed';
import { useRegistrationForm } from '@/context/registration-form.context';
import useLessonsPackages from '@/hooks/use-lesson-packages';
import { validateFormStep, validateFormField } from '../../logic/validation';
import { sendDataToServer } from '../../logic/send.data';
import {
  OnFieldChangedHandlerFunction,
  OnFieldChangedEventHandlerProps,
  OnFieldChangedEventHandlerFunction,
  OnFieldChangedEventHandlerProps2,
  OnFieldChangedEventHandlerFunction2,
  OnFieldFocusLostHandlerFunction,
} from '../../types';

type Props = {
  databaseId: string;
  secret: string;
  formId: string;
};

const RegistrationFormWrapper = ({ databaseId, secret, formId }: Props) => {
  const {
    registrationForm,
    setRegistrationForm,
    registrationStep,
    setRegistrationStep,
    switchToNextStep,
    switchToPreviousStep,
    setRegistrationErrors,
    setOneFieldValidationErrors,
    clearFieldRegistrationErrors,
  } = useRegistrationForm();

  const lessonsPackages = useLessonsPackages();

  const onNextClicked = () => {
    const validationErrors = validateFormStep(registrationForm, registrationStep);

    if (validationErrors) {
      setRegistrationErrors(validationErrors);
      console.log(validationErrors);
      return;
    } else {
      setRegistrationErrors({});
    }

    // [!!!] attention: Bulat asked not to wait for response. bugs are expected.
    sendDataToServer({
      registrationRecordId: databaseId,
      registrationFormTypeId: formId,
      secret: secret,
      formData: registrationForm,
    });

    switchToNextStep();
  };

  const onPreviousClicked = () => {
    sendDataToServer({
      registrationRecordId: databaseId,
      registrationFormTypeId: formId,
      secret: secret,
      formData: registrationForm,
    });

    switchToPreviousStep();
  };

  function setRegistrationFormField(fieldName: string, fieldValue: unknown) {
    if (registrationForm) {
      // @ts-expect-error Dynamic field name construction
      registrationForm[fieldName] = fieldValue;
    }

    setRegistrationForm({
      ...registrationForm!,
      [fieldName]: fieldValue,
    });

    // @ts-expect-error Dynamic field name construction
    clearFieldRegistrationErrors(fieldName);
  }

  function buildOnFieldChangedHandler(
    fieldName: string
  ): OnFieldChangedHandlerFunction {
    return (fieldValue: unknown) => {
      setRegistrationFormField(fieldName, fieldValue);
    };
  }

  function buildOnFieldChangedEventHandler(
    fieldName: string
  ): OnFieldChangedEventHandlerFunction {
    return (e: OnFieldChangedEventHandlerProps) => {
      setRegistrationFormField(fieldName, e.target.value);
    };
  }

  function buildOnFieldChangedEventHandler2(
    fieldName: string
  ): OnFieldChangedEventHandlerFunction2 {
    return (e: OnFieldChangedEventHandlerProps2) => {
      setRegistrationFormField(fieldName, e.target.value);
    };
  }

  function buildOnFieldFocusLostHandler(
    fieldName: keyof RegistrationForm
  ): OnFieldFocusLostHandlerFunction {
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
        buildOnFieldChangedHandler={buildOnFieldChangedHandler}
        buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler}
      />
    ),
    [RegistrationStepEnum.Step1Success]: (
      <RegistrationForm1Success onNextClicked={onNextClicked} />
    ),
    [RegistrationStepEnum.Step1NoPoolsError]: (
      <RegistrationForm1Error
        errorType='noPools'
        onPreviousClicked={onPreviousClicked}
      />
    ),
    [RegistrationStepEnum.Step1OutsideAreaError]: (
      <RegistrationForm1Error
        errorType='outsideArea'
        onPreviousClicked={onPreviousClicked}
      />
    ),
    [RegistrationStepEnum.Step2]: (
      <RegistrationForm2
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
        buildOnFieldChangedHandler={buildOnFieldChangedHandler}
        buildOnFieldChangedEventHandler={buildOnFieldChangedEventHandler}
        buildOnFieldChangedEventHandler2={buildOnFieldChangedEventHandler2}
        buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler}
      />
    ),
    [RegistrationStepEnum.Step3]: (
      <RegistrationForm3
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
        buildOnFieldChangedHandler={buildOnFieldChangedHandler}
        buildOnFieldChangedEventHandler={buildOnFieldChangedEventHandler}
        buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler}
      />
    ),
    [RegistrationStepEnum.Step4]: (
      <RegistrationForm4
        studentsNames={lessonsPackages.studentsNames}
        lessonsMinutes={lessonsPackages.lessonsMinutes}
        recommendedTimeInMinutes={lessonsPackages.recommendedTime}
        packages={lessonsPackages.packages}
        onPackageChange={lessonsPackages.setSelectedPackageIndex}
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
      />
    ),
    [RegistrationStepEnum.Step5]: (
      <RegistrationForm5
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
        buildOnFieldChangedHandler={buildOnFieldChangedHandler}
        buildOnFieldChangedEventHandler2={buildOnFieldChangedEventHandler2}
      />
    ),
    [RegistrationStepEnum.Step6]: (
      <RegistrationForm6
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
        buildOnFieldChangedHandler={buildOnFieldChangedHandler}
        buildOnFieldFocusLostHandler={buildOnFieldFocusLostHandler}
      />
    ),
    [RegistrationStepEnum.Step7]: (
      <RegistrationForm7
        onNextClicked={onNextClicked}
        onPreviousClicked={onPreviousClicked}
        buildOnFieldChangedHandler={buildOnFieldChangedHandler}
      />
    ),
    [RegistrationStepEnum.Step7OrderConfirmed]: <OrderConfirmed />,
  };

  return (
    <div className='flex flex-col relative w-full max-w-[750px]'>
      <Image
        src={girlAndMom}
        alt='image'
        className='absolute h-[140px] w-[160px] top-[-140px] right-0 laptop:h-[200px] laptop:w-[250px] laptop:top-[-200px] laptop:right-[-30px]'
      />
      <StepsIndicator
        steps={circleNavigationBarSteps}
        currentStep={registrationStep}
        setStep={setRegistrationStep}
      />
      <div className='flex flex-col items-center w-full bg-white rounded-[16px] py-[50px] px-[25px] desktop:py-[65px]'>
        <div className='desktop:max-w-[440px] w-full'>
          {formsToRender[registrationStep]}
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormWrapper;
