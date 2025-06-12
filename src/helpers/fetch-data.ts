import { autoRetryCatchable } from '@/utils/retry';
import { globalErrorHandlerState } from '@/state/global-error-handler.state';
import { GlobalErrorType } from '@/enum/global-error-type.enum';
import { AbortError } from '@/errors/abort.error';

export type FetchDataResponse<T> = {
  data: T;
  response: Response;
};

type FetchDataOptions<D> = {
  url: string;
  method: 'POST' | 'GET';
  headers?: Record<string, string>;
  data?: D;
  jsonHeaderInRequest?: boolean;
  searchParams?: Record<string, unknown>;
  abortController?: AbortController;
};

type TryFetchDataOptions<D> = FetchDataOptions<D> & {
  globalErrorType?: GlobalErrorType;
}

async function fetchData<E, D>({
  url,
  method,
  headers,
  data,
  jsonHeaderInRequest = true,
  searchParams,
}: FetchDataOptions<D>): Promise<FetchDataResponse<E>> {
  const options: RequestInit = {
    method,
    headers: {
      ...(jsonHeaderInRequest ? {'Content-Type': 'application/json'} : {}),
      ...headers,
    },
    body: method === 'POST' && data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(url + (searchParams ? `?${searchParams.toString()}` : ''), options);

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
    return await autoRetryCatchable(callback, {abortController: options.abortController});
  } catch (e) {
    if (e instanceof AbortError) {
      throw e; // don't add error to error store if retry was aborted
    }

    const version = Number(options.headers?.['X-Version']);

    const event = globalErrorHandlerState.addError<FetchDataResponse<E>>(
      {
        version: isNaN(version) || !isFinite(version) ? undefined : version,
        type: globalErrorType,
        retryCallback: callback
      },
    )

    const r = await event.promisify()();

    if (r instanceof Error) throw r;
    return r;
  }
}

export default fetchData;
