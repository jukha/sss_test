import withAutoRetry from '@/utils/with-auto-retry';
import getLocationCityPageDetails from './details.location-city-page';

export const locationCityPageServerApi = {
  details: {
    get: getLocationCityPageDetails,
  },
};

export const locationCityPageClientApi = {
  details: {
    get: withAutoRetry(getLocationCityPageDetails),
  },
};
