import { LocationMetroArea } from '@/__generated__/prisma';
import { MetroAreaEntity } from '@/entities/metro-area.entity';

export class MetroAreaEntityBuilder {
  build(plainEntity: LocationMetroArea, customMapper?: (x: LocationMetroArea, y: MetroAreaEntity) => void): MetroAreaEntity {
    const dto: MetroAreaEntity = {
      id: plainEntity.id,
      name: plainEntity.name,
      stateAbbreviation: plainEntity.state_abbreviation,
      packagePriceTierId: plainEntity.package_price_tier_id,
    }

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
