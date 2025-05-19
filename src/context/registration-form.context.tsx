'use client';

import { RegistrationForm } from '@/entities/registration-form.entity';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import {
  findNextStep,
  findPreviousStep,
} from '@/app/(registration)/registration/logic/navigation';
import { createContext, useContext, useState } from 'react';

export interface RegistrationFormContextType {
  registrationForm: RegistrationForm | null;
  setRegistrationForm: (form: RegistrationForm) => void;

  registrationStep: RegistrationStepEnum;
  setRegistrationStep: (step: RegistrationStepEnum) => void;
  switchToNextStep: () => void;
  switchToPreviousStep: () => void;

  isStep1SuccessShown: boolean | null | undefined;
  setIsStep1SuccessShown: (
    isStep1SuccessShown: boolean | null | undefined
  ) => void;

  registrationErrors: Partial<Record<keyof RegistrationForm, string>> | null;
  setRegistrationErrors: (
    errors: Partial<Record<keyof RegistrationForm, string>> | null
  ) => void;
  setOneFieldValidationErrors: (
    errors: Partial<Record<keyof RegistrationForm, string>> | null
  ) => void;
  clearRegistrationErrors: () => void;
  clearFieldRegistrationErrors: (fieldName: keyof RegistrationForm) => void;
  registrationErrorsText: string | null | undefined;

  showLessonsPackageSummary: boolean;
  setShowLessonsPackageSummary: (show: boolean) => void;

  // TODO move to RegistrationForm?
  policiesAgreement: boolean;
  setPoliciesAgreement: (agree: boolean) => void;
}

type RegistrationFormErrors = Partial<Record<keyof RegistrationForm, string>>;

const RegistrationFormContext = createContext<
  RegistrationFormContextType | undefined
>(undefined);

export const RegistrationFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [registrationStep, internalSetRegistrationStep] =
    useState<RegistrationStepEnum>(RegistrationStepEnum.Step1);
  const [isStep1SuccessShown, setIsStep1SuccessShown] = useState<
    boolean | null | undefined
  >(undefined);

  const setRegistrationStep = (step: RegistrationStepEnum) => {
    clearRegistrationErrors();
    internalSetRegistrationStep(step);
  };

  const switchToNextStep = () => {
    if (registrationStep == RegistrationStepEnum.Step1) {
      if (!isStep1SuccessShown) {
        setRegistrationStep(RegistrationStepEnum.Step1Success);
        setIsStep1SuccessShown(true);
        return;
      }
    }

    const nextStep = findNextStep(registrationStep);
    if (!nextStep) {
      return;
    }

    setRegistrationStep(nextStep);
  };

  const switchToPreviousStep = () => {
    const previousStep = findPreviousStep(registrationStep);
    if (!previousStep) {
      return;
    }

    setRegistrationStep(previousStep);
  };

  const [registrationForm, setRegistrationForm] =
    useState<RegistrationForm | null>(null);
  const [registrationErrors, internalSetRegistrationErrors] =
    useState<RegistrationFormErrors | null>(null);
  const [registrationErrorsText, setRegistrationErrorsText] = useState<
    string | null
  >(null);
  const [showLessonsPackageSummary, setShowLessonsPackageSummary] =
    useState(false);
  const [policiesAgreement, setPoliciesAgreement] = useState(false);

  const setRegistrationErrors = (
    registrationErrors: RegistrationFormErrors | null
  ) => {
    let errorsText = null;

    const erroneousFields = Object.keys(registrationErrors || {});
    if (erroneousFields.length > 0) {
      const erroneousFieldsStr = erroneousFields.join(', ');
      errorsText = `Woops looks like some info is missing. Please provide ${erroneousFieldsStr}`;
      // errorsText = 'Woops looks like some info is missing. Please provide ZIP, do you have access to a pool or not?';
    }

    internalSetRegistrationErrors(registrationErrors);
    setRegistrationErrorsText(errorsText);
  };

  const clearRegistrationErrors = () => {
    setRegistrationErrors({});
  };

  const clearFieldRegistrationErrors = (fieldName: keyof RegistrationForm) => {
    if (registrationErrors) {
      delete registrationErrors[fieldName];
    }
    const newRegistrationErrors = {
      ...registrationErrors,
    };
    internalSetRegistrationErrors(newRegistrationErrors);
    setRegistrationErrorsText(null);
  };

  const setOneFieldValidationErrors = (
    fieldRegistrationErrors: RegistrationFormErrors | null
  ) => {
    internalSetRegistrationErrors({
      ...registrationErrors,
      ...fieldRegistrationErrors,
    });
    setRegistrationErrorsText(null);
  };

  return (
    <RegistrationFormContext.Provider
      value={{
        registrationForm,
        setRegistrationForm,

        registrationStep,
        setRegistrationStep,
        switchToNextStep,
        switchToPreviousStep,

        isStep1SuccessShown,
        setIsStep1SuccessShown,

        registrationErrors,
        setRegistrationErrors,
        setOneFieldValidationErrors,
        clearRegistrationErrors,
        clearFieldRegistrationErrors,
        registrationErrorsText,

        showLessonsPackageSummary,
        setShowLessonsPackageSummary,

        policiesAgreement,
        setPoliciesAgreement,
      }}
    >
      {children}
    </RegistrationFormContext.Provider>
  );
};

export const useRegistrationForm = () => {
  const context = useContext(RegistrationFormContext);
  if (!context) {
    throw new Error('context is undefined');
  }
  return context;
};
