import { autoRetryCatchable } from '@/utils/retry';
import { globalErrorHandlerState } from '@/state/global-error-handler.state';
import { GlobalErrorType } from '@/enum/global-error-type.enum';
import promisifySimpleEvent from '@/utils/promisify-simple-event';

export type WithAutoRetryOptions = {
  version: number;
  globalErrorType?: GlobalErrorType;
}

function withAutoRetry<T, A>(callback: (...args: A[]) => Promise<T>, options?: WithAutoRetryOptions): (...args: A[]) => Promise<T> {
  return async (...args: A[]): Promise<T> => {
    const cbWithOptions = () => callback(...args);

    try {
      return await autoRetryCatchable(cbWithOptions)
    } catch {
      const event = globalErrorHandlerState.addError<T>(
        {
          type: options?.globalErrorType || GlobalErrorType.Unknown,
          version: options?.version,
          retryCallback: cbWithOptions
        },
      )

      const r = await promisifySimpleEvent(event)();

      if (r instanceof Error) throw r;
      return r;
    }
  }
}

export default withAutoRetry;
