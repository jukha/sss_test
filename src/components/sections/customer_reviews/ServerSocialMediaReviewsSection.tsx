import SocialMediaReviewsSection from './SocialMediaReviewsSection';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import {
  getServerCustomerReviews,
  GetServerCustomerReviewsOptions
} from '@/components/sections/customer_reviews/helpers/get-server-customer-reviews';

type Props = GetServerCustomerReviewsOptions & {
  heading?: string;
  description?: string;
};

const ServerSocialMediaReviewsSection = async ({ heading, description, ageGroup, designation }: Props) => {
  const response = await getServerCustomerReviews({ ageGroup, designation });
  if (!response.data.length) return null;

  const data = response.data;
  return <SocialMediaReviewsSection heading={heading} description={description} reviews={data} />;
};

export default withServerSideErrorBoundary(ServerSocialMediaReviewsSection)
