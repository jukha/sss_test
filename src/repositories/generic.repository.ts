import urlJoin from 'url-join';
import { tryFetchData } from '@/helpers/fetch-data';
import { GlobalErrorType } from '@/enum/global-error-type.enum';

type GetOptions = {
  endpoint?: string;
  headers?: Record<string, string>;
  globalErrorType?: GlobalErrorType
};

type PostOptions<D> = {
  data: D;
  headers?: Record<string, string>;
  endpoint?: string;
  globalErrorType?: GlobalErrorType
};

type ConstructorOptions = {
  baseEndpoint: string;
  allowedMethods: ('get' | 'post')[];
};

type RepositoryResponse<E> = {
  data: E | null;
  errorCode?: number;
};

class MethodNotAllowedError extends Error {
  constructor(method: string) {
    super(`Method ${method.toUpperCase()} now allowed in this repository`);
  }
}

export class GenericRepository<E> {
  private readonly _baseEndpoint: ConstructorOptions['baseEndpoint'];
  private readonly _allowedMethods: ConstructorOptions['allowedMethods'];

  constructor({ baseEndpoint, allowedMethods }: ConstructorOptions) {
    this._baseEndpoint = baseEndpoint
    this._allowedMethods = allowedMethods;
  }

  async get<T>({ endpoint, headers, globalErrorType = GlobalErrorType.Unknown }: GetOptions): Promise<RepositoryResponse<T>> {
    if (!this._allowedMethods.includes('get'))
      throw new MethodNotAllowedError('get');

    const { data, response } = await tryFetchData<E, null>({
      url: this.constructUrl(endpoint),
      method: 'GET',
      headers: headers,
      globalErrorType: globalErrorType,
    });

    if (data) return { data: data as T };

    return { data: null, errorCode: response.status };
  }

  async findAll({ endpoint, headers }: GetOptions): Promise<RepositoryResponse<E[]>> {
    return await this.get<E[]>({endpoint, headers});
  }

  async post<D>({ data, endpoint, headers, globalErrorType = GlobalErrorType.Unknown }: PostOptions<D>): Promise<RepositoryResponse<E>> {
    if (!this._allowedMethods.includes('post'))
      throw new MethodNotAllowedError('post');

    const { data: responseData, response: rawResponse } = await tryFetchData<E, D>(
      {
        url: this.constructUrl(endpoint),
        data: data,
        headers: headers,
        method: 'POST',
        globalErrorType: globalErrorType
      }
    );

    if (responseData) {
      return { data: responseData };
    }

    return { data: null, errorCode: rawResponse.status };
  }

  private constructUrl(endpoint?: string) {
    if (endpoint) return urlJoin(this._baseEndpoint, endpoint);
    return this._baseEndpoint;
  }
}
