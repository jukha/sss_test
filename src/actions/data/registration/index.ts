import getLocationsAndPricing from '@/actions/data/registration/locations-and-pricing';
import withAutoRetry from '@/utils/with-auto-retry';

export const registrationServerApi = {
  locationsAndPricing: {
    get: getLocationsAndPricing
  }
}

export const registrationClientApi = {
  locationsAndPricing: {
    get: withAutoRetry(getLocationsAndPricing)
  }
}
