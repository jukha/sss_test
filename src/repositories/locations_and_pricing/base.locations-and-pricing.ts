import { LocationsAndPricingEntity } from '@/entities/locations-and-pricing.entity';
import { prismaClient } from '@/prisma';
import { PackagePriceTierEntityBuilder } from '@/entity_builders/package-price-tier.entity-builder';
import { LessonPackageEntityBuilder } from '@/entity_builders/lesson-package.entity-builder';
import { ZipCodeServicedEntityBuilder } from '@/entity_builders/zip-code-serviced.entity-builder';
import { MetroAreaEntityBuilder } from '@/entity_builders/metro-area.entity-builder';
import { PromocodeEntityBuilder } from '@/entity_builders/promocode.entity-builder';

const getLocationsAndPricing = async (): Promise<LocationsAndPricingEntity> => {
  const zipCodesServiced = await prismaClient.locationZipCodeServiced.findMany();
  const metroAreas = await prismaClient.locationMetroArea.findMany();
  const promocodes = await prismaClient.packagePromoCode.findMany();
  const packagePriceTiers = await prismaClient.packagePriceTier.findMany({
    include: {
      package_price_matrix: true
    }
  })

  const packagePriceTierBuilder = new PackagePriceTierEntityBuilder();
  const packagePriceMatrixBuilder = new LessonPackageEntityBuilder();

  const pricingEntity = packagePriceTiers.map(e => ({
    ...packagePriceTierBuilder.build(e),
    packagePriceMatrix: packagePriceMatrixBuilder.buildMany(e.package_price_matrix)
  }))

  return {
    zipCodesServiced: new ZipCodeServicedEntityBuilder().buildMany(zipCodesServiced),
    metroAreas: new MetroAreaEntityBuilder().buildMany(metroAreas),
    pricing: pricingEntity,
    promoCodes: new PromocodeEntityBuilder().buildMany(promocodes),
  }
}

export default getLocationsAndPricing;
