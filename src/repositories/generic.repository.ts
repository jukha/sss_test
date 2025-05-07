import urlJoin from 'url-join';
import { action, computed, makeObservable, observable } from 'mobx';
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
}

class MethodNotAllowedError extends Error {
  constructor(method: string) {
    super(`Method ${method.toUpperCase()} now allowed in this repository`);
  }
}

export class GenericRepository<E> {
  protected _validationErrors: Record<keyof E, string> | undefined = undefined;
  private readonly _baseEndpoint: string;
  private readonly _allowedMethods: ConstructorOptions['allowedMethods'];

  constructor({ baseEndpoint, allowedMethods }: ConstructorOptions) {
    this._baseEndpoint = baseEndpoint;
    this._allowedMethods = allowedMethods;

    makeObservable<GenericRepository<E>, '_validationErrors'>(this, {
      _validationErrors: observable,
      validationErrors: computed,
      resetValidationErrors: action,
    });
  }

  get validationErrors() {
    return this._validationErrors;
  }

  resetValidationErrors() {
    this._validationErrors = undefined;
  }

  async get({ endpoint, headers }: GetOptions): Promise<RepositoryResponse<E>> {
    if (!this._allowedMethods.includes('get'))
      throw new MethodNotAllowedError('get');

    const {data, response} = await fetchData<E, null>({
      url: this.constructUrl(endpoint),
      method: 'GET',
      headers: headers,
    })

    if (data) return { data };

    return { data: null, errorCode: response.status };
  }

  async post<D>({data, endpoint, headers}: PostOptions<D>): Promise<RepositoryResponse<E>> {
    if (!this._allowedMethods.includes('post'))
      throw new MethodNotAllowedError('post');

    const { data: responseData, response: rawResponse, validationErrors } = await fetchData<E, D>({
      url: this.constructUrl(endpoint),
      data: data,
      headers: headers,
      method: 'POST',
    });

    if (responseData) {
      return { data: responseData };
    }

    if (validationErrors) {
      this._validationErrors = validationErrors;
      return { data: null, errorCode: 400 };
    }

    return { data: null, errorCode: rawResponse.status };
  }

  private constructUrl(endpoint?: string) {
    if (endpoint) return urlJoin(this._baseEndpoint, endpoint);
    return this._baseEndpoint;
  }
}
