import withAutoRetry from '@/utils/with-auto-retry';
import { getBlogCategories } from './base.blog-categories';

export const blogsServerApi = {
  categories: {
    get: getBlogCategories,
  },
};

export const blogsClientApi = {
  categories: {
    get: withAutoRetry(getBlogCategories),
  },
};
