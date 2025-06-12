import withAutoRetry from '@/utils/with-auto-retry';
import getNearbyMetroAreaPricing from './nearby-metro-area.pricing';
import getNearbyZipcodePricing from './nearby-zipcode.pricing';

export const groupedLessonsPricingServerApi = {
  nearbyMetroArea: {
    get: getNearbyMetroAreaPricing,
  },
  nearbyZipCode: {
    get: getNearbyZipcodePricing,
  },
};

export const groupedLessonsPricingClientApi = {
  nearbyMetroArea: {
    get: withAutoRetry(getNearbyMetroAreaPricing),
  },
  nearbyZipCode: {
    get: withAutoRetry(getNearbyZipcodePricing),
  },
};
