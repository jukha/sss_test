import {convertZipToLatLon} from '@/helpers/convert-zip-to-lat-lon';
import {instructorsRepository} from '@/repositories/instructors.repository';
import {InstructorEntity} from '@/entities/instructor.entity';
import {ServiceabilityErrorEnum} from '@/enum/serviceability-error.enum';
import {LocationsAndPricingEntity} from '@/entities/locations-and-prices.entity';

type Options = {
  zipCode: string;
  requirePool: boolean
  locationsAndPricing: LocationsAndPricingEntity;
}

export async function checkServiceabilityByZip({zipCode, requirePool, locationsAndPricing}: Options) {
  if (locationsAndPricing.zipCodesServiced.find(d => d.zip === zipCode)) {
    return true;
  }

  const {lng, lat} = await convertZipToLatLon(zipCode);

  const {data} = await instructorsRepository.get<InstructorEntity[]>({
    endpoint: `/search/count?lat=${lat}&lng=${lng}&radius=25`
  })

  if (!data) {
    throw new Error('Instructors search API error');
  }


  if (data.length < 3) {
    return ServiceabilityErrorEnum.OutsideArea;
  }

  if (!requirePool) {
    return;
  }

  const hasInstructorsWithPool = data.find(i => i.number_of_pools_access > 0)
  if (!hasInstructorsWithPool) {
    return ServiceabilityErrorEnum.NoPools;
  }
}
