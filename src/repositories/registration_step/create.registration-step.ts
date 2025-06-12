'use server';

import {
  addRegistrationHistoryRecord,
  loadRegistration,
  updateRegistration
} from '@/app/api/registration/utils/registration-record';
import { RegistrationForm } from '@/entities/registration-form.entity';
import { CustomerRegistration } from '@/__generated__/prisma';
import { RegistrationRecordIdentifier } from '@/app/api/registration/utils/types';

type Options = {
  registrationIdentifier: RegistrationRecordIdentifier
  version: number;
  data: Partial<RegistrationForm>;
}

const createRegistrationStep = async ({registrationIdentifier, version, data}: Options) => {
  const registration = await loadRegistration(registrationIdentifier);
  if (!registration) return;

  const newRegistrationVersion = version;
  if (registration.version > newRegistrationVersion) return;

  const freshData = { ...data, version: newRegistrationVersion };

  delete freshData.policiesAgreement;
  delete freshData.youngstersPoliciesAgreement;

  const updatedRegistration = await updateRegistration({
    id: registration.id,
    data: freshData as Partial<CustomerRegistration>
  });

  await addRegistrationHistoryRecord(updatedRegistration);
  return updatedRegistration;
}

export default createRegistrationStep;
