import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import Image from 'next/image';

import { placeMarker } from '@/assets';
import clsx from 'clsx';
import React from 'react';

export type Suggestion = { text: string; value: string };

type Props = {
  suggestions?: Suggestion[];
  showSuggestions?: boolean;
  value?: string;
  placeholder?: string;
  error?: string;

  onChange?: (v: string) => void;
  onBlur?: () => void;
  onSuggestionClick?: (v: Suggestion) => void;
};

export type PoolAddressInputRef = {
  focus: () => void;
};

const PoolAddressInput = React.forwardRef<PoolAddressInputRef, Props>(
  (
    {
      suggestions,
      showSuggestions,
      value,
      placeholder,
      error,
      onChange,
      onBlur,
      onSuggestionClick,
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [val, setVal] = useState(() => value ?? '');
    const [inputFocused, setInputFocused] = useState(false);
    const suggestionsVisible =
      inputFocused && showSuggestions && suggestions && suggestions.length > 0;

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setVal(e.target.value);
      onChange?.(e.target.value);
      setInputFocused(true);
    };

    const handleSuggestionClick = (suggestion: Suggestion) => {
      onSuggestionClick?.(suggestion);
      inputRef.current?.focus();
    };

    useEffect(() => {
      const setupHidingSuggestionsOnClickingOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Element)
        ) {
          setInputFocused(false);
        }
      };

      window.addEventListener('click', setupHidingSuggestionsOnClickingOutside);

      return () => {
        window.removeEventListener(
          'click',
          setupHidingSuggestionsOnClickingOutside
        );
      };
    }, []);

    useEffect(() => {
      setVal(value ?? '');
    }, [value]);

    useEffect(() => {
      if (!inputFocused) {
        onBlur?.();
      }
    }, [inputFocused]);

    return (
      <div className='relative leading-[1.2]' ref={containerRef}>
        <label>
          <div className='font-medium font-secondary text-off-black mb-2'>
            <div className='flex items-center'>
              Pool Address{' '}
              {error && <span className='text-red ml-auto'>{error}</span>}
            </div>
            <span className='block text-gray text-[14px]'>
              or home address if you don’t have a pool{' '}
              <span className='text-off-black'>*</span>
            </span>
          </div>
          <div
            className={clsx(
              'flex gap-2 items-center p-2 border-[2px] rounded-lg border-gray focus-within:border-yellow',
              error && 'border-red'
            )}
          >
            <Image
              src={placeMarker}
              alt=''
              className='w-6 aspect-square filterGray'
            />
            <input
              value={val}
              onChange={handleChange}
              type='text'
              className='border-none outline-0 w-full'
              placeholder={placeholder}
              onFocus={() => setInputFocused(true)}
              ref={inputRef}
            />
          </div>
        </label>

        {suggestionsVisible && (
          <ul
            className='absolute left-0 w-full bg-white border-[1px] border-gray rounded-lg z-10 flex flex-col gap-0.5 p-1'
            style={{ top: 'calc(100% + 4px)' }}
          >
            {suggestions.map((suggestion) => (
              <li key={suggestion.value}>
                <button
                  className='w-full px-2 py-2 cursor-pointer text-left rounded-md hover:bg-gray-100 '
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.text}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

PoolAddressInput.displayName = 'PoolAddressInput';

export default PoolAddressInput;
