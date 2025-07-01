import { loadRegistration } from '@/app/api/registration/utils/registration-record';
import { NextRequest, NextResponse } from 'next/server';
import {
  extractRegistrationIdentifierFromRequest
} from '@/app/api/registration/helpers/extract-registration-identifier';
import { RegistrationFormEntityBuilder } from '@/entity_builders/registration-form.entity-builder';

export const GET = async (req: NextRequest) => {
  const registrationIdentifier = extractRegistrationIdentifierFromRequest(req);

  if (!registrationIdentifier) {
    return NextResponse.json({ error: 'Registration identifier headers are incomplete' }, { status: 400 });
  }

  const registrationRecord = await loadRegistration(registrationIdentifier);

  if (!registrationRecord) return NextResponse.json(null);
  return NextResponse.json(new RegistrationFormEntityBuilder().build(registrationRecord))
}
