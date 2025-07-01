import FeaturedArticleSection from './FeaturedArticleSection';
import { getFeaturedBlog } from '@/repositories/blog_records/featured.blogs';

export const ServerFeaturedArticleSection = async () => {
  const featuredBlog = await getFeaturedBlog();

  return <FeaturedArticleSection data={featuredBlog} />;
};
