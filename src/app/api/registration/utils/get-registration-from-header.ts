import {NextRequest} from 'next/server';
import {prismaClient} from '@/prisma';

export const getRegistrationFromHeader = async (req: NextRequest) => {
  const anonUserSecret = req.headers.get('X-Anonymous-Secret')
  const formId = req.headers.get('X-Form-Id')

  if (!anonUserSecret || !formId) return null;

  return prismaClient.registration.findFirst({
    where: {
      AND: [
        {anonUserSecret: anonUserSecret},
        {completed: false},
        {formId}
      ]
    }
  });
}
