import { convertZipToLatLon } from '@/helpers/convert-zip-to-lat-lon';
import { ServiceabilityErrorEnum } from '@/enum/serviceability-error.enum';
import { LocationsAndPricingEntity } from '@/entities/locations-and-pricing.entity';
import clientDataApi from '@/actions/data/client-data-api';

type Options = {
  zipCode: string;
  requirePool: boolean
  locationsAndPricing: LocationsAndPricingEntity;
}

export async function checkServiceabilityByZip({zipCode, requirePool, locationsAndPricing}: Options) {
  if (locationsAndPricing.zipCodesServiced.find(d => d.zip === zipCode)) {
    return null;
  }

  const {lng, lat} = await convertZipToLatLon(zipCode);

  const instructors = await clientDataApi.instructors.nearbyLatLng.get({lat, lng});

  if (instructors.length < 3) {
    return ServiceabilityErrorEnum.OutsideArea;
  }

  if (!requirePool) {
    return null;
  }

  const hasInstructorsWithPool = instructors.find(i => i.numberOfPoolAccess || 0 > 0)

  if (!hasInstructorsWithPool) {
    return ServiceabilityErrorEnum.NoPools;
  }

  return null;
}
