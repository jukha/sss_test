import { InstructorsApi } from '@/api_client/api_entities/instructors.api';
import { RegistrationApi } from '@/api_client/api_entities/registration.api';
import { NotifyMeApi } from '@/api_client/api_entities/notify-me.api';
import { EmailValidationApi } from '@/api_client/api_entities/email-validation.api';
import { UnservicedZipCodesApi } from '@/api_client/api_entities/unserviced-zip-codes.api';
import { BlogRecordsApi } from './api_entities/blogs.api';
import { LocationStates } from './api_entities/location-states.api';
import { LocationCompetitorsApi } from './api_entities/location-competitors';

export const apiClient = {
  instructors: new InstructorsApi(),
  blogs: new BlogRecordsApi(),
  registration: new RegistrationApi(),
  notifyMe: new NotifyMeApi(),
  emailValidation: new EmailValidationApi(),
  unservicedZipCodes: new UnservicedZipCodesApi(),
  locationStates: new LocationStates(),
  locationCompetitors: new LocationCompetitorsApi(),
};
