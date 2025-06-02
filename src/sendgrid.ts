import urlJoin from 'url-join';
import { tryFetchData } from '@/helpers/fetch-data';

const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY!;
const SENDGRID_API = process.env.NEXT_PUBLIC_SENDGRID_API!;

type EmailValidationRequestDto = {
  email: string;
}

type EmailValidationResponseDto = {
  result: {
    verdict: string
  }
}

class Sendgrid {
  async validateEmail(email: string) {
    const endpoint = urlJoin(SENDGRID_API, '/v3/validations/email');

    const {data} = await tryFetchData<EmailValidationResponseDto, EmailValidationRequestDto>({
      url: endpoint,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`
      },
      data: {email},
    })

    if (!data) throw new Error('Unable to validate email');
    return data.result.verdict !== 'Invalid'
  }
}

export const sendgrid = new Sendgrid();
