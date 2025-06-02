import { z } from 'zod';
import { extractZodErrors } from '@/utils/extract-zod-errors';
import { CustomerRegistration } from '@/__generated__/prisma/client';
import { registrationSettings } from '@/app/api/registration/settings';
import { ValidationException } from '@/exceptions/validation.exception';
import { addRegistrationHistoryRecord, updateRegistration } from '@/app/api/registration/utils/registration-record';


type ConstructorOptions<S> = {
  schema: z.ZodType<S>,
  step: number;
}


type PostOptions<S> = {
  registration: CustomerRegistration;
  freshData: S;
}


export class RegistrationStepController<S> {
  private readonly _schema: z.ZodType<S>;
  private readonly _step: number;


  constructor(options: ConstructorOptions<S>) {
    this._schema = options.schema;
    this._step = options.step;
  }


  throwIfValidationDoesNotPass(data: S) {
    const validationResults = this._schema.safeParse(data);
    const validationErrors = extractZodErrors(validationResults);
    if (validationErrors) {
      throw new ValidationException(validationErrors);
    }
  }


  async put({registration, freshData}: PostOptions<S>) {
    this.throwIfValidationDoesNotPass(freshData);

    let data: Partial<CustomerRegistration> = {...freshData as Partial<CustomerRegistration>};

    if (!registration.isRegistrationComplete) {
      const isLastStep = this._step === registrationSettings.maxStep;
      data = {...data, isRegistrationComplete: isLastStep}
      // data = {...data, isRegistrationComplete: isLastStep, lastCompletedStep: this._step}
    }

    const updatedRegistration = await updateRegistration({id: registration.id, data});
    await addRegistrationHistoryRecord(updatedRegistration);

    return updatedRegistration;
  }
}
