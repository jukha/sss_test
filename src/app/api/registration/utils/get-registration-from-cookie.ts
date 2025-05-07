import {NextRequest} from 'next/server';
import {prismaClient} from '@/prisma';

export const getRegistrationFromCookie = async (req: NextRequest) => {
  const anonUserSecret = req.cookies.get('anonUserSecret');
  const formId = req.headers.get('X-Form-Id');

  if (!anonUserSecret || !formId) return null;

  return prismaClient.registration.findFirst({
    where: {
      AND: [
        {anonUserSecret: anonUserSecret.value},
        {completed: false},
        {formId}
      ]
    }
  });
}
