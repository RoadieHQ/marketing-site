import React, { useRef } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon';
import kebabCase from 'lodash/kebabCase';
import classnames from 'classnames';

import { INPUT_COLORS } from '.';

const Select = ({
  options,
  onChange,
  value,
  color = 'primary',
  displayKey = 'label',
  valueKey = 'value',
  optionIdPrefix = '',
  name,
  disabled = false,
  iconKey = 'icon',
  showIcon = false,
}) => {
  const inputRef = useRef(null)
  const { accent, border, background, text } = INPUT_COLORS[color];
  const btnClass = classnames(
    'w-full rounded-md shadow-sm py-3 text-left border',
    {
      [background]: !disabled,
      [text]: !disabled,
      [accent]: !disabled,
      [border]: !disabled,
      'opacity-50 bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed': disabled,
      'pl-10 pr-4': showIcon,
      'px-4': !showIcon,
    }
  );

  const openSelect = () => {
    if (inputRef.current && !disabled) {
      inputRef.current.click();   // click the button to open the select
    }
  }

  const SelectedIcon = showIcon && value[iconKey];

  return (
    <Listbox value={value[valueKey]} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <div className="relative w-full">
          {showIcon && SelectedIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SelectedIcon className="h-5 w-5 text-gray-400" />
            </div>
          )}
          <ListboxButton
            className={btnClass}
            ref={inputRef}
            name={name && [name, 'select-button'].join('-')}
          >
            <span className="block truncate pr-6">
              {value[displayKey]}
            </span>
          </ListboxButton>

          {!open && (
            <button
              className={classnames(
                'absolute inset-y-0 right-0 flex items-center pr-3',
                {
                  'cursor-not-allowed': disabled,
                }
              )}
              onClick={openSelect}
              aria-label="Open select input"
              tabIndex={-1}
              type="button"
              disabled={disabled}
            >
              <ChevronDownIcon
                className={classnames('h-5 w-5', {
                  'text-gray-400': disabled,
                })}
              />
            </button>
          )}

          <ListboxOptions
            anchor="bottom"
            className="absolute mt-1 rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none z-10 max-h-60 overflow-y-auto min-w-[var(--button-width)]"
          >
            {options.map((option) => {
              const OptionIcon = showIcon && option[iconKey];
              return (
                <ListboxOption
                  key={kebabCase(option[valueKey])}
                  value={option}
                  id={[optionIdPrefix, kebabCase(option[valueKey])].join('-')}
                  className={({ focus, selected }) => (
                    classnames('cursor-pointer select-none py-2 px-3 text-gray-700', {
                      'bg-gray-200': focus,
                      'bg-primary-200 font-medium': selected,
                    })
                  )}
                >
                  <div className="flex items-center">
                    {showIcon && OptionIcon && (
                      <OptionIcon className="h-5 w-5 mr-2 text-gray-500" />
                    )}
                    <span>{option[displayKey]}</span>
                  </div>
                </ListboxOption>
              );
            })}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  );
};

export default Select;
