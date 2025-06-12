'use server';

import { CustomerReviews } from '@/__generated__/prisma';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { CustomerReviewEntityBuilder } from '@/entity_builders/customer-review.entity-builder';
import { prismaClient } from '@/prisma';

const ageGroups = [
  { type: 'baby', count: 8 },
  { type: 'toddler', count: 8 },
  { type: 'adult', count: 5 },
  { type: 'special needs', count: 3 },
  { type: 'teen', count: 3 },
  { type: 'kid', count: 3 },
];

const getOrderedReviews = (getAgeGroupReviewsPromises: unknown[][]) => {
  const orderedReviews = [];
  let remaining = true;
  while (remaining) {
    remaining = false;

    for (const group of getAgeGroupReviewsPromises) {
      if (group && group.length > 0) {
        orderedReviews.push(group.shift());
        if (group.length > 0) {
          remaining = true;
        }
      }
    }
  }

  return orderedReviews;
};

type Options = {
  limit?: number;
  offset?: number;
};

type ReturnType = {
  total: number;
  limit: number;
  offset: number;
  data: CustomerReviewEntity[];
};

const getPrivateReviews = async ({
  limit = 3,
  offset = 1,
}: Options): Promise<ReturnType> => {
  const getAgeGroupReviewsPromises = ageGroups.map((ag) => {
    return prismaClient.customerReviews.findMany({
      take: ag.count,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        city: true,
        customer_review: true,
        customer_photo: true,
        review_platform: true,
      },
      where: {
        age_group: ag.type,
      },
    });
  });

  const getAgeGroupReviews = await Promise.all(getAgeGroupReviewsPromises);
  const orderedReviews = getOrderedReviews(getAgeGroupReviews);

  const reviews = orderedReviews.slice((offset - 1) * limit, offset * limit);
  const result = new CustomerReviewEntityBuilder().buildMany(
    reviews as CustomerReviews[]
  );

  return {
    total: orderedReviews.length,
    limit: limit,
    offset: offset,
    data: result,
  };
};

export default getPrivateReviews;
