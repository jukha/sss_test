import {NextRequest, NextResponse} from 'next/server';
import {getRegistrationFromHeader} from '@/app/api/registration/utils/get-registration-from-header';
import {sanitizeRegistration} from '@/app/api/registration/utils/sanitize-registration';

export const GET = async (req: NextRequest) => {
  const registration = await getRegistrationFromHeader(req);

  if (!registration) {
    return new NextResponse(null, {status: 404});
  }

  return NextResponse.json(sanitizeRegistration(registration));
}
