import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export const OPTIONS_FOR_NUMBER_OF_ENGINEERS = [
  Object.freeze({ id: 50, name: '50 developers', dollarCentCostPerDevPerMonth: 1800 }),
  Object.freeze({ id: 60, name: '60 developers', dollarCentCostPerDevPerMonth: 1800 }),
  Object.freeze({ id: 70, name: '70 developers', dollarCentCostPerDevPerMonth: 1700 }),
  Object.freeze({ id: 80, name: '80 developers', dollarCentCostPerDevPerMonth: 1700 }),
  Object.freeze({ id: 90, name: '90 developers', dollarCentCostPerDevPerMonth: 1700 }),
  Object.freeze({ id: 100, name: '100 developers', dollarCentCostPerDevPerMonth: 1600 }),
  Object.freeze({ id: 110, name: '110 developers', dollarCentCostPerDevPerMonth: 1600 }),
  Object.freeze({ id: 120, name: '120 developers', dollarCentCostPerDevPerMonth: 1600 }),
  Object.freeze({ id: 130, name: '130 developers', dollarCentCostPerDevPerMonth: 1600 }),
  Object.freeze({ id: 140, name: '140 developers', dollarCentCostPerDevPerMonth: 1600 }),
  Object.freeze({ id: 150, name: '150 developers', dollarCentCostPerDevPerMonth: 1500 }),
];

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
