import {GenericRepository} from '@/repositories/generic.repository';
import {LocationsAndPricingEntity} from '@/entities/locations-and-prices.entity';

class LocationsAndPricingRepository extends GenericRepository<LocationsAndPricingEntity> {}

export const locationsAndPricingRepository = new LocationsAndPricingRepository({
  baseEndpoint: '/api/locations_and_pricing',
  allowedMethods: ['post']
});
