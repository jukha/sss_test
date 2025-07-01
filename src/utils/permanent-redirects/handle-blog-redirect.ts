import { NextRequest, NextResponse } from 'next/server';
import catchable from '../catchable';

async function handleBlogRedirect(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-pathname', req.nextUrl.pathname);

  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length !== 3 && segments.length !== 4) return null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, first, second, third = null] = segments;

  const apiUrl = new URL('/api/blogs/get_hyphenated_title', req.url);
  apiUrl.searchParams.set('first', first);
  apiUrl.searchParams.set('second', second);
  if (third) apiUrl.searchParams.set('third', third);

  const response = await fetch(apiUrl);
  const { hyphenatedTitle } = await response.json();

  if (!hyphenatedTitle) return null;

  const newUrl = `/blog/${hyphenatedTitle}`;

  if (pathname === newUrl) return null;

  const redirectResponse = NextResponse.redirect(new URL(newUrl, req.url), 308);

  if (!redirectResponse) return null;

  requestHeaders.forEach((value, key) => {
    redirectResponse.headers.set(key, value);
  });

  return redirectResponse;
}

export default catchable(handleBlogRedirect);
