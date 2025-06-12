import { LocationMetroArea } from '@/__generated__/prisma';
import { MetroAreaEntity } from '@/entities/metro-area.entity';
import { IEntityBuilder } from './entity-builder.interface';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

export class MetroAreaEntityBuilder implements IEntityBuilder<LocationMetroArea, MetroAreaEntity> {
  build(plainEntity: LocationMetroArea, customMapper?: (x: LocationMetroArea, y: MetroAreaEntity) => void): MetroAreaEntity {
    const dto: MetroAreaEntity = convertPrismaTypesToNumber({
      id: plainEntity.id,
      name: plainEntity.name,
      stateAbbreviation: plainEntity.state_abbreviation,
      packagePriceTierId: plainEntity.package_price_tier_id,
      serviceAvailable: plainEntity.are_we_serving,
      haveSIWithPool: plainEntity.have_sis_with_pool,
      matchRate30Day: plainEntity.match_rate_30_day,
    });

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(plainEntities: LocationMetroArea[], customMapper?: (x: LocationMetroArea, y: MetroAreaEntity) => void): MetroAreaEntity[] {
    return plainEntities.map((entity: LocationMetroArea) => {
      return this.build(entity, customMapper);
    });
  }
}
