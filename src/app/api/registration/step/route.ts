import { NextRequest, NextResponse } from 'next/server';
import createRegistrationStep from '@/repositories/registration_step/create.registration-step';
import {
  extractRegistrationIdentifierFromRequest
} from '@/app/api/registration/helpers/extract-registration-identifier';

const versionHeaderIsValid = (versionStr: string) => {
  const version = Number(versionStr);
  return !isNaN(version) && isFinite(version);
}

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const registrationIdentifier = extractRegistrationIdentifierFromRequest(req);

  if (!registrationIdentifier) {
    return NextResponse.json({ error: 'Registration identifier headers are incomplete' }, { status: 400 });
  }

  const sendWebhook = req.nextUrl.searchParams.get('sendWebhook') === 'true';
  const formVersion = req.headers.get('X-Version');

  if (!formVersion || !versionHeaderIsValid(formVersion)) {
    return NextResponse.json({ error: 'Form version header was not provided, or it is incorrect' }, { status: 400 });
  }

  const registrationRecord = await createRegistrationStep({
    data,
    registrationIdentifier,
    sendWebhook,
    version: Number(formVersion),
  });

  return NextResponse.json(registrationRecord)
}
