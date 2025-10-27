import React from 'react';
import { RadioGroup, Radio } from '@headlessui/react';
import classnames from 'classnames';

const SegmentedControl = ({ value, onChange, options }) => {
  return (
    <RadioGroup value={value} onChange={onChange} className="flex">
      {options.map((option, index) => {
        // Use option-specific colors if provided, otherwise fall back to defaults
        const checkedBgColor = option.checkedBgColor || 'bg-primary-600';
        const checkedTextColor = option.checkedTextColor || 'text-white';
        const uncheckedBgColor = option.uncheckedBgColor || 'bg-white';
        const uncheckedTextColor = option.uncheckedTextColor || 'text-gray-700';

        return (
          <Radio
            key={option.value}
            value={option}
            className={({ checked }) =>
              classnames(
                'relative flex cursor-pointer px-4 py-3 focus:outline-none whitespace-nowrap',
                'border border-gray-300',
                {
                  'rounded-l-md': index === 0,
                  'rounded-r-md': index === options.length - 1,
                  'z-10': checked,
                  'hover:bg-gray-50': !checked,
                  '-ml-px': index !== 0,
                },
                checked ? `${checkedBgColor} ${checkedTextColor}` : `${uncheckedBgColor} ${uncheckedTextColor}`
              )
            }
          >
            {({ checked }) => (
              <span className="flex items-center">
                <span
                  className={classnames(
                    'text-base font-medium',
                    checked ? checkedTextColor : uncheckedTextColor
                  )}
                >
                  {option.label}
                </span>
              </span>
            )}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};

export default SegmentedControl;
