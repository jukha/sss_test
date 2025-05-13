import { GenericRepository } from '@/repositories/generic.repository';
import { RegistrationForm } from '@/entities/registration-form.entity';

class RegistrationStepRepository extends GenericRepository<RegistrationForm> {}

export const registrationStepRepository = new RegistrationStepRepository({
  baseEndpoint: '/api/registration/step',
  allowedMethods: ['post'],
});
