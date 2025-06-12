import { FetchDataResponse, tryFetchData } from '@/helpers/fetch-data';

type ConstructorOptions = {
  url: string;
}

type GetOptions = {
  searchParams?: Record<string, unknown>;
}

type PostOptions<Dto> = {
  data: Dto;
  headers?: Record<string, string>;
}

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
    })
  }

  findOne(options?: GetOptions): Promise<FetchDataResponse<TEntity>> {
    return tryFetchData({
      method: 'GET',
      url: this._url,
      searchParams: options?.searchParams,
    })
  }

  post<Dto>({data, headers}: PostOptions<Dto>): Promise<FetchDataResponse<TEntity>> {
    return tryFetchData({
      method: 'POST',
      url: this._url,
      data,
      headers
    })
  }
}
