import { CustomerReviews } from '@/__generated__/prisma';
import { CustomerReviewEntity } from '@/entities/customer-review.entity';
import { IEntityBuilder } from './entity-builder.interface';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

export class CustomerReviewEntityBuilder implements IEntityBuilder<CustomerReviews, CustomerReviewEntity> {
  build(
    plaintEntity: CustomerReviews,
    customMapper?: (x: CustomerReviews, y: CustomerReviewEntity) => void
  ): CustomerReviewEntity {
    const dto: CustomerReviewEntity = convertPrismaTypesToNumber({
      id: plaintEntity.id,
      instructorId: plaintEntity.instructor_id,
      metroAreaId: plaintEntity.metro_area_id,
      neighborhoodId: plaintEntity.neighborhood_id,
      city: plaintEntity.city_name,
      customerAddressCity: plaintEntity.customer_address_city,
      customerAddressState: plaintEntity.customer_address_state,
      customerAddressZip: plaintEntity.customer_address_zip,
      lat: plaintEntity.lat,
      lng: plaintEntity.lng,
      ageGroup: plaintEntity.age_group,
      designation: plaintEntity.designation,
      body: plaintEntity.review_text,
      reviewDate: plaintEntity.review_date ? plaintEntity.review_date.toUTCString() : null,
      rating: plaintEntity.rating,
      top: plaintEntity.top,
      customerName: this.constructAuthorName(plaintEntity.customer_fist_name, plaintEntity.customer_last_name),
      customerPhotoUrl: plaintEntity.customer_photo_url,
      public: plaintEntity.public,
      socialPlatform: plaintEntity.source_platform,
      avatarUrl: plaintEntity.customer_photo_url,
      socialUrl: plaintEntity.source_url,
    });

    if (customMapper) {
      customMapper(plaintEntity, dto);
    }

    return dto;
  }

  buildMany(
    entities: CustomerReviews[],
    customMapper?: (x: CustomerReviews, y: CustomerReviewEntity) => void
  ): CustomerReviewEntity[] {
    return entities.map((entity: CustomerReviews) => {
      return this.build(entity, customMapper);
    });
  }

  private constructAuthorName(firstName: string | null, lastName: string | null) {
    if (!firstName && !lastName) return null;

    let authorName: string = '';

    if (firstName && lastName) {
      authorName = `${firstName} ${lastName[0]}.`;
    } else if (!firstName && lastName) {
      authorName = lastName;
    } else if (firstName && !lastName) {
      authorName = firstName;
    } else {
      authorName = 'Anonymous';
    }

    return authorName;
  }
}
