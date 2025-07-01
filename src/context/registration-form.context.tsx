'use client';

import { RegistrationForm } from '@/entities/registration-form.entity';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { findNextStep, findPreviousStep } from '@/app/(registration)/registration/logic/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { generateRegFormErrorBannerText } from '@/utils/generate-reg-form-error-banner-text';
import { globalErrorHandlerState } from '@/state/global-error-handler.state';
import { usePathname, useRouter } from 'next/navigation';

type SetRegistrationStepOptions = {
  pushToBrowserHistory?: boolean;
  setPreviousAsCurrent?: boolean;
}

type RegistrationFormContextType = {
  registrationForm: RegistrationForm | null;
  setRegistrationForm: (form: RegistrationForm) => void;

  setRegistrationFormField: <FieldName extends keyof RegistrationForm>(
    fieldName: FieldName,
    fieldValue: RegistrationForm[FieldName]
  ) => void;

  previousRegistrationStep?: RegistrationStepEnum;
  registrationStep: RegistrationStepEnum;
  setRegistrationStep: (step: RegistrationStepEnum, options?: SetRegistrationStepOptions) => void;
  switchToNextStep: () => void;
  switchToPreviousStep: () => void;
  pushStepToBrowserHistory: (step: RegistrationStepEnum) => void;

  isStep1SuccessShown: boolean | null | undefined;
  setIsStep1SuccessShown: (isStep1SuccessShown: boolean | null | undefined) => void;

  registrationErrors: Partial<Record<keyof RegistrationForm, string>> | null;
  setRegistrationErrors: (errors: Partial<Record<keyof RegistrationForm, string>> | null) => void;
  setOneFieldValidationErrors: (errors: Partial<Record<keyof RegistrationForm, string>> | null) => void;
  clearRegistrationErrors: () => void;
  clearFieldRegistrationErrors: (fieldName: keyof RegistrationForm) => void;
  registrationErrorsText: string | null | undefined;

  formVersion: number;
  setFormVersion: (version: number) => void;

  isLessonPackageSizeUpgradeDeclined: boolean;
  setIsLessonPackageSizeUpgradeDeclined: (isUpgradeDeclined: boolean) => void;
  isUpgradedTo25LessonPackageSize: boolean;
  setIsUpgradedTo25LessonPackageSize: (isUpgraded: boolean) => void;

  forcePreviousStep?: RegistrationStepEnum;
  setForcePreviousStep: (step?: RegistrationStepEnum) => void;

  isConfirmationPage: boolean;
  setIsConfirmationPage: (value: boolean) => void;
}

type Props = {
  children: React.ReactNode;
  isConfirmationPage?: boolean;
};

export type RegistrationFormErrors = Partial<Record<keyof RegistrationForm, string>>;

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

  if (window.history.state.stepForReturn !== stepForReturn) {
    window.history.pushState({ stepForReturn }, '');
  }
};


const CONTROLLED_FIELDS_CLEAR_PACKAGE_SELECTION = [
  'studentsCount',
  'studentAge1',
  'studentAge2',
  'studentAge3',
  'studentAge4',
  'studentAge5',
  'studentAge6',
];

const setRegistrationFormControlledFields = <FieldName extends keyof RegistrationForm>({
  fieldName,
  fieldValue,
  previousState,
  newState,
} : {
  fieldName: FieldName,
  fieldValue: RegistrationForm[FieldName],
  previousState: RegistrationForm,
  newState: RegistrationForm,
}) => {
  if (!previousState || !newState) {
    return;
  }

  if (!CONTROLLED_FIELDS_CLEAR_PACKAGE_SELECTION.includes(fieldName)) {
    return;
  }

  if (previousState[fieldName] == fieldValue) {
    return;
  }

  newState.lessonType = null;
  newState.lessonTime = null;
  newState.packageSize = null;
};

export const RegistrationFormProvider = ({ children }: Props) => {
  const router = useRouter();

  const [previousRegistrationStep, setPreviousRegistrationStep] = useState<RegistrationStepEnum>();

  const [registrationStep, internalSetRegistrationStep] = useState(RegistrationStepEnum.Step1);
  const [isStep1SuccessShown, setIsStep1SuccessShown] = useState<boolean | null | undefined>(undefined);
  const [formVersion, setFormVersion] = useState(0);
  const [isUpgradedTo25LessonPackageSize, setIsUpgradedTo25LessonPackageSize] = useState(false);
  const [isLessonPackageSizeUpgradeDeclined, setIsLessonPackageSizeUpgradeDeclined] = useState(false);
  const [forcePreviousStep, setForcePreviousStep] = useState<RegistrationStepEnum | undefined>();
  const [isConfirmationPage, setIsConfirmationPage] = useState(false);

  const [registrationForm, setRegistrationForm] = useState<RegistrationForm | null>(null);
  const [registrationErrors, internalSetRegistrationErrors] = useState<RegistrationFormErrors | null>(null);
  const [registrationErrorsText, setRegistrationErrorsText] = useState<string | null>(null);

  const setRegistrationStep = (step: RegistrationStepEnum, options?: SetRegistrationStepOptions) => {
    clearRegistrationErrors();
    internalSetRegistrationStep(step);

    if (options?.pushToBrowserHistory) pushStepToBrowserHistory(registrationStep);
    if (options?.setPreviousAsCurrent) setPreviousRegistrationStep(registrationStep);
  };

  const switchToNextStep = () => {
    if (registrationStep == RegistrationStepEnum.Step1) {
      pushStepToBrowserHistory(registrationStep);

      if (!isStep1SuccessShown) {
        setRegistrationStep(RegistrationStepEnum.Step1Success);
        setIsStep1SuccessShown(true);
        return;
      }
    }

    const nextStep = findNextStep(registrationStep);
    if (!nextStep) return;

    if (nextStep === RegistrationStepEnum.Step7OrderConfirmed) {
      const { id, secret } = registrationForm!
      router.push(`/registration/thank-you?id=${id}&secret=${secret}`);
      return;
    }

    setPreviousRegistrationStep(registrationStep);
    setRegistrationStep(nextStep);
    pushStepToBrowserHistory(nextStep);
  };

  const switchToPreviousStep = () => {
    const previousStep = findPreviousStep(registrationStep);
    if (!previousStep) return;

    setPreviousRegistrationStep(registrationStep);
    setRegistrationStep(previousStep);
    pushStepToBrowserHistory(previousStep);
  };

  const setRegistrationErrors = (registrationErrors: RegistrationFormErrors | null) => {
    internalSetRegistrationErrors(registrationErrors);
    setRegistrationErrorsText(generateRegFormErrorBannerText(registrationErrors ?? {}));
  };

  const clearRegistrationErrors = () => {
    setRegistrationErrors({});
  };

  const clearFieldRegistrationErrors = (fieldName: keyof RegistrationForm) => {
    internalSetRegistrationErrors((v) => {
      if (!v) return v;

      const newRegistrationErrors = { ...v };
      delete newRegistrationErrors[fieldName];
      return newRegistrationErrors;
    });

    setRegistrationErrorsText(null);
  };

  const setOneFieldValidationErrors = (fieldRegistrationErrors: RegistrationFormErrors | null) => {
    internalSetRegistrationErrors((v) => ({
      ...(v || {}),
      ...fieldRegistrationErrors,
    }));

    setRegistrationErrorsText(null);
  };


  const setRegistrationFormField = <FieldName extends keyof RegistrationForm>(
    fieldName: FieldName,
    fieldValue: RegistrationForm[FieldName]
  ) => {
    setRegistrationForm((previousState) => {
      if (!previousState) {
        return previousState;
      }

      const newState = { ...previousState };
      newState[fieldName] = fieldValue;
      setRegistrationFormControlledFields({ fieldName, fieldValue, previousState, newState });

      return newState;
    });

    clearFieldRegistrationErrors(fieldName);
  };

  useEffect(() => {
    setFormVersion(registrationForm?.version || 1);
  }, [registrationForm?.version]);

  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith('/registration')) return;

    let forceReturn = false;

    const handlePopState = (event: PopStateEvent) => {
      if (forceReturn) {
        forceReturn = false;
        return;
      }

      const { stepForReturn }: { stepForReturn: RegistrationStepEnum } = event.state;

      if (!stepForReturn) {
        window.history.back();
        forceReturn = true;
        return;
      }

      if (stepForReturn >= registrationStep) {
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
  }, [registrationStep, pathname]);

  useEffect(() => {
    if (registrationStep === RegistrationStepEnum.Step7) {
      globalErrorHandlerState.setErrorTitle('There was problem a swimming your request to our servers. Please try again. There has been no charge to your credit card');
    } else {
      globalErrorHandlerState.resetErrorTitle();
    }
  }, [registrationStep]);

  return (
    <RegistrationFormContext.Provider
      value={{
        registrationForm,
        setRegistrationForm,

        setRegistrationFormField,

        previousRegistrationStep,
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

        formVersion,
        setFormVersion,

        isLessonPackageSizeUpgradeDeclined,
        setIsLessonPackageSizeUpgradeDeclined,
        isUpgradedTo25LessonPackageSize,
        setIsUpgradedTo25LessonPackageSize,

        forcePreviousStep,
        setForcePreviousStep,

        isConfirmationPage,
        setIsConfirmationPage,
        pushStepToBrowserHistory,
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
