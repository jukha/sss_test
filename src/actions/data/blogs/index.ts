import withAutoRetry from '@/utils/with-auto-retry';
import { getFeaturedBlog } from './featured.blogs';
import { getNewestBlogs } from './newest.blogs';
import { getRelatedBlogs } from './related.blogs';
import { getBlogById } from './by-id.blog';

export const blogsServerApi = {
  featured: {
    get: getFeaturedBlog,
  },
  newest: {
    get: getNewestBlogs,
  },
  related: {
    get: getRelatedBlogs,
  },
  byId: {
    get: getBlogById,
  },
};

export const blogsClientApi = {
  featured: {
    get: withAutoRetry(getFeaturedBlog),
  },
  newest: {
    get: withAutoRetry(getNewestBlogs),
  },
  related: {
    get: withAutoRetry(getRelatedBlogs),
  },
  byId: {
    get: withAutoRetry(getBlogById),
  },
};
