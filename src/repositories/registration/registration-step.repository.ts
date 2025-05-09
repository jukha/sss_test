import {GenericRepository} from '@/repositories/generic.repository';
import {RegistrationForm} from '@/entities/registration-form.entity';
import {registrationSchemas} from '@/app/api/registration/step/schemas/step.schemas';
import {extractZodErrors} from '@/utils/extract-zod-errors';


class RegistrationStepRepository extends GenericRepository<RegistrationForm> {
  validate<D>(step: number, data: D) {
    const schema = registrationSchemas[step];
    const validationResults = schema.safeParse(data);
    this._validationErrors = extractZodErrors(validationResults) as typeof this._validationErrors;
  }
}


export const registrationStepRepository = new RegistrationStepRepository({
  baseEndpoint: '/api/registration/step',
  allowedMethods: ['post']
});
