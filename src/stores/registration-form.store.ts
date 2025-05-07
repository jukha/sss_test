import { RegistrationForm } from '@/entities/registration-form.entity';
import { RegistrationStepEnum } from '@/enum/registration-step.enum';
import { makeAutoObservable } from 'mobx';

class RegistrationFormStore {
  private _registrationForm: RegistrationForm | null = null;
  private _registrationStep: RegistrationStepEnum = RegistrationStepEnum.Step1;

  constructor() {
    makeAutoObservable(this);
  }

  get registrationForm() {
    return this._registrationForm;
  }

  get registrationStep() {
    return this._registrationStep;
  }

  setRegistrationStep = (value: RegistrationStepEnum) => {
    this._registrationStep = value;
  };

  setRegistrationForm = (value: RegistrationForm) => {
    this._registrationForm = value;
  };
}

export const registrationFormStore = new RegistrationFormStore();
