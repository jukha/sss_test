import {prismaClient} from '@/prisma';
import {NextRequest, NextResponse} from 'next/server';
import * as crypto from 'crypto';
import {getRegistrationFromCookie} from '@/app/api/registration/utils/get-registration-from-cookie';

const generateSecret = () => {
  return crypto.randomBytes(64).toString('hex');
}

export const POST = async (req: NextRequest) => {
  const formId = req.headers.get('X-Form-Id');
  if (!formId) return NextResponse.json({error: 'No X-Form-Id header'}, {status: 400});

  const existingEntity = await getRegistrationFromCookie(req);
  if (existingEntity) return NextResponse.json(existingEntity);

  const anonUserSecret = generateSecret();

  const entity = await prismaClient.registration.create({data: {anonUserSecret, formId: formId}});
  const response = NextResponse.json(entity);

  const cookieSettings = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30 // 30 d
  } as const;

  response.cookies.set('anonUserSecret', anonUserSecret, cookieSettings);

  return response;
}
