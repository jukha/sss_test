import { BlogCategoryEntity } from './blog-category.entity';

export type BlogRecordEntity = {
  id: number;
  title: string | null;
  body: string | null;
  featuredImage: string | null;
  featuredImageAltDescription: string | null;
  teaser: string | null;
  authorName: string | null;
  authorPhoto: string | null;
  publicationDate?: string;
  readTime: number | null;
  hyphenatedTitle: string | null;
  socialUrl: string | null;
  categories: BlogCategoryEntity[];
};
