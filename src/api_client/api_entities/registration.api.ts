import { ApiEndpoint } from '@/api_client/api.endpoint';
import { RegistrationForm } from '@/entities/registration-form.entity';
import urlJoin from 'url-join';
import { RegistrationRecordIdentifier } from '@/app/api/registration/utils/types';
import { NonNullableFields } from '@/types/utility.types';
import { LocationsAndPricingEntity } from '@/entities/locations-and-pricing.entity';

type CreateRegistrationStepOptions = {
  data: RegistrationForm;
  registrationIdentifier: NonNullableFields<RegistrationRecordIdentifier>,
  version: number;
  sendWebhook?: boolean;
}

export class RegistrationApi {
  private readonly _baseUrl = '/api/registration';

  get step() {
    const endpoint = new ApiEndpoint<RegistrationForm>({ url: urlJoin(this._baseUrl, '/step') });

    return {
      create: (options: CreateRegistrationStepOptions) => endpoint.post({
        data: options.data,
        searchParams: options.sendWebhook ? {sendWebhook: true} : undefined,
        headers: {
          'X-Registration-Id': options.registrationIdentifier.id.toString(),
          'X-Registration-Secret': options.registrationIdentifier.secret,
          'X-Form-TypeId': options.registrationIdentifier.formTypeId,
          'X-Version': options.version.toString(),
        }
      })
    }
  }

  get locationsAndPricing() {
    const endpoint = new ApiEndpoint<LocationsAndPricingEntity>({ url: urlJoin(this._baseUrl, '/locations_and_pricing') });

    return {
      get: () => endpoint.findOne()
    }
  }

  get byCredentials() {
    const endpoint = new ApiEndpoint<RegistrationForm | null>({ url: urlJoin(this._baseUrl, '/by_credentials') });

    return {
      get: (identifier: NonNullableFields<RegistrationRecordIdentifier>) => endpoint.findOne({
        headers: {
          'X-Registration-Id': identifier.id.toString(),
          'X-Registration-Secret': identifier.secret,
          'X-Form-TypeId': identifier.formTypeId,
        }
      })
    }
  }
}
