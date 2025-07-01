import { ApiEndpoint } from '@/api_client/api.endpoint';
import urlJoin from 'url-join';
import { PaginatedResponse } from '@/types/paginated-response';

type SearchOptions = {
  query: string;
  limit?: number;
  offset?: number;
};

export class BlogRecordsApi {
  private readonly _baseUrl = '/api/blogs';

  get search() {
    const endpoint = new ApiEndpoint<PaginatedResponse>({
      url: urlJoin(this._baseUrl, '/search'),
    });

    return {
      get: (options: SearchOptions) =>
        endpoint.findOne({ searchParams: options }),
    };
  }
}
