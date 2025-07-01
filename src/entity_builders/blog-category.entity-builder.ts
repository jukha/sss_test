import { BlogCategories } from '@/__generated__/prisma';
import { IEntityBuilder } from './entity-builder.interface';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';
import { BlogCategoryEntity } from '@/entities/blog-category.entity';

export class BlogCategoriesEntityBuilder implements IEntityBuilder<BlogCategories, BlogCategoryEntity> {
  build(
    plaintEntity: BlogCategories,
    customMapper?: (x: BlogCategories, y: BlogCategoryEntity) => void
  ): BlogCategoryEntity {
    const dto: BlogCategoryEntity = {
      id: Number(plaintEntity.id),
      name: plaintEntity.name,
      icon: plaintEntity.icon_url,
      hexColor: plaintEntity.hex_color,
      hyphenatedName: plaintEntity.url,
    };

    if (customMapper) {
      customMapper(plaintEntity, dto);
    }

    return convertPrismaTypesToNumber(dto);
  }

  buildMany(
    entities: BlogCategories[],
    customMapper?: (x: BlogCategories, y: BlogCategoryEntity) => void
  ): BlogCategoryEntity[] {
    return entities.map((entity: BlogCategories) => {
      return this.build(entity, customMapper);
    });
  }
}
