import { SuggestedAddress } from '@/helpers/get-address-suggestions';

export const convertSuggestedAddressToString = (address: SuggestedAddress) => {
  let resultAddress = '';

  if (address.houseNumber) {
    resultAddress += `${address.houseNumber} `;
  }

  if (address.street) {
    resultAddress += `${address.street}`;
  }

  if (address.city) {
    resultAddress += `${resultAddress ? ', ' : ''} ${address.city}`;
  }

  if (address.state) {
    resultAddress += `${resultAddress ? ', ' : ''} ${address.state}`;
  }

  resultAddress += address.postalCode ? ` ${address.postalCode}` : '';

  return resultAddress.trim();
};

export const isZipCodeValid = (zipCode: string) => {
  return /\d{5}$/g.test(zipCode);
};
