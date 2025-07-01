import BrowseArticlesSection from './BrowseArticlesSection';
import { getNewestBlogs } from '@/repositories/blog_records/newest.blogs';

export const ServerBrowseArticlesSection = async () => {
  const blogs = await getNewestBlogs({ limit: 4 });

  return <BrowseArticlesSection data={blogs.data} />;
};
