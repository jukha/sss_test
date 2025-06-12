import { UnservicedLeadsEntity } from '@/entities/unserviced-leads.entity';
import { ApiEndpoint } from '@/api_client/api.endpoint';

export class NotifyMeApi {
  private readonly _baseUrl = '/api/notify_me';

  notify(data: Omit<UnservicedLeadsEntity, 'id'>) {
    const endpoint = new ApiEndpoint({ url: this._baseUrl });
    return endpoint.post({data});
  }
}
