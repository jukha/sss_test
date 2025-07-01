'use server';

import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { BlogRecordsEntityBuilder } from '@/entity_builders/blog-record.entity-builder';
import { prismaClient } from '@/prisma';

type ReturnType = Promise<BlogRecordEntity | null>;

export const getFeaturedBlog = async (): ReturnType => {
  const blog = await prismaClient.blogRecords.findFirst({
    where: {
      is_featured: true,
    },
    include: {
      blog_records_categories: {
        include: {
          blog_categories: true,
        },
      },
    },
    orderBy: {
      publish_date: 'desc',
    },
  });

  if (!blog) return null;

  const dtoBuilder = new BlogRecordsEntityBuilder();

  return dtoBuilder.build(blog);
};
