import { ApiEndpoint } from '@/api_client/api.endpoint';

export class UnservicedZipCodesApi {
  private readonly _baseUrl = '/api/unserviced_zip_codes';

  create(data: { zipCode: string, state?: string }) {
    const endpoint = new ApiEndpoint<null>({ url: this._baseUrl });
    return endpoint.post({ data });
  }
}
