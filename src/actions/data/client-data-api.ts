import { instructorsClientApi } from '@/actions/data/instructors';
import { unservicedLeadsClientApi } from '@/actions/data/unserviced_leads';
import { registrationStepClientApi } from '@/actions/data/registration_step';
import { registrationClientApi } from '@/actions/data/registration';

const clientDataApi = {
  instructors: instructorsClientApi,
  unservicedLeads: unservicedLeadsClientApi,
  registrationStep: registrationStepClientApi,
  registration: registrationClientApi,
}

export default clientDataApi;
