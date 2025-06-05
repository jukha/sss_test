import { tryFetchData } from '@/helpers/fetch-data';

const HERE_API_KEY = process.env.NEXT_PUBLIC_HERE_API_KEY;

const API_URL = `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${HERE_API_KEY}&country=USA`;

export type SuggestedAddress = {
  country?: string;
  state?: string;
  county?: string;
  city?: string;
  district?: string;
  street?: string;
  houseNumber?: string;
  postalCode?: string;
};

type SuggestionsResponse = {
  suggestions?: {
    label: string;
    language: string;
    countryCode: string;
    locationId: string;
    address: SuggestedAddress;
    matchLevel: string;
  }[];
};

export const getAddressSuggestions = async (query: string): Promise<SuggestionsResponse> => {
  const { data } = await tryFetchData<SuggestionsResponse, null>({
    url: `${API_URL}&query=${query}`,
    method: 'GET',
    jsonHeaderInRequest: false
  })

  if (!data) throw new Error('Error while calling HERE API');

  return data;
};
