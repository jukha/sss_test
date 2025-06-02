'use client';

import { RegistrationForm } from '@/entities/registration-form.entity';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { findNextStep, findPreviousStep } from '@/app/(registration)/registration/logic/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { validateFormStep } from '@/app/(registration)/registration/logic/validation';

export interface RegistrationFormContextType {
  registrationForm: RegistrationForm | null;
  setRegistrationForm: (form: RegistrationForm) => void;

  setRegistrationFormField: (fieldName: string, fieldValue: unknown) => void;

  registrationStep: RegistrationStepEnum;
  setRegistrationStep: (step: RegistrationStepEnum, pushToBrowserHistory?: boolean) => void;
  switchToNextStep: () => void;
  switchToPreviousStep: () => void;

  isStep1SuccessShown: boolean | null | undefined;
  setIsStep1SuccessShown: (isStep1SuccessShown: boolean | null | undefined) => void;

  registrationErrors: Partial<Record<keyof RegistrationForm, string>> | null;
  setRegistrationErrors: (errors: Partial<Record<keyof RegistrationForm, string>> | null) => void;
  setOneFieldValidationErrors: (errors: Partial<Record<keyof RegistrationForm, string>> | null) => void;
  clearRegistrationErrors: () => void;
  clearFieldRegistrationErrors: (fieldName: keyof RegistrationForm) => void;
  registrationErrorsText: string | null | undefined;

  showLessonsPackageSummary: boolean;
  setShowLessonsPackageSummary: (show: boolean) => void;

  formVersion: number;
  setFormVersion: (version: number) => void;
}


type Props = { children: React.ReactNode };
type RegistrationFormErrors = Partial<Record<keyof RegistrationForm, string>>;

const RegistrationFormContext = createContext<RegistrationFormContextType | undefined>(undefined);

const pushStepToBrowserHistory = (stepForReturn?: RegistrationStepEnum) => {
  const step1ReturnSteps = [
    RegistrationStepEnum.Step1NoPoolsError,
    RegistrationStepEnum.Step1OutsideAreaError,
    RegistrationStepEnum.Step1Success,
  ];

  if (stepForReturn && step1ReturnSteps.includes(stepForReturn)) {
    return;
  }

  window.history.pushState({ stepForReturn }, '');
};

export const RegistrationFormProvider = ({ children }: Props) => {
  const [registrationStep, internalSetRegistrationStep] = useState<RegistrationStepEnum>(RegistrationStepEnum.Step1);
  const [isStep1SuccessShown, setIsStep1SuccessShown] = useState<boolean | null | undefined>(undefined);
  const [formVersion, setFormVersion] = useState(0);

  const setRegistrationStep = (step: RegistrationStepEnum, pushToBrowserHistory?: boolean) => {
    clearRegistrationErrors();
    internalSetRegistrationStep(step);
    if (pushToBrowserHistory) {
      pushStepToBrowserHistory(registrationStep);
    }
  };

  const switchToNextStep = () => {
    if (registrationStep == RegistrationStepEnum.Step1) {
      if (!isStep1SuccessShown) {
        pushStepToBrowserHistory(registrationStep);
        setRegistrationStep(RegistrationStepEnum.Step1Success);
        setIsStep1SuccessShown(true);
        return;
      }
    }

    const nextStep = findNextStep(registrationStep);
    if (!nextStep) return;

    setRegistrationStep(nextStep);
    pushStepToBrowserHistory(nextStep);
  };

  const switchToPreviousStep = () => {
    const previousStep = findPreviousStep(registrationStep);
    if (!previousStep) return;

    setRegistrationStep(previousStep);
    pushStepToBrowserHistory(previousStep);
  };

  const [registrationForm, setRegistrationForm] = useState<RegistrationForm | null>(null);
  const [registrationErrors, internalSetRegistrationErrors] = useState<RegistrationFormErrors | null>(null);
  const [registrationErrorsText, setRegistrationErrorsText] = useState<string | null>(null);
  const [showLessonsPackageSummary, setShowLessonsPackageSummary] = useState(false);

  const setRegistrationErrors = (registrationErrors: RegistrationFormErrors | null) => {
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
    internalSetRegistrationErrors(v => {
      if (!v) return v;

      const newRegistrationErrors = {...v};
      delete newRegistrationErrors[fieldName];
      return {...newRegistrationErrors, ...registrationErrors};
    });

    setRegistrationErrorsText(null);
  };

  const setOneFieldValidationErrors = (fieldRegistrationErrors: RegistrationFormErrors | null) => {
    internalSetRegistrationErrors(v => ({
      ...(v || {}),
      ...fieldRegistrationErrors,
    }));

    setRegistrationErrorsText(null);
  };

  const setRegistrationFormField = (fieldName: string, fieldValue: unknown) => {
    setRegistrationForm(v => {
      if (!v) return v;
      return {... v, [fieldName]: fieldValue};
    });

    // @ts-expect-error Dynamic field name construction
    clearFieldRegistrationErrors(fieldName);
  };

  useEffect(() => {
    setFormVersion(registrationForm?.version || 1);
  }, [registrationForm?.version])

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const validationErrors = validateFormStep(registrationForm, registrationStep);
      const { stepForReturn }: { stepForReturn: RegistrationStepEnum } = event.state;

      if (validationErrors && stepForReturn >= registrationStep) {
        return;
      }

      if (stepForReturn) {
        setRegistrationStep(stepForReturn);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [registrationStep]);

  return (
    <RegistrationFormContext.Provider
      value={{
        registrationForm,
        setRegistrationForm,

        setRegistrationFormField,

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

        formVersion,
        setFormVersion,
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
