import { LocationCompetitorEntity } from '@/entities/location-competitor.entity';
import { ApiEndpoint } from '../api.endpoint';

export class LocationCompetitorsApi {
  private readonly _baseUrl = '/api/local_competitors';

  get locationCompetitors() {
    const endpoint = new ApiEndpoint<LocationCompetitorEntity>({ url: this._baseUrl });

    return {
      get: () => endpoint.findAll(),
    };
  }
}
