import {GenericRepository} from '@/repositories/generic.repository';
import {RegistrationForm} from '@/entities/registration-form.entity';

class GetRegistrationRepository extends GenericRepository<RegistrationForm> {}

export const getRegistrationRepository = new GetRegistrationRepository({
  baseEndpoint: '/api/registration',
  allowedMethods: ['get']
});
