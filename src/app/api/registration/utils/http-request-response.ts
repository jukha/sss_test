import { NextRequest } from 'next/server';
import { RegistrationRecordIdentifier } from '@/app/api/registration/utils/types';


const silentlyConvertStringToBigInt = (value: string | null | undefined): bigint | undefined => {
  if (!value) {
    return;
  }

  try {
    return BigInt(value);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return;
  }
};

export const extractRegistrationIdentifierFromHeaders = (req: NextRequest): RegistrationRecordIdentifier => {
  return {
    id: silentlyConvertStringToBigInt(req.headers.get('X-Registration-Id')),
    secret: req.headers.get('X-Registration-Secret'),
    formTypeId: req.headers.get('X-RegFormType-Id')
  };
};
