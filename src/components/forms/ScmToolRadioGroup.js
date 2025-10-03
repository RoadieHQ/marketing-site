import React from 'react';

import Radio from './Radio';
import HelpText from './HelpText';
import { SCM_TOOLS, SCM_SUPPORT_HELP_TEXT } from '../../contactFormConstants';

const ScmToolRadioGroup = ({
  onChange,
  currentValue,
  label = 'Primary source code hosting tool',
  idPrefix = '',
}) => (
  <fieldset className="sm:col-span-2 mt-4">
    <legend className="block text-lg text-blueroadie font-medium">{label}</legend>

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

      <div className="mt-3">
        <HelpText message={SCM_SUPPORT_HELP_TEXT} />
      </div>
    </div>
  </fieldset>
);

export default ScmToolRadioGroup;
