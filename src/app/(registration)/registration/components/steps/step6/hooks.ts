import { useEffect, useRef, useState } from 'react';

import { SuggestedAddress, getAddressSuggestions } from '@/helpers/get-address-suggestions';
import useDebounce from '@/hooks/use-debounce';

import { convertSuggestedAddressToString } from './helpers';

const REQUEST_DELAY = Number(process.env.NEXT_PUBLIC_HERE_REQUEST_DELAY || '0');

type Suggestion = { text: string; value: string };

const isSuggestionAddressValid = (address: SuggestedAddress) => {
  return address.street && address.city && address.state && address.postalCode;
};

export const useAddressSuggestions = () => {
  const cached = useRef<Record<string, Suggestion[]>>({});
  const [foundSuggestions, setFoundSuggestion] = useState<Suggestion[]>([]);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, REQUEST_DELAY);

  const requestAddressSuggestions = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    if (!debouncedQuery.length) {
      return;
    }

    if (cached.current[debouncedQuery]) {
      setFoundSuggestion(cached.current[debouncedQuery]);
      return;
    }

    const abortController = new AbortController();

    getAddressSuggestions(debouncedQuery, abortController).then((result) => {
      if (!result.suggestions) return;

      const suggestions = result.suggestions
        .filter((suggestion) => isSuggestionAddressValid(suggestion.address))
        .map((suggestion) => ({
          text: convertSuggestedAddressToString(suggestion.address),
          value: suggestion.locationId,
        }));

      cached.current[debouncedQuery] = suggestions;
      setFoundSuggestion(suggestions);
    });

    return () => {
      abortController.abort('Canceled by debounce');
    }
  }, [debouncedQuery]);

  return {
    requestAddressSuggestions,
    foundSuggestions,
    setFoundSuggestion,
  };
};
