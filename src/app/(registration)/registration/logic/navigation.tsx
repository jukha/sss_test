import {
  registrationStep1,
  registrationStep2,
  registrationStep3,
  registrationStep4,
  registrationStep5,
  registrationStep6,
  registrationStep7,
} from '@/assets';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';

const nextSteps = {
  [RegistrationStepEnum.Error]: RegistrationStepEnum.Error,
  [RegistrationStepEnum.Step1]: RegistrationStepEnum.Step2,
  [RegistrationStepEnum.Step1Success]: RegistrationStepEnum.Step2,
  [RegistrationStepEnum.Step1NoPoolsError]: RegistrationStepEnum.Step1,
  [RegistrationStepEnum.Step1OutsideAreaError]: RegistrationStepEnum.Step1,
  [RegistrationStepEnum.Step2]: RegistrationStepEnum.Step3,
  [RegistrationStepEnum.Step3]: RegistrationStepEnum.Step4_1,
  [RegistrationStepEnum.Step4_1]: RegistrationStepEnum.Step4_2,
  [RegistrationStepEnum.Step4_2]: RegistrationStepEnum.Step5,
  [RegistrationStepEnum.Step5]: RegistrationStepEnum.Step6,
  [RegistrationStepEnum.Step6]: RegistrationStepEnum.Step7,
  [RegistrationStepEnum.Step7]: RegistrationStepEnum.Step7OrderConfirmed,
  [RegistrationStepEnum.Step7OrderConfirmed]: RegistrationStepEnum.Step7OrderConfirmed,
};

const previousSteps = {
  [RegistrationStepEnum.Error]: RegistrationStepEnum.Error,
  [RegistrationStepEnum.Step1]: RegistrationStepEnum.Step1,
  [RegistrationStepEnum.Step1Success]: RegistrationStepEnum.Step1,
  [RegistrationStepEnum.Step1NoPoolsError]: RegistrationStepEnum.Step1,
  [RegistrationStepEnum.Step1OutsideAreaError]: RegistrationStepEnum.Step1,
  [RegistrationStepEnum.Step2]: RegistrationStepEnum.Step1,
  [RegistrationStepEnum.Step3]: RegistrationStepEnum.Step2,
  [RegistrationStepEnum.Step4_1]: RegistrationStepEnum.Step3,
  [RegistrationStepEnum.Step4_2]: RegistrationStepEnum.Step4_1,
  [RegistrationStepEnum.Step5]: RegistrationStepEnum.Step4_2,
  [RegistrationStepEnum.Step6]: RegistrationStepEnum.Step5,
  [RegistrationStepEnum.Step7]: RegistrationStepEnum.Step6,
  [RegistrationStepEnum.Step7OrderConfirmed]: RegistrationStepEnum.Step7OrderConfirmed,
};

export const circleNavigationBarSteps = [
  {
    image: registrationStep1,
    steps: [
      RegistrationStepEnum.Step1,
      RegistrationStepEnum.Step1Success,
      RegistrationStepEnum.Step1NoPoolsError,
      RegistrationStepEnum.Step1OutsideAreaError,
    ],
  },
  { image: registrationStep2, steps: [RegistrationStepEnum.Step2] },
  { image: registrationStep3, steps: [RegistrationStepEnum.Step3] },
  { image: registrationStep4, steps: [RegistrationStepEnum.Step4_1, RegistrationStepEnum.Step4_2] },
  { image: registrationStep5, steps: [RegistrationStepEnum.Step5] },
  { image: registrationStep6, steps: [RegistrationStepEnum.Step6] },
  { image: registrationStep7, steps: [RegistrationStepEnum.Step7] },
];

export function isNavigationAllowed(currentStep: RegistrationStepEnum): boolean {
  return currentStep !== RegistrationStepEnum.Step7OrderConfirmed;
};

export function findNextStep(currentStep: RegistrationStepEnum): RegistrationStepEnum {
  return nextSteps[currentStep];
}

export function findPreviousStep(currentStep: RegistrationStepEnum): RegistrationStepEnum {
  return previousSteps[currentStep];
}
