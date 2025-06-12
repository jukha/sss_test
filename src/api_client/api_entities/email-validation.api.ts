import { ApiEndpoint } from '@/api_client/api.endpoint';
import { EmailRecord, EmailsMap, ValidationRecord } from '@/utils/email-validation';
import urlJoin from 'url-join';

export class EmailValidationApi {
  private readonly _baseUrl = '/api/email_validation';

  validateSingle(email: string) {
    const endpoint = new ApiEndpoint<ValidationRecord>({ url: urlJoin(this._baseUrl, '/validate_single') });
    return endpoint.post({ data: { email } })
  }

  validateMultiple(emailRecords: EmailRecord[]) {
    const endpoint = new ApiEndpoint<ValidationRecord[]>({ url: urlJoin(this._baseUrl, '/validate_multiple') });
    return endpoint.post({ data: { emailRecords } })
  }

  validateMap(emailsMap: EmailsMap) {
    const endpoint = new ApiEndpoint<ValidationRecord[]>({ url: urlJoin(this._baseUrl, '/validate_map') });
    return endpoint.post({ data: { emailsMap } })
  }
}
