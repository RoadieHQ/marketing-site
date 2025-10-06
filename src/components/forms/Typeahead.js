import React from 'react'
import isEmpty from 'lodash/isEmpty';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import XIcon from '@heroicons/react/solid/XIcon'
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon'
import { INPUT_COLORS } from './input-colors';

export default function Typeahead({
  onChange,
  value,
  options,
  color = 'primary',
  placeholderText = 'Choose...',
}) {
  console.log('Typeahead', value, options);
  const { accent, border, placeholder, background, text } = INPUT_COLORS[color];
  const btnClass = `w-full rounded-md shadow-sm py-3 px-4 text-left border ${background} ${text} ${accent} ${border}`;
  const placeholderTextColor = placeholder.replace('placeholder-', '');

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange({});
  };

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className="relative w-full">
          <ListboxButton className={btnClass}>
            <span className={`block truncate pr-6`}>
              {value?.name ?
                value.name :
                <span className={placeholderTextColor}>{placeholderText}</span>
              }
            </span>
          </ListboxButton>

          {!open && (
            <span className={`absolute inset-y-0 right-0 flex items-center pr-3 hover:opacity-70 ${placeholderTextColor}`}>
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          )}

          {!isEmpty(value) && (
            <button
              onClick={handleClear}
              className="absolute inset-y-0 right-0 flex items-center pr-3 hover:opacity-70"
              aria-label="Clear selection"
              data-headlessui-ignore-button
              type="button"
            >
              <XIcon className="h-5 w-5" />
            </button>
          )}

          <ListboxOptions className="absolute mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none z-10">
            {options.map((option) => (
              <ListboxOption
                key={option.name}
                value={option}
                className={({ focus, selected }) =>
                  [
                    "cursor-pointer select-none py-2 px-3 text-gray-700",
                    focus ? "bg-primary-100" : "",
                    selected ? "bg-primary-200 font-medium" : ""
                  ].join(" ")
                }
              >
                {option.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  )
}
