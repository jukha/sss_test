import { GenericRepository } from '@/repositories/generic.repository';

class NotifyMeRegistrationRepository extends GenericRepository<{
  email: string;
}> {}

export const notifyMeRegistrationRepository = new NotifyMeRegistrationRepository({
  baseEndpoint: '/api/registration/notify-me',
  allowedMethods: ['post'],
});
