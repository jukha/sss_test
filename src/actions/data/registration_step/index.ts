import withAutoRetry, { WithAutoRetryOptions } from '@/utils/with-auto-retry';
import createRegistrationStep from '@/actions/data/registration_step/create.registration-step';
import { GlobalErrorType } from '@/enum/global-error-type.enum';

export const registrationStepServerApi = {
  create: createRegistrationStep
}

export const registrationStepClientApi = {
  create: (options: WithAutoRetryOptions) => withAutoRetry(createRegistrationStep, { ...options, globalErrorType: GlobalErrorType.RegistrationStepRequest })
}
