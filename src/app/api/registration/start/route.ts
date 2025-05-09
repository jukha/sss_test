import {NextRequest, NextResponse} from 'next/server';

import {
  extractRegistrationIdentifierFromCookies,
  extractRegistrationFormTypeIdFromHeaders,
  setRegistrationIdentifierCookies
} from '@/app/api/registration/utils/http-request-response';

import {
  createRegistration,
  loadRegistration,
  extractIdentifierFromRegistration
} from '@/app/api/registration/utils/registration-record';


export const POST = async (req: NextRequest) => {
  const formTypeId = extractRegistrationFormTypeIdFromHeaders(req);
  if (!formTypeId) {
    return NextResponse.json({error: 'No X-RegFormType-Id header'}, {status: 400});
  }

  const existingRegistrationIdentifier = extractRegistrationIdentifierFromCookies(req);
  const existingRegistration = await loadRegistration(existingRegistrationIdentifier);
  if (existingRegistration) {
    return NextResponse.json(existingRegistration);
  }

  const newRegistration = await createRegistration({
    registrationFormType: formTypeId
  });
  const newRegistrationIdentifier = extractIdentifierFromRegistration(newRegistration);

  const response = NextResponse.json(newRegistration);
  setRegistrationIdentifierCookies({response, registrationIdentifier: newRegistrationIdentifier});
  return response;
};
