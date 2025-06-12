'use server';

import { BlogRecords } from '@/__generated__/prisma';
import { prismaClient } from '@/prisma';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

type Options = {
  categoryName: string;
  limit?: number;
};

type ReturnType = Promise<BlogRecords[]>;

export const getRelatedBlogs = async ({ categoryName, limit = 3 }: Options): ReturnType => {
  const blogs = await prismaClient.blogRecords.findMany({
    where: {
      blog_records_categories: {
        some: {
          blog_categories: {
            title: categoryName,
          },
        },
      },
    },
    orderBy: {
      blog_publication_date: 'desc',
    },
    take: limit,
  });

  return convertPrismaTypesToNumber(blogs);
};
