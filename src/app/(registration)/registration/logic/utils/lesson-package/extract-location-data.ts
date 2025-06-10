import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { PricingEntity } from '@/entities/locations-and-pricing.entity';
import { ZipCodesServicedEntity } from '@/entities/zip-codes-serviced.entity';
import { MetroAreaEntity } from '@/entities/metro-area.entity';

type ExtractLocationPackagesParams = {
  zip?: string | null;
  zipCodesServiced?: ZipCodesServicedEntity[];
  metroAreas?: MetroAreaEntity[];
  pricing?: PricingEntity[];
};

export const extractLocationPackages = ({
  zip,
  zipCodesServiced,
  metroAreas,
  pricing,
}: ExtractLocationPackagesParams): LessonPackageEntity[] | undefined => {
  return extractLocationPricing({ zip, zipCodesServiced, metroAreas, pricing })?.packagePriceMatrix ?? [];
};

type ExtractLocationPricingParams = {
  zip?: string | null;
  zipCodesServiced?: ZipCodesServicedEntity[];
  metroAreas?: MetroAreaEntity[];
  pricing?: PricingEntity[];
};

export const extractLocationPricing = ({
  zip,
  zipCodesServiced,
  metroAreas,
  pricing,
}: ExtractLocationPricingParams): PricingEntity | undefined => {
  const zipCodeMetroAreaId = zipCodesServiced?.find(({ zip: servicedZip }) => servicedZip === zip)?.metroAreaId;
  const packagePriceTierId = metroAreas?.find(({ id }) => id === zipCodeMetroAreaId)?.packagePriceTierId;

  return pricing?.find(({ id }) => id === packagePriceTierId);
};

type ExtractLocationMetroAreaParams = {
  zip?: string | null;
  zipCodesServiced?: ZipCodesServicedEntity[];
  metroAreas?: MetroAreaEntity[];
};

export const extractLocationMetroArea = ({ zip, zipCodesServiced, metroAreas }: ExtractLocationMetroAreaParams) => {
  const zipCodeMetroAreaId = zipCodesServiced?.find(({ zip: servicedZip }) => servicedZip === zip)?.metroAreaId;

  return metroAreas?.find(({ id }) => id === zipCodeMetroAreaId);
};
