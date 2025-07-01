import { FetchDataResponse, tryFetchData } from '@/helpers/fetch-data';

type ConstructorOptions = {
  url: string;
};

type FetchOptions = {
  searchParams?: Record<string, unknown>;
  headers?: Record<string, string>;
};

type GetOptions = FetchOptions;

type PostOptions<Dto> = FetchOptions & {
  data: Dto;
};

export class ApiEndpoint<TEntity> {
  protected readonly _url: string;

  constructor({ url }: ConstructorOptions) {
    this._url = url;
  }

  findAll(options?: GetOptions): Promise<FetchDataResponse<TEntity[]>> {
    return tryFetchData({
      method: 'GET',
      url: this._url,
      searchParams: options?.searchParams,
    });
  }

  findOne(options?: GetOptions): Promise<FetchDataResponse<TEntity>> {
    return tryFetchData({
      method: 'GET',
      url: this._url,
      searchParams: options?.searchParams,
      headers: options?.headers,
    });
  }

  post<Dto>({ data, headers, searchParams }: PostOptions<Dto>): Promise<FetchDataResponse<TEntity>> {
    return tryFetchData({
      method: 'POST',
      url: this._url,
      searchParams,
      data,
      headers,
    });
  }
}
