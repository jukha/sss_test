import { NextRequest } from 'next/server';
import { RegistrationRecordIdentifier } from '@/app/api/registration/utils/types';

export const extractRegistrationIdentifierFromRequest = (req: NextRequest): RegistrationRecordIdentifier | null => {
  const registrationId = req.headers.get('X-Registration-Id');
  const secret = req.headers.get('X-Registration-Secret');
  const formTypeId = req.headers.get('X-Form-TypeId');

  if (!registrationId || !secret || !formTypeId) {
    return null;
  }

  return {id: registrationId, secret, formTypeId};
}
