import { z } from 'zod';
import { extractZodErrors } from '@/utils/extract-zod-errors';
import { CustomerRegistration } from '@/__generated__/prisma/client';
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
    if (!this._schema) {
      return;
    }

    const validationResults = this._schema.safeParse(data);
    const validationErrors = extractZodErrors(validationResults);
    if (validationErrors) {
      throw new ValidationException(validationErrors);
    }
  }

  async put({registration, freshData}: PostOptions<S>) {
    // this.throwIfValidationDoesNotPass(freshData);

    // @ts-expect-error Remove this field as it does not exist in the DB.
    delete freshData.policiesAgreement;
    // @ts-expect-error Remove this field as it does not exist in the DB.
    delete freshData.youngstersPoliciesAgreement;

    const data: Partial<CustomerRegistration> = {...freshData as Partial<CustomerRegistration>};

    const updatedRegistration = await updateRegistration({id: registration.id, data});
    await addRegistrationHistoryRecord(updatedRegistration);

    return updatedRegistration;
  }
}
