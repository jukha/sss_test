import { LocationCompetitor } from '@/__generated__/prisma';
import { IEntityBuilder } from './entity-builder.interface';
import { LocationCompetitorEntity } from '@/entities/location-competitor.entity';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';

export class LocationCompetitorEntityBuilder implements IEntityBuilder<LocationCompetitor, LocationCompetitorEntity> {
  build(
    plainEntity: LocationCompetitor,
    customMapper?: ((x: LocationCompetitor, y: LocationCompetitorEntity) => void) | undefined
  ): LocationCompetitorEntity {
    const dto: LocationCompetitorEntity = convertPrismaTypesToNumber({
      id: plainEntity.id,
      useInComparison: plainEntity.use_in_comparison,
      metroAreaId: plainEntity.metro_area_id,
      name: plainEntity.name,
      lessonTypes: plainEntity.lesson_types,
      address: plainEntity.address,
      ages: plainEntity.ages,
      learnToSwimGuarantee: plainEntity.learn_to_swim_guarantee,
      flexibleScheduling: plainEntity.flexible_scheduling,
      scheduling: plainEntity.scheduling,
      monthlyMembershipRequired: plainEntity.monthly_membership_required,
      costsPerLesson: plainEntity.costs_per_lesson,
      starsCount: plainEntity.stars_count,
      yelpReviewsId: plainEntity.yelp_reviews_id,
      googleReviewsId: plainEntity.google_reviews_id,
      customerReviewText: plainEntity.customer_review_text,
      lat: plainEntity.lat,
      lng: plainEntity.lng,
    });

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(
    plainEntities: LocationCompetitor[],
    customMapper?: ((x: LocationCompetitor, y: LocationCompetitorEntity) => void) | undefined
  ): LocationCompetitorEntity[] {
    return plainEntities.map((entity: LocationCompetitor) => {
      return this.build(entity, customMapper);
    });
  }
}
