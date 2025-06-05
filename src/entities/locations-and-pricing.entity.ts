import { ZipCodesServicedEntity } from '@/entities/zip-codes-serviced.entity';
import { MetroAreaEntity } from '@/entities/metro-area.entity';
import { PackagePriceTierEntity } from '@/entities/package-price-tier.entity';
import { LessonPackageEntity } from '@/entities/lesson-package.entity';
import { PromocodeEntity } from '@/entities/promocode.entity';

export type PricingEntity = (PackagePriceTierEntity & {packagePriceMatrix: LessonPackageEntity[]});

export type LocationsAndPricingEntity = {
  zipCodesServiced: ZipCodesServicedEntity[];
  metroAreas: MetroAreaEntity[];
  pricing: PricingEntity[];
  promoCodes: PromocodeEntity[];
}
