import { instructorsServerApi } from '@/actions/data/instructors';
import { reviewsServerApi } from './customer_reviews';
import { locationCityPageClientApi } from './location_city_page';
import { groupedLessonsPricingServerApi } from './grouped_lessons_pricing';
import { blogsServerApi } from './blogs';

const serverDataApi = {
  customerReviews: reviewsServerApi,
  instructors: instructorsServerApi,
  groupedLessonsPricing: groupedLessonsPricingServerApi,
  blogs: blogsServerApi,
  locationCityPage: locationCityPageClientApi,
};

export default serverDataApi;
