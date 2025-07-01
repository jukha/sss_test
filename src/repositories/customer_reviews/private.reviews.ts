'use server';

import { CustomerReviews } from '@/__generated__/prisma';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { CustomerReviewEntityBuilder } from '@/entity_builders/customer-review.entity-builder';
import { prismaClient } from '@/prisma';

// Defines how many reviews to fetch for each age group type
const AGE_GROUP_DISTRIBUTION = [
  { type: 'baby', count: 8 },
  { type: 'toddler', count: 8 },
  { type: 'adult', count: 5 },
  { type: 'special needs', count: 3 },
  { type: 'teen', count: 3 },
  { type: 'kid', count: 3 },
];

// Order reviews from different age groups to create a mix based on AGE_GROUP_DISTRIBUTION const
const getOrderedReviews = (ageGroupReviews: CustomerReviews[][]): CustomerReviews[] => {
  const orderedReviews: CustomerReviews[] = [];
  let hasMoreReviews = true;

  while (hasMoreReviews) {
    hasMoreReviews = false;

    for (const group of ageGroupReviews) {
      if (group && group.length > 0) {
        const review = group.shift();
        if (review) {
          orderedReviews.push(review);
        }

        if (group.length > 0) {
          hasMoreReviews = true;
        }
      }
    }
  }

  return orderedReviews;
};

type Options = {
  limit?: number;
  offset?: number;
  metroAreaId?: number;
};

type ReturnType = {
  total: number;
  limit: number;
  offset: number;
  data: CustomerReviewEntity[];
};

const getPrivateReviews = async ({ metroAreaId, limit = 3, offset = 0 }: Options): Promise<ReturnType> => {
  const ageGroupReviewsPromises = AGE_GROUP_DISTRIBUTION.map(({ type, count }) =>
    prismaClient.customerReviews.findMany({
      take: count,
      where: {
        AND: [
          { age_group: type, },
          { designation: 'private' },
          ...(metroAreaId ? [{ metro_area_id: metroAreaId }]: [])
        ]
      },
      orderBy: [{ top: 'desc' }, { rating: 'desc' }, { customer_photo_url: 'desc' }, { review_date: 'desc' }, { id: 'asc' }],
    })
  );

  const ageGroupReviews = await Promise.all(ageGroupReviewsPromises);
  const orderedReviews = getOrderedReviews(ageGroupReviews);

  const result = new CustomerReviewEntityBuilder().buildMany(orderedReviews);

  return {
    data: result,
    total: orderedReviews.length,
    limit,
    offset,
  };
};

export default getPrivateReviews;
