import {NextRequest, NextResponse} from 'next/server';
import {ValidationException} from '@/exceptions/validation.exception';
import {sanitizeRegistration} from '@/app/api/registration/utils/sanitize-registration';
import {RegistrationStepController} from '@/app/api/registration/step/registration-step.controller';
import {registrationSchemas} from '@/app/api/registration/step/schemas/step.schemas';
import {extractRegistrationIdentifierFromHeaders} from '@/app/api/registration/utils/http-request-response';
import {loadRegistration} from '@/app/api/registration/utils/registration-record';


type RequestParams = {
  params: Promise<{step: string}>
}


const isStepNumberValid = (step: number) => {
  return !(isNaN(step) || !isFinite(step));
};


export const POST = async (req: NextRequest, {params}: RequestParams) => {
  const step = Number((await params).step);

  if (!isStepNumberValid(step)) {
    return NextResponse.json({error: 'Invalid step'}, {status: 400});
  }

  const registrationIdentifier = extractRegistrationIdentifierFromHeaders(req);
  const registration = await loadRegistration(registrationIdentifier);

  if (!registration) {
    return NextResponse.json({error: 'Pending registration not found'}, {status: 400});
  }

  const newRegistrationVersion = Number(req.headers.get('X-Version') || '0');

  if (!newRegistrationVersion) {
    return NextResponse.json({error: 'Missing X-Version header'}, {status: 400});
  }

  if (registration.version > newRegistrationVersion) {
    return NextResponse.json(sanitizeRegistration(registration));
  }

  const body = await req.json();
  const controller = new RegistrationStepController({schema: registrationSchemas[step], step});

  try {
    const updatedRegistration = await controller.put({
      registration,
      freshData: { ...body, version: newRegistrationVersion }
    });

    return NextResponse.json(sanitizeRegistration(updatedRegistration));
  } catch (e) {
    if (e instanceof ValidationException) {
      return NextResponse.json({validationErrors: e.validationErrors}, {status: 400});
    } else {
      throw e;
    }
  }
};
