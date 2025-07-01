'use client';

import { useEffect, useState } from 'react';
import { ErrorModal } from '@/components/modal/ErrorModal';
import { globalErrorHandlerState } from '@/state/global-error-handler.state';

const GlobalErrors = () => {
  const [errorTitle, setErrorTitle] = useState(globalErrorHandlerState.errorTitle);
  const [errors, setErrors] = useState<typeof globalErrorHandlerState.errors>(globalErrorHandlerState.errors);

  useEffect(() => {
    const subs = [
      globalErrorHandlerState.onErrorsUpdate.addEventListener(setErrors),
      globalErrorHandlerState.onErrorTitleUpdate.addEventListener(setErrorTitle)
    ]

    return () => {
      subs.forEach(s => s.unsubscribe);
    }
  }, []);

  if (errors.length === 0) return null;

  return (
    <ErrorModal
      text={errorTitle}
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
