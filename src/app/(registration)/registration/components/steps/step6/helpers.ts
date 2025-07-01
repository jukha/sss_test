import { SuggestedAddress } from '@/helpers/get-address-suggestions';

export const convertSuggestedAddressToString = (address: SuggestedAddress) => {
  const addressParts = [
    `${address.houseNumber ?? ''}${address.street ? ' ' + address.street : ''}`,
    address.city,
    `${address.state ?? ''}${address.postalCode ? ' ' + address.postalCode : ''}`,
  ].filter(Boolean);

  return addressParts.join(', ').trim();
};

export const isZipCodeValid = (zipCode: string) => {
  return /(?<!\d)\d{5}$/g.test(zipCode);
};

export const foundUserAddressInSuggestions = (userAddress: string, suggestions: string[]) => {
  const foundInSuggestion = suggestions.some(
    (suggestedAddress) => suggestedAddress.toLowerCase() === userAddress.trim().toLowerCase()
  );

  return {
    foundInSuggestion,
  };
};
