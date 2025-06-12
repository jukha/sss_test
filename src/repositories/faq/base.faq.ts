'use server';

import { Faq } from '@/__generated__/prisma';
import { prismaClient } from '@/prisma';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

type Options = { categoryName: string };

type ReturnType = Promise<Faq[]>;

export const getBaseFaqs = async ({ categoryName }: Options): ReturnType => {
  const faqs = await prismaClient.faq.findMany({
    where: {
      faqCategories: {
        name: categoryName,
      },
    },
    orderBy: { index: 'desc' },
  });

  return faqs.map((f) => {
    return convertPrismaTypesToNumber(f);
  });
};
 