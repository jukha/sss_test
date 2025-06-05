import getFeaturedInstructors from '@/actions/data/instructors/featured.instructors';
import withAutoRetry from '@/utils/with-auto-retry';
import getInstructorsNearbyCity from '@/actions/data/instructors/nearby-city.instructors';
import getInstructorsNearbyZipcode from '@/actions/data/instructors/nearby-zipcode.instructors';
import getInstructorsNearbyLatLng from '@/actions/data/instructors/nearby-lat-lng.instructors';

export const instructorsServerApi = {
  featured: {
    get: getFeaturedInstructors
  },
  nearbyCity: {
    get: getInstructorsNearbyCity,
  },
  nearbyZipcode: {
    get: getInstructorsNearbyZipcode,
  },
  nearbyLatLng: {
    get: getInstructorsNearbyLatLng,
  }
}

export const instructorsClientApi = {
  featured: {
    get: withAutoRetry(getFeaturedInstructors)
  },
  nearbyCity: {
    get: withAutoRetry(getInstructorsNearbyCity),
  },
  nearbyZipcode: {
    get: withAutoRetry(getInstructorsNearbyZipcode),
  },
  nearbyLatLng: {
    get: withAutoRetry(getInstructorsNearbyLatLng),
  }
}
