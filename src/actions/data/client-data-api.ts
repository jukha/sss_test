import { reviewsClientApi } from './customer_reviews';
import { locationCityPageClientApi } from './location_city_page';
import { groupedLessonsPricingClientApi } from './grouped_lessons_pricing';

const clientDataApi = {
  customerReviews: reviewsClientApi,
  groupedLessonsPricing: groupedLessonsPricingClientApi,
  locationCityPage: locationCityPageClientApi,
};

export default clientDataApi;
