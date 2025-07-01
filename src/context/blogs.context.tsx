'use client';

import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { BlogRecordEntity } from '@/entities/blog-record.entity';
import { apiClient } from '@/api_client/api.client';

type SearchResultReturnType = {
  data: BlogRecordEntity[];
  total: number;
  limit: number;
  offset: number;
};

type BlogRecordsContextType = {
  blogRecords: BlogRecordEntity[];
  searchResult: SearchResultReturnType | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isBlogSearching: boolean;
  setIsBlogSearching: (value: boolean) => void;
  isLoading: boolean;
  showMoreBlogs: () => Promise<void>;
  handleSearch: () => Promise<void>;
};

const BlogRecordsContext = createContext<BlogRecordsContextType | undefined>(undefined);

export function BlogRecordsProvider({ children }: { children: ReactNode }) {
  const [blogRecords, setBlogRecords] = useState<BlogRecordEntity[]>([]);
  const [searchResult, setSearchResult] = useState<SearchResultReturnType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBlogSearching, setIsBlogSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.blogs.search.get({
        query: searchQuery,
        limit: 4,
        offset: 0,
      });

      const result = response.data;
      setSearchResult(result);
      setBlogRecords(result.data);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResult(null);
      setBlogRecords([]);
    } finally {
      setIsLoading(false);
      setIsBlogSearching(true);
    }
  }, [searchQuery]);

  const showMoreBlogs = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.blogs.search.get({
        query: searchQuery,
        limit: 4,
        offset: blogRecords.length,
      });

      const newResults = response.data;
      setSearchResult(newResults);
      setBlogRecords(prev => [...prev, ...newResults.data]);
    } catch (error) {
      console.error('Load more failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, [blogRecords, searchQuery]);

  return (
    <BlogRecordsContext.Provider
      value={{
        blogRecords,
        searchResult,
        searchQuery,
        setSearchQuery,
        isBlogSearching,
        setIsBlogSearching,
        isLoading,
        showMoreBlogs,
        handleSearch,
      }}
    >
      {children}
    </BlogRecordsContext.Provider>
  );
}

export const useBlogRecords = () => {
  const context = useContext(BlogRecordsContext);
  if (context === undefined) {
    throw new Error('useBlogRecords must be used within a BlogRecordsProvider');
  }
  return context;
};