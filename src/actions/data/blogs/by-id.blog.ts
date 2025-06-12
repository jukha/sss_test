'use server'

import { BlogRecords } from '@/__generated__/prisma';
import { prismaClient } from '@/prisma';
import { convertPrismaTypesToNumber, Primitive } from '@/utils/convert-prisma-types-to-primitives';

type ReturnType = Promise<Primitive<BlogRecords> | null>;

type Options = {
  id: number;
};

export const getBlogById = async ({ id }: Options): ReturnType => {
  const blog = await prismaClient.blogRecords.findUnique({
    where: {
      id: id,
    },
  });

  return blog ? convertPrismaTypesToNumber(blog) : null;
};
