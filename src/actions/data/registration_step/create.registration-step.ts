'use server';

import { loadRegistration } from '@/app/api/registration/utils/registration-record';
import { RegistrationStepController } from '@/app/api/registration/step/registration-step.controller';
import { registrationSchemas } from '@/app/api/registration/step/schemas/step.schemas';
import { CustomerRegistration } from '@/__generated__/prisma';

type Options = {
  step: number;
  registrationIdentifier: {
    id: number | string;
    secret: string;
    formTypeId: string;
  };
  version: number;
  data: Partial<CustomerRegistration>;
}

const isStepNumberValid = (step: number) => {
  return !(isNaN(step) || !isFinite(step));
};

const createRegistrationStep = async ({step, registrationIdentifier, version, data}: Options) => {
  if (!isStepNumberValid(step)) {
    throw new Error('Step is invalid');
  }

  const registration = await loadRegistration(registrationIdentifier);

  if (!registration) {
    return;
  }

  const newRegistrationVersion = version;

  if (registration.version > newRegistrationVersion) {
    return;
  }

  const controller = new RegistrationStepController({schema: registrationSchemas[step], step});

  await controller.put({
    registration,
    freshData: { ...data, version: newRegistrationVersion }
  });
}

export default createRegistrationStep;
