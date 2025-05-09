import {prismaClient} from '@/prisma';
import {
  CustomerRegistration,
  CustomerRegistrationHistory
} from '@/__generated__/prisma/client';
import {generateRegistrationSecret} from '@/app/api/registration/utils/secret';
import {RegistrationRecordIdentifier} from '@/app/api/registration/utils/types';
import {sanitizeRegistration} from '@/app/api/registration/utils/sanitize-registration';


export const createRegistration = async (data: Partial<CustomerRegistration>): Promise<CustomerRegistration> => {
  data.secret = generateRegistrationSecret();

  return await prismaClient.customerRegistration.create({data});
};


export const loadRegistration = async (recordIdentifier: RegistrationRecordIdentifier): Promise<CustomerRegistration | null> => {
  if (!recordIdentifier.id || !recordIdentifier.secret || !recordIdentifier.formTypeId) {
    return Promise.resolve(null);
  }

  return prismaClient.customerRegistration.findFirst({
    where: {
      AND: [
        {id: recordIdentifier.id},
        {secret: recordIdentifier.secret},
        {registrationFormType: recordIdentifier.formTypeId}
      ]
    }
  });
};


export type UpdateRegistrationParams = {
  id: bigint,
  data: Partial<CustomerRegistration>
}

export const updateRegistration = async ({id, data}: UpdateRegistrationParams): Promise<CustomerRegistration> => {
  return await prismaClient.customerRegistration.update({
    where: {id},
    data: data
  });
};


export const addRegistrationHistoryRecord = async (registration: CustomerRegistration): Promise<CustomerRegistrationHistory> => {
  return await prismaClient.customerRegistrationHistory.create({
    data: {
      // timestamp: new Date(),
      data: JSON.stringify(sanitizeRegistration(registration)),
      // anonUserSecret: registration.anonUserSecret
    }
  });
};


export const extractIdentifierFromRegistration = (registrationRecord: Partial<CustomerRegistration>): RegistrationRecordIdentifier => {
  return {
    id: registrationRecord.id,
    secret: registrationRecord.secret,
    formTypeId: registrationRecord.registrationFormType
  };
};
