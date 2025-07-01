import { LocationCityPage } from '@/__generated__/prisma';
import { IEntityBuilder } from './entity-builder.interface';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';
import { LocationCityPageEntity } from '@/entities/location-city-page.entity';

export class LocationCityPageEntityBuilder implements IEntityBuilder<LocationCityPage, LocationCityPageEntity> {
  build(plainEntity: LocationCityPage, customMapper?: (x: LocationCityPage, y: LocationCityPageEntity) => void): LocationCityPageEntity {
    const dto: LocationCityPageEntity = convertPrismaTypesToNumber(plainEntity);

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(plainEntities: LocationCityPage[], customMapper?: (x: LocationCityPage, y: LocationCityPageEntity) => void): LocationCityPageEntity[] {
    return plainEntities.map((entity: LocationCityPage) => {
      return this.build(entity, customMapper);
    });
  }
}
