import { PackagePriceTier } from '@/__generated__/prisma';
import { PackagePriceTierEntity } from '@/entities/package-price-tier.entity';

export class PackagePriceTierEntityBuilder {
  build(plainEntity: PackagePriceTier, customMapper?: (x: PackagePriceTier, y: PackagePriceTierEntity) => void): PackagePriceTierEntity {
    const dto: PackagePriceTierEntity = {
      id: plainEntity.id,
      name: plainEntity.name,
      registrationFee: plainEntity.registration_fee ? Number(plainEntity.registration_fee) : null,
    }

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(plainEntities: PackagePriceTier[], customMapper?: (x: PackagePriceTier, y: PackagePriceTierEntity) => void): PackagePriceTierEntity[] {
    return plainEntities.map((entity: PackagePriceTier) => {
      return this.build(entity, customMapper);
    });
  }
}
