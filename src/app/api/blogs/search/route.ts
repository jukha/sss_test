import { getBlogsBySearchQuery } from '@/repositories/blog_records/search.blogs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;

  const query = params.get('query');
  const limitStr = params.get('limit');
  const offsetStr = params.get('offset');

  if (!query) return NextResponse.json({ error: 'The query param is required' }, { status: 400 });

  const searchResult = await getBlogsBySearchQuery({
    searchQuery: query,
    limit: limitStr ? Number(limitStr) : undefined,
    offset: offsetStr ? Number(offsetStr) : undefined,
  });

  return NextResponse.json(searchResult);
};
