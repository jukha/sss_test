import urlJoin from 'url-join';

const SENDGRID_API_KEY = process.env.NEXT_SENDGRID_API_KEY!;
const SENDGRID_API_BASE_URL = process.env.NEXT_SENDGRID_API_BASE_URL!;


type SendGridEmailSuggestion = {
  local?: string | null,
  suggestion?: SendGridEmailSuggestion | null,
};

type SendGridResult = {
  verdict?: string | null,
  checks?: {
    domain?: {
      has_valid_address_syntax?: boolean,
      is_suspected_disposable_address?: boolean,
    } | null,
    additional?: {
      has_known_bounces?: boolean,
      has_suspected_bounced?: boolean,
    } | null,
  } | null,
  suggestion?: SendGridEmailSuggestion | null,
  local?: string | null,
  host?: string | null,
}

type EmailValidationResult = {
  tag: string,
  hasValidSyntax: boolean,
  suggestion?: SendGridEmailSuggestion | null,
}


const extractSuggestionFromSendGridResult = (result: SendGridResult) => {
  if (result.suggestion) {
    return {
      local: result.local,
      host: result.host,
      suggestion: result.suggestion
    };
  }
};


const convertSendGridResultToTag = (result: SendGridResult) => {
  if (result?.verdict == 'Invalid') {
    return 'invalid';
  }

  if (!result?.checks?.domain?.has_valid_address_syntax) {
    return 'invalid';
  }

  if (result?.checks?.domain?.is_suspected_disposable_address) {
    return 'invalid';
  }

  if (result?.checks?.additional?.has_known_bounces) {
    return 'bounced';
  }

  if (result?.checks?.additional?.has_suspected_bounced) {
    return 'bounce-risk';
  }

  return 'valid';
};

function processEmailValidationResult (result: EmailValidationResult) {
  const isValid = result.tag != 'invalid' && result.tag != 'bounced';
  let message;

  if (!isValid && !result.hasValidSyntax) {
    message = 'Invalid E-mail';
  } else if (!isValid && result.hasValidSyntax) {
    message = 'Please, provide a valid E-mail address';
  }

  const suggestion = result.suggestion;
  if (suggestion) {
    const suggestedEmail = suggestion.local + '@' + suggestion.suggestion
    message = 'Did you mean ' + suggestedEmail + '?';
  }

  return {
    isValid,
    hasValidSyntax: result.hasValidSyntax,
    message: message
  };
}


class Sendgrid {
  async validateEmailOnServer(email: string) {
    const requestBody = {
      email,
    };

    const url = urlJoin(SENDGRID_API_BASE_URL, '/v3/validations/email');
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`
      },
      body: JSON.stringify(requestBody),
    };
    const response = await fetch(url, options);

    const data = await response.json();
    // console.log('Email:', email);
    // console.log('Data:', data);

    const sendGridResult = data?.result;
    const tag = convertSendGridResultToTag(sendGridResult);
    const suggestion = extractSuggestionFromSendGridResult(sendGridResult);
    return processEmailValidationResult({
      tag: tag,
      hasValidSyntax: data.result.checks.domain.has_valid_address_syntax,
      suggestion: suggestion,
    });
  }
}

export const sendgrid = new Sendgrid();
