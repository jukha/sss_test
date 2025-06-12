import withAutoRetry from '@/utils/with-auto-retry';
import getBaseCustomerReviews from './base.reviews';
import getGroupedByAgeCustomerReviews from './grouped-by-age.reviews';
import getPrivateReviews from './private.reviews';
import getNearbyGroupedByAgeCustomerReview from './nearby-grouped-by-age.reviews';

export const reviewsServerApi = {
  base: {
    get: getBaseCustomerReviews,
  },
  groupedByAge: {
    get: getGroupedByAgeCustomerReviews,
  },
  nearbyGroupedByAge: {
    get: getNearbyGroupedByAgeCustomerReview,
  },
  private: {
    get: getPrivateReviews,
  },
};

export const reviewsClientApi = {
  base: {
    get: withAutoRetry(getBaseCustomerReviews),
  },
  groupedByAge: {
    get: withAutoRetry(getGroupedByAgeCustomerReviews),
  },
  nearbyGroupedByAge: {
    get: withAutoRetry(getNearbyGroupedByAgeCustomerReview),
  },
  private: {
    get: withAutoRetry(getPrivateReviews),
  },
};
