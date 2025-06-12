import { CustomerReviews } from '@/__generated__/prisma';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { IEntityBuilder } from './entity-builder.interface';

export class CustomerReviewEntityBuilder implements IEntityBuilder<CustomerReviews, CustomerReviewEntity> {
  build(plaintEntity: CustomerReviews, customMapper?: (x: CustomerReviews, y: CustomerReviewEntity) => void): CustomerReviewEntity {
    const dto: CustomerReviewEntity = {
      id: Number(plaintEntity.id),
      name: `${plaintEntity.first_name} ${plaintEntity.last_name ? plaintEntity.last_name[0] : ''}.`.trim(),
      city: plaintEntity.city,
      body: plaintEntity.customer_review,
      avatar_url: plaintEntity.customer_photo,
      platform: plaintEntity.review_platform,
    };

    if (customMapper) {
      customMapper(plaintEntity, dto);
    }

    return dto;
  }

  buildMany(entities: CustomerReviews[], customMapper?: (x: CustomerReviews, y: CustomerReviewEntity) => void): CustomerReviewEntity[] {
    return entities.map((entity: CustomerReviews) => {
      return this.build(entity, customMapper);
    });
  }
}
