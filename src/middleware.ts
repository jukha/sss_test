import { NextRequest, NextResponse } from 'next/server';
import handleBlogRedirect from './utils/permanent-redirects/handle-blog-redirect';

export default async function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-pathname', req.nextUrl.pathname);

  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] == 'blog') {
    const redirectResponse = await handleBlogRedirect(req);
    if (redirectResponse) return redirectResponse;
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}
