import SuggestedArticles from './SuggestedArticles';
import { getNewestBlogs } from '@/repositories/blog_records/newest.blogs';

export const ServerSuggestedArticles = async () => {
  const { data } = await getNewestBlogs({ limit: 3 });

  return <SuggestedArticles data={data} />;
};
