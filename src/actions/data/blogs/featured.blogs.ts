'use server';

import { BlogRecords } from '@/__generated__/prisma';
import { prismaClient } from '@/prisma';
import { convertPrismaTypesToNumber, Primitive } from '@/utils/convert-prisma-types-to-primitives';

type ReturnType = Promise<Primitive<BlogRecords> | null>;

export const getFeaturedBlog = async (): ReturnType => {
  const blog = await prismaClient.blogRecords.findFirst({
    where: {
      blog_is_featured: true,
    },
    orderBy: {
      blog_publication_date: 'desc',
    },
  });

  return blog ? convertPrismaTypesToNumber(blog) : null;
};
