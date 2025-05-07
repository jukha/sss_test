import {GenericRepository} from '@/repositories/generic.repository';
import {RegistrationForm} from '@/entities/registration-form.entity';
import {registrationSchemas} from '@/app/api/registration/step/schemas/step1.schema';
import {formatZodErrors} from '@/utils/format-zod-errors';

class RegistrationStepRepository extends GenericRepository<RegistrationForm> {
  validate<D>(step: number, data: D) {
    const schema = registrationSchemas[step];
    const r = schema.safeParse(data);
    this._validationErrors = formatZodErrors(r) as typeof this._validationErrors;
  }
}

export const registrationStepRepository = new RegistrationStepRepository({
  baseEndpoint: '/api/registration/step',
  allowedMethods: ['post']
});
