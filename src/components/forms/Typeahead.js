import React from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { INPUT_COLORS } from './input-colors';
import classnames from 'classnames';

export default function Typeahead({
  onChange,
  value,
  options,
  fullWidth = false,
  color = 'primary',
}) {
  const { accent, border, placeholder, background, text } = INPUT_COLORS[color];

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative w-72">
        <ListboxButton className={classnames(
          `rounded-md shadow-sm py-3 px-4 text-left border ${background} ${text} ${accent} ${border} ${placeholder}`, {
            'w-full': fullWidth,
          })}>
          {value?.name ? value.name : 'Categories'}
        </ListboxButton>

        <ListboxOptions className="absolute mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none z-10">
          {options.map((category) => (
            <ListboxOption
              key={category.name}
              value={category}
              className={({ focus, selected }) =>
                [
                  "cursor-pointer select-none py-2 px-3 text-gray-700",
                  focus ? "bg-blue-100" : "",
                  selected ? "bg-blue-200 font-medium" : ""
                ].join(" ")
              }
            >
              {category.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
