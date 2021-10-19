import React from 'react';

import { SCM_TOOLS } from 'components/forms/ScmToolRadioGroup';
import Radio from './Radio';

const ScmToolRadioGroup = ({
  onChange,
  currentValue,
  label = 'Primary source code hosting tool',
  idPrefix = '',
}) => (
  <fieldset className="sm:col-span-2">
    <legend className="block text-sm font-medium text-gray-700">{label}</legend>

    <div className="mt-4 grid grid-cols-1 gap-y-4">
      {SCM_TOOLS.map(({ value, label }) => (
        <Radio
          key={value}
          value={value}
          label={label}
          onChange={onChange}
          currentValue={currentValue}
          name="scm"
          id={`${idPrefix}scm-${value}-input`}
        />
      ))}
    </div>
  </fieldset>
);

export default ScmToolRadioGroup;
