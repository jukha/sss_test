import { useEffect, useRef, useState } from 'react';

import { getAddressSuggestions } from '@/helpers/get-address-suggestions';
import useDebounce from '@/hooks/use-debounce';

import { convertSuggestedAddressToString } from './helpers';

type Suggestion = { text: string; value: string };

export const useAddressSuggestions = () => {
  const cached = useRef<Record<string, Suggestion[]>>({});
  const [foundSuggestions, setFoundSuggestion] = useState<Suggestion[]>([]);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  const requestAddressSuggestions = (query: string) => {
    setQuery(query);
  };

  useEffect(() => {
    if (!debouncedQuery.length) {
      return;
    }

    if (!cached.current[debouncedQuery]) {
      getAddressSuggestions(debouncedQuery).then((result) => {
        const suggestions = result?.suggestions
          ?.filter((suggestion) =>
            convertSuggestedAddressToString(suggestion.address)
          )
          .map((suggestion) => ({
            text: convertSuggestedAddressToString(suggestion.address),
            value: suggestion.locationId,
          }));

        cached.current[debouncedQuery] = suggestions;
        setFoundSuggestion(suggestions);
      });
    } else {
      setFoundSuggestion(cached.current[debouncedQuery]);
    }
  }, [debouncedQuery]);

  return {
    requestAddressSuggestions,
    foundSuggestions,
    setFoundSuggestion,
  };
};
