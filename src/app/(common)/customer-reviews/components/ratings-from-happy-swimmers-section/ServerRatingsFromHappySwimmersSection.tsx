import getBaseCustomerReviews from '@/repositories/customer_reviews/base.reviews';
import RatingsFromHappySwimmersSection from './RatingsFromHappySwimmersSection';

export const ServerRatingsFromHappySwimmersSection = async () => {
  const response = await getBaseCustomerReviews({ limit: 10, offset: 0 });

  if (!response.data.length) return null;

  const data = response.data;

  return <RatingsFromHappySwimmersSection data={data} />;
};
