import { withServerSideErrorBoundary } from '@/hoc/with-server-side-error-boundary';
import BlogInfoSection from './BlogInfoSection';
import { getBlogByHyphenatedTitle } from '@/repositories/blog_records/by-hyphenated-title';

const ServerBlogInfoSection = async ({ hyphenatedTitle }: { hyphenatedTitle: string }) => {
  const blog = await getBlogByHyphenatedTitle({ hyphenatedTitle });

  return <BlogInfoSection data={blog} />;
};

export default withServerSideErrorBoundary(ServerBlogInfoSection);
