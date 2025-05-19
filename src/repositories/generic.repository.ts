import urlJoin from 'url-join';
import fetchData from '@/helpers/fetch-data';

type GetOptions = {
  endpoint?: string;
  headers?: Record<string, string>;
};

type PostOptions<D> = {
  data: D;
  headers?: Record<string, string>;
  endpoint?: string;
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
  private readonly _baseEndpoint: string;
  private readonly _allowedMethods: ConstructorOptions['allowedMethods'];

  constructor({ baseEndpoint, allowedMethods }: ConstructorOptions) {
    this._baseEndpoint = baseEndpoint;
    this._allowedMethods = allowedMethods;
  }

  async get<T>({ endpoint, headers }: GetOptions): Promise<RepositoryResponse<T>> {
    if (!this._allowedMethods.includes('get'))
      throw new MethodNotAllowedError('get');

    const { data, response } = await fetchData<E, null>({
      url: this.constructUrl(endpoint),
      method: 'GET',
      headers: headers,
    });

    if (data) return { data: data as T };

    return { data: null, errorCode: response.status };
  }

  async findAll({ endpoint, headers }: GetOptions): Promise<RepositoryResponse<E[]>> {
    return await this.get<E[]>({endpoint, headers});
  }

  async post<D>({data, endpoint, headers}: PostOptions<D>): Promise<RepositoryResponse<E>> {
    if (!this._allowedMethods.includes('post'))
      throw new MethodNotAllowedError('post');

    const { data: responseData, response: rawResponse } = await fetchData<E, D>(
      {
        url: this.constructUrl(endpoint),
        data: data,
        headers: headers,
        method: 'POST',
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
