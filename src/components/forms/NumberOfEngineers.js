import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export const OPTIONS_FOR_NUMBER_OF_ENGINEERS = [
  { id: 1, name: 'Fewer than 50' },
  { id: 51, name: '51 to 100' },
  { id: 101, name: '101 to 150' },
  { id: 151, name: '151 to 200' },
  { id: 201, name: '201 to 250' },
  { id: 251, name: '251 to 300' },
  { id: 301, name: '301 to 350' },
  { id: 351, name: '351 to 400' },
  { id: 401, name: 'More than 400' },
];

const NumberOfEngineers = ({
  onChange,
  value,
  idPrefix = '',
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <fieldset className="sm:col-span-2">
      <label htmlFor="number-of-engineers" className="block text-sm font-medium text-gray-700">
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
        {OPTIONS_FOR_NUMBER_OF_ENGINEERS.map((option) => (
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
