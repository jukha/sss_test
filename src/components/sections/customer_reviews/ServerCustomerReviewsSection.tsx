import CustomerReviewsSection, { CustomerReviewsSectionProps } from './CustomerReviewsSection';
import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import {
  getServerCustomerReviews,
  GetServerCustomerReviewsOptions
} from '@/components/sections/customer_reviews/helpers/get-server-customer-reviews';

type Props = GetServerCustomerReviewsOptions & Omit<CustomerReviewsSectionProps, 'reviews'>;

const ServerCustomerReviewsSection = async ({ ageGroup, designation, metroAreaId, ...customerReviewSectionProps }: Props) => {
  const response = await getServerCustomerReviews({ ageGroup, designation, metroAreaId });
  if (!response?.data.length) return null;

  const data = response.data;
  return <CustomerReviewsSection reviews={data} {...customerReviewSectionProps} />;
};

export default withServerSideErrorBoundary(ServerCustomerReviewsSection);
