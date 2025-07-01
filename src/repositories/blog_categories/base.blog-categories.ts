'use server';

import { BlogCategoryEntity } from '@/entities/blog-category.entity';
import { BlogCategoriesEntityBuilder } from '@/entity_builders/blog-category.entity-builder';
import { prismaClient } from '@/prisma';

type ReturnType = Promise<BlogCategoryEntity[]>;

export const getBlogCategories = async (): ReturnType => {
  const categories = await prismaClient.blogCategories.findMany({
    orderBy: {
      blog_records_categories: {
        _count: 'desc',
      },
    },
  });

  return new BlogCategoriesEntityBuilder().buildMany(categories);
};
