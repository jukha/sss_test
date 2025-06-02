import { autoRetryCatchable } from '@/utils/retry';
import { globalErrorHandlerState } from '@/state/global-error-handler.state';
import promisifySimpleEvent from '@/utils/promisify-simple-event';
import { GlobalErrorType } from '@/enum/global-error-type.enum';

type FetchDataResponse<T> = {
  data: T | null;
  response: Response;
  validationErrors?: Record<keyof T, string>;
};

type FetchDataOptions<D> = {
  url: string;
  method: 'POST' | 'GET';
  headers?: Record<string, string>;
  data?: D;
  jsonHeaderInRequest?: boolean;
};

type TryFetchDataOptions<D> = FetchDataOptions<D> & {
  globalErrorType?: GlobalErrorType;
}

async function fetchData<E, D>({
  url,
  method,
  headers,
  data,
  jsonHeaderInRequest = true
}: FetchDataOptions<D>): Promise<FetchDataResponse<E>> {
  const options: RequestInit = {
    method,
    headers: {
      ...(jsonHeaderInRequest ? {'Content-Type': 'application/json'} : {}),
      ...headers,
    },
    body: method === 'POST' && data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(url, options);

  if (response.status === 400) {
    const data = await response.json();

    if ('validationErrors' in data) {
      return { data: null, response, validationErrors: data.validationErrors };
    }
  }

  if (!response.ok) {
    console.error(`Received response code ${response.status} (${response.statusText}) on ${method} ${url}`)
    throw new Error();
  }

  const result = (await response.json()) as E;
  return { data: result, response };
}

export async function tryFetchData<E, D>({globalErrorType = GlobalErrorType.Unknown, ...options}: TryFetchDataOptions<D>): Promise<FetchDataResponse<E>> {
  const callback = () => fetchData<E, D>(options)

  try {
    return await autoRetryCatchable(callback);
  } catch {
    const version = Number(options.headers?.['X-Version']);

    const event = globalErrorHandlerState.addError<FetchDataResponse<E>>(
      {
        version: isNaN(version) || !isFinite(version) ? undefined : version,
        type: globalErrorType,
        retryCallback: callback
      },
    )

    const r = await promisifySimpleEvent(event)();

    if (r instanceof Error) throw r;
    return r;
  }
}

export default fetchData;
