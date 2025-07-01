import { reviewsServerApi } from './customer_reviews';
import { locationCityPageClientApi } from './location_city_page';
import { groupedLessonsPricingServerApi } from './grouped_lessons_pricing';

const serverDataApi = {
  customerReviews: reviewsServerApi,
  groupedLessonsPricing: groupedLessonsPricingServerApi,
  locationCityPage: locationCityPageClientApi,
};

export default serverDataApi;
