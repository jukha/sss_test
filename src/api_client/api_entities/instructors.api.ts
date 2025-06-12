import { ApiEndpoint } from '@/api_client/api.endpoint';
import urlJoin from 'url-join';
import { InstructorEntity } from '@/entities/instructor.entity';

type NearbyCityOptions = {
  cityId: number;
  distance: number;
  shouldBePublic?: boolean | null;
  category: string;
}

type NearbyZipcodeOptions = {
  zipCode: string;
  distance: number;
  shouldBePublic?: boolean | null;
  category: string;
}

type NearbyLatLngOptions = {
  lat: string | number;
  lng: string | number;
  radius?: number;
}

export class InstructorsApi {
  private readonly _baseUrl = '/api/instructors';

  get featured() {
    const endpoint = new ApiEndpoint<InstructorEntity>({ url: urlJoin(this._baseUrl, '/featured') });

    return {
      get: () => endpoint.findAll()
    }
  }

  get nearbyCity() {
    const endpoint = new ApiEndpoint<InstructorEntity>({ url: urlJoin(this._baseUrl, '/nearby/city') });

    return {
      get: (options: NearbyCityOptions) => endpoint.findAll({ searchParams: options })
    }
  }

  get nearbyZipcode() {
    const endpoint = new ApiEndpoint<InstructorEntity>({ url: urlJoin(this._baseUrl, '/nearby/zipcode') });

    return {
      get: (options: NearbyZipcodeOptions) => endpoint.findAll({ searchParams: options })
    }
  }

  get nearbyLatLng() {
    const endpoint = new ApiEndpoint<InstructorEntity>({ url: urlJoin(this._baseUrl, '/nearby/coordinates') });

    return {
      get: (options: NearbyLatLngOptions) => endpoint.findAll({ searchParams: options })
    }
  }
}
