import {NextRequest, NextResponse} from 'next/server';
import {extractRegistrationIdentifierFromHeaders} from '@/app/api/registration/utils/http-request-response';
import {loadRegistration} from '@/app/api/registration/utils/registration-record';
import {sanitizeRegistration} from '@/app/api/registration/utils/sanitize-registration';


export const GET = async (req: NextRequest) => {
  const registrationIdentifier = extractRegistrationIdentifierFromHeaders(req);
  const registration = await loadRegistration(registrationIdentifier);

  if (!registration) {
    return new NextResponse(null, {status: 404});
  }

  return NextResponse.json(sanitizeRegistration(registration));
};
