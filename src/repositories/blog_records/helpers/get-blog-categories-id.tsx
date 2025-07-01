'use server';

import { prismaClient } from '@/prisma';

export const getBlogCategoriesId = async (hyphenatedTitle: string) => {
  const currentBlogCategories = await prismaClient.blogRecords.findFirst({
    where: {
      url: hyphenatedTitle,
    },
    select: {
      blog_records_categories: {
        select: {
          blog_categories: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!currentBlogCategories) {
    return [];
  }

  const categoryIds = currentBlogCategories.blog_records_categories.map((record) =>
    Number(record.blog_categories?.id)
  );

  return categoryIds;
};
