import {NextRequest, NextResponse} from 'next/server';
import {ValidationException} from '@/exceptions/validation.exception';
import {sanitizeRegistration} from '@/app/api/registration/utils/sanitize-registration';
import {getRegistrationFromHeader} from '@/app/api/registration/utils/get-registration-from-header';
import {RegistrationStepController} from '@/app/api/registration/step/registration-step.controller';
import {registrationSchemas} from '@/app/api/registration/step/schemas/step1.schema';

type RequestParams = {
  params: Promise<{step: string}>
}

export const POST = async (req: NextRequest, {params}: RequestParams) => {
  const step = Number((await params).step);

  if (isNaN(step) || !isFinite(step)) {
    return NextResponse.json({error: 'Invalid step'}, {status: 400});
  }

  const registration = await getRegistrationFromHeader(req);

  if (!registration) {
    return NextResponse.json({error: 'Pending registration not found'}, {status: 400});
  }

  const body = await req.json();

  const controller = new RegistrationStepController({schema: registrationSchemas[step], step: 1});

  try {
    const updatedRegistration = await controller.post({dto: body, registration});
    return NextResponse.json(sanitizeRegistration(updatedRegistration));
  } catch (e) {
    if (e instanceof ValidationException) {
      return NextResponse.json({validationErrors: e.validationErrors}, {status: 400});
    } else {
      throw e;
    }
  }
}
