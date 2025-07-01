import { getBlogCategories } from '@/repositories/blog_categories/base.blog-categories';
import PopularTopicsSection from './PopularTopicsSection';

export const ServerPopularTopicsSection = async () => {
  const topics = await getBlogCategories();

  return <PopularTopicsSection data={topics} />;
};
