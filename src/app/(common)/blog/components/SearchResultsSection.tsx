'use client';

import BlogCard from '@/components/shapes/BlogCard';
import { useBlogRecords } from '@/context/blogs.context';
import { useEffect, useState } from 'react';
import BlogButton from './BlogButton';

const SearchResultsSection = () => {
  const {
    searchResult,
    searchQuery,
    isBlogSearching,
    blogRecords,
    isLoading,
    showMoreBlogs,
  } = useBlogRecords();
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    if (!searchResult) return;
    const currentBlogCount = searchResult.limit + searchResult.offset;

    if (
      searchResult.data.length == currentBlogCount &&
      searchResult.total > currentBlogCount
    ) {
      setIsShowMore(true);
    }
  }, [searchResult]);

  const renderSearchResults = () => {
    if (blogRecords.length === 0) {
      return isLoading ? (
        <p className='text-xl'>Loading...</p>
      ) : (
        <p>No articles found matching your search.</p>
      );
    }
  };

  if (!isBlogSearching || !searchQuery) return null;

  return (
    <section id='search-results' className='py-12 px-4 max-w-6xl mx-auto'>
      <h2 className='text-2xl font-bold mb-6'>
        Search Results for `{searchQuery}`
      </h2>
      {renderSearchResults()}

      {blogRecords.length > 0 && (
        <div className='flex flex-col items-center gap-10'>
          <div className='grid grid-cols-2 gap-16'>
            {blogRecords.map((blog, index) => {
              const categories = blog.categories.map((c) => c.name).join(', ');

              return (
                <BlogCard
                  key={index}
                  img={blog.featuredImage}
                  title={blog.title}
                  teaser={blog.teaser}
                  categories={categories}
                  link={`/blog/${blog.hyphenatedTitle}`}
                />
              );
            })}
          </div>
          <div className='flex flex-col items-center gap-4'>
            {isLoading && <p className='text-xl'>Loading...</p>}
            {isShowMore && <BlogButton onClick={showMoreBlogs} />}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchResultsSection;
