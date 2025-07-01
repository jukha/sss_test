import urlJoin from 'url-join';
import { ApiEndpoint } from '../api.endpoint';
import { LocationStateEntity } from '@/entities/location-state.entity';

export class LocationStates {
  private readonly _baseUrl = '/api/location_states';

  get states() {
    const endpoint = new ApiEndpoint<LocationStateEntity>({ url: urlJoin(this._baseUrl, '/states') });

    return {
      get: () => endpoint.findAll(),
    };
  }
}
