import { Instructor } from '@/__generated__/prisma';
import { InstructorEntity } from '@/entities/instructor.entity';
import { IEntityBuilder } from './entity-builder.interface';

const ALL_CATEGORIES = ['Infants', 'Toddlers', 'Preschoolers', 'Adults', 'Special needs'];

export class InstructorEntityBuilder implements IEntityBuilder<Instructor, InstructorEntity> {
  build(plainEntity: Instructor, customMapper?: (x: Instructor, y: InstructorEntity) => void): InstructorEntity {
    const addressExists = plainEntity.city || plainEntity.state || plainEntity.zip;
    const lastNameFormatted = plainEntity.last_name ? `${plainEntity.last_name[0]}.` : ''

    const dto: InstructorEntity = {
      id: Number(plainEntity.id),
      name: `${plainEntity.first_name || ''} ${lastNameFormatted}`.trim() || null,
      biography: plainEntity.biography,
      avatarUrl: plainEntity.profile_pic || plainEntity.profile_pic_opt,
      address: addressExists ? `${plainEntity.city}, ${plainEntity.state} ${plainEntity.zip}`.trim() : null,
      shouldBePublic: plainEntity.is_public,
      registrationYear: plainEntity.hired_date,
      lat: plainEntity.lat ? Number(plainEntity.lat) : null,
      lng: plainEntity.lng ? Number(plainEntity.lng) : null,
      certifications: plainEntity.certifications,
      numberOfPoolAccess: plainEntity.number_of_pools_access,
      categories: this.buildCategories(plainEntity),
    };

    if (customMapper) {
      customMapper(plainEntity, dto);
    }

    return dto;
  }

  buildMany(plainEntities: Instructor[], customMapper?: (x: Instructor, y: InstructorEntity) => void): InstructorEntity[] {
    return plainEntities.map((entity: Instructor) => {
      return this.build(entity, customMapper);
    });
  }

  private buildCategories(instructor: Instructor) {
    const nothing = ['none', 'no', '0'];

    return ALL_CATEGORIES
      .map((category) => {
        const categoryKey = `exp_${category.toLowerCase().replaceAll(' ', '_')}`;
        // @ts-expect-error dynamic field construction
        const exp: string = instructor[categoryKey];
        return exp && !nothing.some((i) => i === exp.toLowerCase()) ? category : null;
      })
      .filter((f) => f !== null);
  }
}
