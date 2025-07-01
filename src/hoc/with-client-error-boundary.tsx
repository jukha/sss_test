import { ComponentType } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export function withClientErrorBoundary<P>(Component: ComponentType<P>) {
  const WrappedComponent = (props: P) => {
    return (
      <ErrorBoundary>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Component {...props as any} />
      </ErrorBoundary>
    )
  }

  return WrappedComponent;
}
