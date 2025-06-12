'use server';

import { BlogCategories } from '@/__generated__/prisma';
import { prismaClient } from '@/prisma';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

type ReturnType = Promise<BlogCategories[]>;

export const getBlogCategories = async (): ReturnType => {
  const categories = await prismaClient.blogCategories.findMany({
    orderBy: {
      blog_records_categories: {
        _count: 'desc',
      },
    },
  });

  return convertPrismaTypesToNumber(categories);
};
