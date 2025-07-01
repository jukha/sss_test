import { ApiEndpoint } from '@/api_client/api.endpoint';
import urlJoin from 'url-join';
import { InstructorEntity } from '@/entities/instructor.entity';
import { Coordinates } from '@/types/coordinates';

type NearbyLatLngOptions = {
  lat: string | number;
  lng: string | number;
  radius?: number;
  limit?: number;
  offset?: number;
  coordinatesOnly?: boolean;
}

export class InstructorsApi {
  private readonly _baseUrl = '/api/instructors';

  get featured() {
    const endpoint = new ApiEndpoint<InstructorEntity>({ url: urlJoin(this._baseUrl, '/featured') });

    return {
      get: () => endpoint.findAll()
    }
  }

  get nearbyLatLng() {
    const endpoint = new ApiEndpoint<InstructorEntity & Coordinates>({ url: urlJoin(this._baseUrl, '/nearby/coordinates') });

    return {
      get: (options: NearbyLatLngOptions) => endpoint.findAll({ searchParams: options })
    }
  }
}
