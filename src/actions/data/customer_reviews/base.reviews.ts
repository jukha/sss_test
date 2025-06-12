'use server';

import { prismaClient } from '@/prisma';
import { CustomerReviewEntityBuilder } from '@/entity_builders/customer-review.entity-builder';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';

type ReturnType = Promise<CustomerReviewEntity[]>;

const getBaseCustomerReviews = async (): ReturnType => {
  const reviews = await prismaClient.customerReviews.findMany();
  const dtoBuilder = new CustomerReviewEntityBuilder();

  return dtoBuilder.buildMany(reviews);
};

export default getBaseCustomerReviews;
