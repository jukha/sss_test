import { LocationZipCodeServiced } from '@/__generated__/prisma';
import { ZipCodesServicedEntity } from '@/entities/zip-codes-serviced.entity';

export class ZipCodeServicedEntityBuilder {
  build(plainEntity: LocationZipCodeServiced, customMapper?: (x: LocationZipCodeServiced, y: ZipCodesServicedEntity) => void): ZipCodesServicedEntity {
    const dto: ZipCodesServicedEntity = {
      id: plainEntity.id,
      zip: plainEntity.zip,
      metroAreaId: plainEntity.metro_area_id
    }

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(plainEntities: LocationZipCodeServiced[], customMapper?: (x: LocationZipCodeServiced, y: ZipCodesServicedEntity) => void): ZipCodesServicedEntity[] {
    return plainEntities.map((entity: LocationZipCodeServiced) => {
      return this.build(entity, customMapper);
    });
  }
}
