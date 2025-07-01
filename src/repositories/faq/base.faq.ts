'use server';

import { prismaClient } from '@/prisma';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';
import { FaqEntity } from '@/entities/faq.entity';

type Options = { categoryName: string };

export const getBaseFaqs = async ({ categoryName }: Options): Promise<FaqEntity[]> => {
  const faqs = await prismaClient.faqRecord.findMany({
    where: {
      faq_record_categories: {
        some: {
          faq_category: {
            name: categoryName
          }
        }
      }
    },
    orderBy: { index: 'asc' },
  });

  console.debug('GET BASE FAQ CALLED', categoryName, faqs);

  return faqs.map((f) => {
    return convertPrismaTypesToNumber(f);
  });
};
