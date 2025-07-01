import { LocationStateEntity } from '@/entities/location-state.entity';
import { IEntityBuilder } from './entity-builder.interface';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';
import { LocationStateWithRelations } from '@/repositories/location_states/base.location_states';

export class LocationStateEntityBuilder implements IEntityBuilder<LocationStateWithRelations, LocationStateEntity> {
  build(
    plainEntity: LocationStateWithRelations,
    customMapper?: ((x: LocationStateWithRelations, y: LocationStateEntity) => void) | undefined
  ): LocationStateEntity {
    const dto: LocationStateEntity = convertPrismaTypesToNumber({
      id: plainEntity.id,
      name: plainEntity.name,
      abbreviation: plainEntity.abbreviation,
      locationCityPage: plainEntity.location_city_page ?? [],
      locationMetroArea: plainEntity.location_metro_area ?? [],
    });

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(
    plainEntities: LocationStateWithRelations[],
    customMapper?: ((x: LocationStateWithRelations, y: LocationStateEntity) => void) | undefined
  ): LocationStateEntity[] {
    return plainEntities.map((entity: LocationStateWithRelations) => {
      return this.build(entity, customMapper);
    });
  }
}
