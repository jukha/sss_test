'use client';

import { RegistrationForm } from '@/entities/registration-form.entity';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { createContext, useContext, useState } from 'react';

export interface RegistrationFormContextType {
  registrationForm: RegistrationForm | null;
  setRegistrationForm: (form: RegistrationForm) => void;

  registrationErrors: Partial<Record<keyof RegistrationForm, string>> | null;
  setRegistrationErrors: (
    errors: Partial<Record<keyof RegistrationForm, string>>
  ) => void;

  registrationStep: RegistrationStepEnum;
  setRegistrationStep: (step: RegistrationStepEnum) => void;
}

const RegistrationFormContext = createContext<
  RegistrationFormContextType | undefined
>(undefined);

export const RegistrationFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [registrationForm, setRegistrationForm] =
    useState<RegistrationForm | null>(null);

  const [registrationErrors, setRegistrationErrors] = useState<Partial<
    Record<keyof RegistrationForm, string>
  > | null>(null);

  const [registrationStep, setRegistrationStep] =
    useState<RegistrationStepEnum>(RegistrationStepEnum.Step1);

  return (
    <RegistrationFormContext.Provider
      value={{
        registrationForm,
        setRegistrationForm,
        registrationErrors,
        setRegistrationErrors,
        registrationStep,
        setRegistrationStep,
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
