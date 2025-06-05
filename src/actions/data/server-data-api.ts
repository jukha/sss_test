import { instructorsServerApi } from '@/actions/data/instructors';
import { unservicedLeadsServerApi } from '@/actions/data/unserviced_leads';
import { registrationStepServerApi } from '@/actions/data/registration_step';
import { registrationServerApi } from '@/actions/data/registration';

const serverDataApi = {
  instructors: instructorsServerApi,
  unservicedLeads: unservicedLeadsServerApi,
  registrationStep: registrationStepServerApi,
  registration: registrationServerApi
}

export default serverDataApi;
