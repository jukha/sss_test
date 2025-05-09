import {NextRequest, NextResponse} from 'next/server';
import {RegistrationRecordIdentifier} from '@/app/api/registration/utils/types';


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


export const extractRegistrationIdentifierFromCookies = (req: NextRequest): RegistrationRecordIdentifier => {
  return {
    id: silentlyConvertStringToBigInt(req.cookies.get('registrationId')?.value),
    secret: req.cookies.get('registrationSecret')?.value,
    formTypeId: req.headers.get('X-RegFormType-Id')
  };
};


export const extractRegistrationIdentifierFromHeaders = (req: NextRequest): RegistrationRecordIdentifier => {
  return {
    id: silentlyConvertStringToBigInt(req.headers.get('X-Registration-Id')),
    secret: req.headers.get('X-Registration-Secret'),
    formTypeId: req.headers.get('X-RegFormType-Id')
  };
};


export const extractRegistrationFormTypeIdFromHeaders = (req: NextRequest) => {
  return req.headers.get('X-RegFormType-Id');
};


type SetRegistrationIdentifierCookiesParams = {
  response: NextResponse,
  registrationIdentifier: RegistrationRecordIdentifier
};


export const setRegistrationIdentifierCookies = ({response, registrationIdentifier}: SetRegistrationIdentifierCookiesParams) => {
  const cookieSettings = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30 // 30 d
  } as const;

  if (registrationIdentifier.id) {
    response.cookies.set('registrationId', registrationIdentifier.id.toString(), cookieSettings);
  }

  if (registrationIdentifier.secret) {
    response.cookies.set('registrationSecret', registrationIdentifier.secret, cookieSettings);
  }
};
