import { instructorsClientApi } from '@/actions/data/instructors';
import { unservicedLeadsClientApi } from '@/actions/data/unserviced_leads';
import { registrationStepClientApi } from '@/actions/data/registration_step';
import { registrationClientApi } from '@/actions/data/registration';
import { locationCityPageClientApi } from './location_city_page';

const clientDataApi = {
  instructors: instructorsClientApi,
  locationCityPage: locationCityPageClientApi,
  unservicedLeads: unservicedLeadsClientApi,
  registrationStep: registrationStepClientApi,
  registration: registrationClientApi,
};

export default clientDataApi;
