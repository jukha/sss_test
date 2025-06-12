import { prismaClient } from '@/prisma';
import { CustomerRegistration, CustomerRegistrationHistory } from '@/__generated__/prisma/client';
import { generateRegistrationSecret } from '@/app/api/registration/utils/secret';
import { RegistrationRecordIdentifier } from '@/app/api/registration/utils/types';
import { sanitizeRegistration } from '@/app/api/registration/utils/sanitize-registration';
import { RecordSequenceEnum } from '@/enum/record-sequence.enum';
import incrementSequence from '@/app/api/registration/utils/record-sequence';

export const createRegistration = async (data: Partial<CustomerRegistration>): Promise<CustomerRegistration> => {
  const newSequenceVal = await incrementSequence(RecordSequenceEnum.CustomerRegistration)

  return prismaClient.customerRegistration.create({
    data: {
      ...data,
      secret: generateRegistrationSecret(),
      version: data.version || 1,
      orderId: newSequenceVal.val
    }
  });
};

export const loadRegistration = async (recordIdentifier: RegistrationRecordIdentifier): Promise<CustomerRegistration | null> => {
  if (!recordIdentifier.id || !recordIdentifier.secret || !recordIdentifier.formTypeId) {
    return Promise.resolve(null);
  }

  return prismaClient.customerRegistration.findFirst({
    where: {
      AND: [
        {id: BigInt(recordIdentifier.id)},
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

export const updateRegistration = ({id, data}: UpdateRegistrationParams): Promise<CustomerRegistration> => {
  return prismaClient.customerRegistration.update({
    where: {id},
    data: data
  });
};


export const addRegistrationHistoryRecord = (registration: CustomerRegistration): Promise<CustomerRegistrationHistory> => {
  return prismaClient.customerRegistrationHistory.create({
    data: {
      // timestamp: new Date(),
      data: JSON.stringify(sanitizeRegistration(registration)),
      // anonUserSecret: registration.anonUserSecret
    }
  });
};
