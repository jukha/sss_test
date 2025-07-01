import { prismaClient } from '@/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const blog = await prismaClient.blogRecords.findFirst({
    where: {
      url_over_first: params.get('first'),
      url_over_second: params.get('second'),
      url_over_third: params.get('third') || null,
    },
    select: { url: true },
  });

  return NextResponse.json({ hyphenatedTitle: blog && blog.url ? blog.url : null });
}
