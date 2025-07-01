'use server';

import { prismaClient } from '@/prisma';
import { CustomerReviewEntityBuilder } from '@/entity_builders/customer-review.entity-builder';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { Prisma } from '@/__generated__/prisma';
import CustomerReviewsWhereInput = Prisma.CustomerReviewsWhereInput;

type Options = {
  ageGroup?: string;
  designation?: string;
  metroAreaId?: number;
  limit?: number;
  offset?: number;
};

type ReturnType = {
  total: number;
  limit: number;
  offset: number;
  data: CustomerReviewEntity[];
};

const getBaseCustomerReviews = async ({ metroAreaId, designation, ageGroup, limit = 10, offset = 0 }: Options): Promise<ReturnType> => {
  const whereCondition: { AND: CustomerReviewsWhereInput[ ]} = {
    AND: [
      ...(metroAreaId ? [{ metro_area_id: metroAreaId }] : []),
      ...(ageGroup ? [{ age_group: ageGroup }] : []),
      ...(designation ? [{ designation: designation }] : []),
    ]
  };

  const [reviews, total] = await Promise.all([
    prismaClient.customerReviews.findMany({
      skip: offset,
      take: limit,
      where: whereCondition,
      orderBy: [{ top: 'desc' }, { rating: 'desc' }, { customer_photo_url: 'desc' }, { review_date: 'desc' }, { id: 'asc' }],
    }),
    prismaClient.customerReviews.count({
      where: whereCondition,
    }),
  ]);

  const result = new CustomerReviewEntityBuilder().buildMany(reviews);

  return { total, limit, offset, data: result };
};

export default getBaseCustomerReviews;
