'use server';

import { CustomerReviews } from '@/__generated__/prisma';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { CustomerReviewEntityBuilder } from '@/entity_builders/customer-review.entity-builder';
import { prismaClient } from '@/prisma';

type Options = {
  cityId: number;
  ageGroup: string;
  limit?: number;
  offset?: number;
};

type ReturnType = {
  total: number;
  limit: number;
  offset: number;
  data: CustomerReviewEntity[];
};

const getNearbyGroupedByAgeCustomerReview = async ({ cityId, ageGroup, limit = 3, offset = 1 }: Options): Promise<ReturnType | null> => {
  const city = await prismaClient.locationCityPage.findUnique({
    where: {
      id: cityId,
    },
  });

  if (!city) {
    return null;
  }

  const reviews = await prismaClient.$queryRaw<unknown[]>`
        SELECT *,
            ROUND((3959 * acos(cos(radians(${city.lat})) * cos( radians(lat)) *
            cos(radians(lng) - radians(${city.lng}) ) + sin ( radians(${city.lat}))
            * sin(radians(lat))))) AS distance
        FROM customer_reviews
        WHERE lat IS NOT NULL AND lng IS NOT NULL
        HAVING age_group = ${ageGroup}
        ORDER BY distance ASC, top DESC, ISNULL(customer_photo) DESC, review_date DESC, review_rank DESC
        LIMIT ${limit}
        OFFSET ${(offset - 1) * limit}
      `;

  const total = await prismaClient.customerReviews.count({
    where: {
      lat: {
        not: null,
      },
      lng: {
        not: null,
      },
      age_group: ageGroup,
    },
  });

  const result = new CustomerReviewEntityBuilder().buildMany(reviews as CustomerReviews[]);

  return { total: total, limit, offset, data: result };
};

export default getNearbyGroupedByAgeCustomerReview;
