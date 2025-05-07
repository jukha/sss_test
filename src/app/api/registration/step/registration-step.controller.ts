import {z} from 'zod';
import {formatZodErrors} from '@/utils/format-zod-errors';
import {Registration} from '@/__generated__/prisma/client';
import {prismaClient} from '@/prisma';
import {registrationSettings} from '@/app/api/registration/settings';
import {ValidationException} from '@/exceptions/validation.exception';
import {sanitizeRegistration} from '@/app/api/registration/utils/sanitize-registration';

type ConstructorOptions<S> = {
  schema: z.ZodType<S>,
  step: number;
}

type PostOptions<S> = {
  dto: S;
  registration: Registration;
}

export class RegistrationStepController<S> {
  private readonly _schema: z.ZodType<S>;
  private readonly _step: number;

  constructor(options: ConstructorOptions<S>) {
    this._schema = options.schema;
    this._step = options.step;
  }

  async post({dto, registration}: PostOptions<S>) {
    const r = this._schema.safeParse(dto);
    const validationErrors = formatZodErrors(r);

    if (validationErrors) throw new ValidationException(validationErrors);

    let data: Partial<Registration> = {...dto as Partial<Registration>};

    if (this._step > registration.lastCompletedStep) {
      const isLastStep = this._step === registrationSettings.maxStep;
      data = {...data, completed: isLastStep, lastCompletedStep: this._step}
    }

    const updatedRegistration = await prismaClient.registration.update({
      where: {id: registration.id},
      data: data
    })

    await prismaClient.registrationLog.create({
      data: {
        timestamp: new Date(),
        payload: JSON.stringify(sanitizeRegistration(updatedRegistration)),
        anonUserSecret: registration.anonUserSecret
      }
    })

    return updatedRegistration;
  }
}
