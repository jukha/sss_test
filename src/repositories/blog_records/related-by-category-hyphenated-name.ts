'use server';

import { BlogCategoryEntity } from '@/entities/blog-category.entity';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { BlogCategoriesEntityBuilder } from '@/entity_builders/blog-category.entity-builder';
import { BlogRecordsEntityBuilder } from '@/entity_builders/blog-record.entity-builder';
import { prismaClient } from '@/prisma';

type Options = {
  hyphenatedName: string;
  limit: number;
};

type ReturnType = {
  data: BlogRecordEntity[];
  currentCategory: BlogCategoryEntity;
};

export const getRelatedBlogsByHyphenatedCategoryName = async ({
  hyphenatedName,
  limit = 3,
}: Options): Promise<ReturnType | null> => {
  const [blogs, category] = await Promise.all([
    prismaClient.blogRecords.findMany({
      where: {
        blog_records_categories: {
          some: {
            blog_categories: {
              url: hyphenatedName,
            },
          },
        },
      },
      include: {
        blog_records_categories: {
          include: {
            blog_categories: true,
          },
        },
      },
      take: limit,
    }),
    prismaClient.blogCategories.findFirst({
      where: {
        url: hyphenatedName,
      },
    }),
  ]);

  if (!blogs || !category) return null;

  const blogsResult = new BlogRecordsEntityBuilder().buildMany(blogs);
  const categoryResult = new BlogCategoriesEntityBuilder().build(category);

  return { data: blogsResult, currentCategory: categoryResult };
};
