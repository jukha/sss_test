import withAutoRetry from '@/utils/with-auto-retry';
import getNearbyGroupedByAgeCustomerReview from './nearby-grouped-by-age.reviews';

export const reviewsServerApi = {
  nearbyGroupedByAge: {
    get: getNearbyGroupedByAgeCustomerReview,
  },
};

export const reviewsClientApi = {
  nearbyGroupedByAge: {
    get: withAutoRetry(getNearbyGroupedByAgeCustomerReview),
  },
};
