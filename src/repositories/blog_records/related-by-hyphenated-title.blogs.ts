'use server';

import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { BlogRecordsEntityBuilder } from '@/entity_builders/blog-record.entity-builder';
import { prismaClient } from '@/prisma';
import { getBlogCategoriesId } from './helpers/get-blog-categories-id';

type Options = {
  hyphenatedTitle: string;
  excludeCurrent?: boolean;
  limit?: number;
};

type ReturnType = Promise<BlogRecordEntity[]>;

export const getRelatedBlogsByHyphenatedTitle = async ({
  hyphenatedTitle,
  excludeCurrent = true,
  limit = 3,
}: Options): ReturnType => {
  const categoryIds = await getBlogCategoriesId(hyphenatedTitle);

  const relatedBlogs = await prismaClient.blogRecords.findMany({
    where: {
      AND: [
        {
          blog_records_categories: {
            some: {
              blog_categories: {
                id: {
                  in: categoryIds,
                },
              },
            },
          },
        },
        excludeCurrent
          ? {
              NOT: {
                url: hyphenatedTitle,
              },
            }
          : {},
      ],
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
    take: limit,
  });

  return new BlogRecordsEntityBuilder().buildMany(relatedBlogs);
};
