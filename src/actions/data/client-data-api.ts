import { instructorsClientApi } from '@/actions/data/instructors';
import { reviewsClientApi } from './customer_reviews';
import { locationCityPageClientApi } from './location_city_page';
import { blogsClientApi } from './blogs';
import { groupedLessonsPricingClientApi } from './grouped_lessons_pricing';

const clientDataApi = {
  customerReviews: reviewsClientApi,
  instructors: instructorsClientApi,
  groupedLessonsPricing: groupedLessonsPricingClientApi,
  locationCityPage: locationCityPageClientApi,
  blogs: blogsClientApi,
};

export default clientDataApi;
