import getPrivateReviews from '@/repositories/customer_reviews/private.reviews';
import getBaseCustomerReviews from '@/repositories/customer_reviews/base.reviews';

export type GetServerCustomerReviewsOptions = {
  ageGroup?: string;
  designation?: string;
  metroAreaId?: number;
}

export const getServerCustomerReviews = async (options: GetServerCustomerReviewsOptions) => {
  const { ageGroup, designation, metroAreaId } = options;
  const pagination = { limit: 30, offset: 0, };
  const getOptions = { ageGroup, designation, metroAreaId, ...pagination }

  if (designation === 'private') return await getPrivateReviews(getOptions);
  return await getBaseCustomerReviews(getOptions);
}
