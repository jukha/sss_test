import { InstructorsApi } from '@/api_client/api_entities/instructors.api';
import { RegistrationApi } from '@/api_client/api_entities/registration.api';
import { NotifyMeApi } from '@/api_client/api_entities/notify-me.api';
import { EmailValidationApi } from '@/api_client/api_entities/email-validation.api';

export const apiClient = {
  instructors: new InstructorsApi(),
  registration: new RegistrationApi(),
  notifyMe: new NotifyMeApi(),
  emailValidation: new EmailValidationApi(),
}
