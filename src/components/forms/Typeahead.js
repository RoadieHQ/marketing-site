import React, { useState, useRef } from 'react'
import isEmpty from 'lodash/isEmpty';
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/react'
import XIcon from '@heroicons/react/solid/XIcon'
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon'
import { INPUT_COLORS } from './input-colors';

export default function Typeahead({
  onChange,
  value,
  options,
  color = 'primary',
  placeholderText = 'Choose...',
  optionKey = 'name',
  name,
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null)

  const { accent, border, placeholder, background, text } = INPUT_COLORS[color];
  const inputClass = `w-full rounded-md shadow-sm py-3 px-4 text-left border ${background} ${text} ${accent} ${border} truncate overflow-hidden whitespace-nowrap`;
  const placeholderTextColor = placeholder.replace('placeholder-', '');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option[optionKey].toLowerCase().includes(query.toLowerCase());
        })

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange({});
  };

  const openCombobox = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // focussing opens the dropdown
    }
  }

  return (
    <Combobox
      immediate
      value={value}
      onChange={onChange}
      onClose={() => setQuery('')}
    >
      {({ open }) => (
        <div className="relative w-full">
          <ComboboxInput
            className={inputClass}
            displayValue={(option) => option && option[optionKey]}
            placeholder={placeholderText}
            ref={inputRef}
            name={name && [name, 'input'].join('-')}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />

          {!open && isEmpty(value) && (
            <button
              className={`absolute inset-y-0 right-0 flex items-center pr-3 ${placeholderTextColor}`}
              onClick={openCombobox}
              aria-label="Open combobox"
              tabIndex={-1}
              type="button"
            >
              <ChevronDownIcon className="h-5 w-5" />
            </button>
          )}

          {!isEmpty(value) && (
            <button
              onClick={handleClear}
              className="absolute inset-y-0 right-0 flex items-center pr-3 hover:opacity-70"
              aria-label="Clear selection"
              type="button"
              tabIndex={-1}
            >
              <XIcon className="h-5 w-5" />
            </button>
          )}

          <ComboboxOptions className="absolute mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none z-10 max-h-60 overflow-y-auto min-w-[var(--button-width)]">
            {filteredOptions.map((option) => (
              <ComboboxOption
                key={option[optionKey]}
                value={option}
                className={({ focus, selected }) =>
                  [
                    "cursor-pointer select-none py-2 px-3 text-gray-700",
                    focus ? "bg-gray-200" : "",
                    selected ? "bg-primary-200 font-medium" : ""
                  ].join(" ")
                }
              >
                {option[optionKey]}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </div>
      )}
    </Combobox>
  )
}
