import {GenericRepository} from '@/repositories/generic.repository';
import {RegistrationForm} from '@/entities/registration-form.entity';

class StartRegistrationRepository extends GenericRepository<RegistrationForm> {}

export const startRegistrationRepository = new StartRegistrationRepository({
  baseEndpoint: '/api/registration/start',
  allowedMethods: ['post']
});
