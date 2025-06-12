'use server';

import { BlogRecords } from '@/__generated__/prisma';
import { prismaClient } from '@/prisma';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

type ReturnType = Promise<BlogRecords[]>;

export const getNewestBlogs = async (): ReturnType => {
  const blogs = await prismaClient.blogRecords.findMany({
    orderBy: {
      blog_publication_date: 'desc',
    },
  });

  return convertPrismaTypesToNumber(blogs);
};
