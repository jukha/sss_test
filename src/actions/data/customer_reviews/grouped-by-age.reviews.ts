'use server';

import { CustomerReviews, Prisma } from '@/__generated__/prisma';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { CustomerReviewEntityBuilder } from '@/entity_builders/customer-review.entity-builder';
import { prismaClient } from '@/prisma';

type Options = {
  ageGroup?: string;
  designation?: string;
  limit?: number;
  offset?: number;
};

type ReturnType = {
  total: number;
  limit: number;
  offset: number;
  data: CustomerReviewEntity[];
};

const getGroupedByAgeCustomerReviews = async ({ ageGroup, designation, limit = 3, offset = 1 }: Options): Promise<ReturnType | null> => {
  const whereCondition: Prisma.CustomerReviewsWhereInput = {};

  if (ageGroup && designation) {
    whereCondition.AND = [{ age_group: ageGroup }, { designation: designation }];
  } else if (ageGroup) {
    whereCondition.age_group = ageGroup;
  } else if (designation) {
    whereCondition.designation = designation;
  }

  const [reviews, total] = await Promise.all([
    prismaClient.customerReviews.findMany({
      skip: (offset - 1) * limit,
      take: limit,
      where: whereCondition,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        city: true,
        customer_review: true,
        customer_photo: true,
        review_platform: true,
      },
      orderBy: {
        review_date: 'desc',
      },
    }),
    prismaClient.customerReviews.count({
      where: whereCondition,
    }),
  ]);

  const result = new CustomerReviewEntityBuilder().buildMany(reviews as CustomerReviews[]);

  return { total: total, limit: limit, offset: offset, data: result };
};

export default getGroupedByAgeCustomerReviews;
