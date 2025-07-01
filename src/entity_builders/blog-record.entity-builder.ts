import { BlogRecords } from '@/__generated__/prisma';
import { IEntityBuilder } from './entity-builder.interface';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { convertPrismaTypesToNumber } from '@/utils/convert-prisma-types-to-primitives';
import { BlogCategoryEntity } from '@/entities/blog-category.entity';

export class BlogRecordsEntityBuilder implements IEntityBuilder<BlogRecords, BlogRecordEntity> {
  build(
    plaintEntity: BlogRecords,
    customMapper?: (x: BlogRecords, y: BlogRecordEntity) => void
  ): BlogRecordEntity {
    const dto: BlogRecordEntity = {
      id: Number(plaintEntity.id),
      title: plaintEntity.title,
      body: plaintEntity.body,
      featuredImage: plaintEntity.featured_image,
      featuredImageAltDescription: plaintEntity.featured_image_alt_description,
      teaser: plaintEntity.teaser,
      authorName: plaintEntity.author_name,
      authorPhoto: plaintEntity.author_photo,
      publicationDate: plaintEntity.publish_date?.toLocaleDateString(),
      readTime: plaintEntity.read_time,
      hyphenatedTitle: plaintEntity.url,
      socialUrl: plaintEntity.author_social_url,
      categories: this.buildCategories(plaintEntity),
    };

    if (customMapper) {
      customMapper(plaintEntity, dto);
    }

    return convertPrismaTypesToNumber(dto);
  }

  buildMany(
    entities: BlogRecords[],
    customMapper?: (x: BlogRecords, y: BlogRecordEntity) => void
  ): BlogRecordEntity[] {
    return entities.map((entity: BlogRecords) => {
      return this.build(entity, customMapper);
    });
  }

  private buildCategories(blogRecord: BlogRecords) {
    const categories =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (blogRecord as any).blog_records_categories?.flatMap((rc: any) =>
        rc.blog_categories?.title ? [{ name: rc.blog_categories.title }] : []
      ) || [];

    return categories as BlogCategoryEntity[];
  }
}
