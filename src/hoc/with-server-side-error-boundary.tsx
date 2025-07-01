import { JSX } from 'react';
import { redirect } from 'next/navigation';

const defaultFallback = <p>An error has occurred. Please, try again</p>

const isRedirectError = (e: unknown) => {
  return typeof e === 'object' && e && 'message' in e && 'digest' in e && e.message === 'NEXT_REDIRECT';
}

const getRedirectDestinationFromError = (e: unknown) => {
  if (isRedirectError(e)) {
    return ((e as { digest: string }).digest as string).split(';')[2];
  }

  return null;
}

export function withServerSideErrorBoundary<P>(fn: (props: P) => Promise<JSX.Element | null>, fallback: JSX.Element = defaultFallback) {
  return async (props: P) => {
    try {
      return await fn(props);
    } catch (e) {
      const redirectTo = getRedirectDestinationFromError(e);
      if (redirectTo) redirect(redirectTo);

      console.error('An error has occurred in server component', e);
      return fallback || null;
    }
  }
}
