'use server';

import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { BlogRecordsEntityBuilder } from '@/entity_builders/blog-record.entity-builder';
import { prismaClient } from '@/prisma';

type ReturnType = {
  data: BlogRecordEntity[];
  total: number;
  limit: number;
  offset: number;
};

type Options = {
  limit?: number;
  offset?: number;
};

export const getNewestBlogs = async ({ limit = 4, offset = 0 }: Options): Promise<ReturnType> => {
  const [blogs, total] = await Promise.all([
    prismaClient.blogRecords.findMany({
      orderBy: {
        publish_date: 'desc',
      },
      include: {
        blog_records_categories: {
          include: {
            blog_categories: true,
          },
        },
      },
      take: limit,
      skip: offset,
    }),
    prismaClient.blogRecords.count(),
  ]);

  const result = new BlogRecordsEntityBuilder().buildMany(blogs);

  return {
    data: result,
    total: total,
    limit: limit,
    offset: offset,
  };
};
