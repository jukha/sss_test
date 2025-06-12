import { PackagePromoCode } from '@/__generated__/prisma';
import { PromocodeEntity } from '@/entities/promocode.entity';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';
import { IEntityBuilder } from './entity-builder.interface';

export class PromocodeEntityBuilder implements IEntityBuilder<PackagePromoCode, PromocodeEntity> {
  build(plainEntity: PackagePromoCode, customMapper?: (x: PackagePromoCode, y: PromocodeEntity) => void): PromocodeEntity {
    const dto: PromocodeEntity = convertPrismaTypesToNumber(plainEntity)

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(plainEntities: PackagePromoCode[], customMapper?: (x: PackagePromoCode, y: PromocodeEntity) => void): PromocodeEntity[] {
    return plainEntities.map((entity: PackagePromoCode) => {
      return this.build(entity, customMapper);
    });
  }
}
