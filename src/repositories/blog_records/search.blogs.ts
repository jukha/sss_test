'use server';

import { prismaClient } from '@/prisma';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { BlogRecordsEntityBuilder } from '@/entity_builders/blog-record.entity-builder';

type Options = {
  searchQuery: string;
  limit?: number;
  offset?: number;
};

type ReturnType = {
  data: BlogRecordEntity[];
  total: number;
  limit: number;
  offset: number;
};

export async function getBlogsBySearchQuery({
  searchQuery,
  limit = 4,
  offset = 0,
}: Options): Promise<ReturnType> {
  const [blogs, total] = await Promise.all([
    prismaClient.blogRecords.findMany({
      where: {
        OR: [
          { title: { contains: searchQuery } },
          { body: { contains: searchQuery } },
          { teaser: { contains: searchQuery } },
        ],
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
}
