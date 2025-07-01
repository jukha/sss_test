'use server';

import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { BlogRecordsEntityBuilder } from '@/entity_builders/blog-record.entity-builder';
import { prismaClient } from '@/prisma';

type ReturnType = Promise<BlogRecordEntity | null>;

type Options = {
  hyphenatedTitle: string;
};

export const getBlogByHyphenatedTitle = async ({ hyphenatedTitle }: Options): ReturnType => {
  const blog = await prismaClient.blogRecords.findFirst({
    where: {
      url: hyphenatedTitle,
    },
  });

  if (!blog) return null;

  const dtoBuilder = new BlogRecordsEntityBuilder();

  return dtoBuilder.build(blog);
};
