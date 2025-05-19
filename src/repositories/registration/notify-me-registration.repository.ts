import { GenericRepository } from '@/repositories/generic.repository';
import {UnservicedLeadsEntity} from '@/entities/unserviced-leads.entity';

class NotifyMeRegistrationRepository extends GenericRepository<UnservicedLeadsEntity> {}

export const notifyMeRegistrationRepository = new NotifyMeRegistrationRepository({
  baseEndpoint: '/api/registration/unserviced_leads',
  allowedMethods: ['post'],
});
