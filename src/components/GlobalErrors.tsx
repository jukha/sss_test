'use client';

import { useEffect, useState } from 'react';
import { ErrorModal } from '@/components/modal/ErrorModal';
import { globalErrorHandlerState } from '@/state/global-error-handler.state';

const GlobalErrors = () => {
  const [errors, setErrors] = useState<typeof globalErrorHandlerState.errors>(globalErrorHandlerState.errors);

  useEffect(() => {
    const sub = globalErrorHandlerState.onErrorsUpdate.addEventListener(setErrors);
    return () => sub.unsubscribe();
  }, []);

  if (errors.length === 0) return null;

  return (
    <ErrorModal
      text={'Woops looks like something went wrong'}
      onRetry={async () => {
        const successIndices: number[] = [];

        await Promise.all(errors.map(async (_, i) => {
          const r = await globalErrorHandlerState.recallErrorCallback(i);
          if (r) successIndices.push(i);
        }))

        globalErrorHandlerState.batchRemoveErrors(successIndices);
      }}
      onClose={() => globalErrorHandlerState.clearErrors()}
    />
  )
}

export default GlobalErrors;
