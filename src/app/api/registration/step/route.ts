import { NextRequest, NextResponse } from 'next/server';
import { RegistrationRecordIdentifier } from '@/app/api/registration/utils/types';
import createRegistrationStep from '@/repositories/registration_step/create.registration-step';

const versionHeaderIsValid = (versionStr: string) => {
  const version = Number(versionStr);
  return !isNaN(version) && isFinite(version);
}

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const registrationId = req.headers.get('X-Registration-Id');
  const secret = req.headers.get('X-Registration-Secret');
  const formTypeId = req.headers.get('X-Form-TypeId');

  if (!registrationId || !secret || !formTypeId) {
    return NextResponse.json({ error: 'Registration identifier headers are incomplete' }, { status: 400 });
  }

  const formVersion = req.headers.get('X-Version');

  if (!formVersion || !versionHeaderIsValid(formVersion)) {
    return NextResponse.json({ error: 'Form version header was not provided, or it is incorrect' }, { status: 400 });
  }

  const registrationIdentifier: RegistrationRecordIdentifier = { id: registrationId, secret: secret, formTypeId: formTypeId };

  const registrationRecord = await createRegistrationStep({
    data,
    registrationIdentifier,
    version: Number(formVersion),
  });

  return NextResponse.json(registrationRecord)
}
