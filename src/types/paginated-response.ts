import { BlogRecordEntity } from '@/entities/blog-record.entity';

export type PaginatedResponse = {
  data: BlogRecordEntity[];
  total: number;
  limit: number;
  offset: number;
};
