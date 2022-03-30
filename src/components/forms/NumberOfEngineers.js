import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const NumberOfEngineers = ({
  onChange,
  value,
  idPrefix = '',
  options,
}) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <fieldset className="sm:col-span-2">
      <label htmlFor="number-of-engineers" className="hidden" aria-hidden={true}>
        Number of engineers *
      </label>

      <div className="mt-1.5 relative">
        <select
          id={`${idPrefix}number-of-engineers`}
          name="number-of-engineers"
          className="block w-full py-3 bg-none border border-gray-300 shadow-sm text-gray-900 focus:ring-primary-500 focus:border-primary-500 rounded-md"
          onChange={handleChange}
          value={value}
        >

        {options.map((option) => (
          <option
            className="bg-gray-900"
            key={option.id}
            value={option.id}
          >
            {option.name}
          </option>
        ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
          <ChevronDownIcon className="h-4 w-4 text-indigo-300" aria-hidden="true" />
        </div>
      </div>
    </fieldset>
  );
};

export default NumberOfEngineers;
