import React from 'react';
import isEmpty from 'lodash/isEmpty';

import { INPUT_COLORS } from '.';
import { SCM_TOOLS, SCM_SUPPORT_HELP_TEXT, SCM_NO_GITLAB_TEXT } from '../../contactFormConstants';
import { HelpText, Select } from 'components';

export const ScmToolSelect = ({
  onChange,
  currentValue,
  label = 'Primary source code host',
  idPrefix = '',
  color = 'primary',
  helpText = SCM_SUPPORT_HELP_TEXT,
  showProductPrompts = true,
}) => {
  const { label: labelStyle } = INPUT_COLORS[color];

  return (
    <>
      <label className={`block text-lg font-medium ${labelStyle}`} htmlFor="scm">
        {label}
      </label>

      <div className="mt-1.5">
        <Select
          value={currentValue.value}
          options={SCM_TOOLS}
          onChange={onChange}
          id="scm"
          name="scm"
        >
          {SCM_TOOLS.map(({ value, label }) => (
            <option
              key={`sct-option-${value}`}
              value={value}
              name={`sct-option-${value}`}
              id={`${idPrefix}scm-${value}-input`}
            >
              {label}
            </option>
          ))}
        </Select>
      </div>

      {!isEmpty(helpText) && !isEmpty(currentValue.value) && showProductPrompts && (
        <>
          {currentValue.value.includes('gitlab') && (
            <div className="mt-3">
              <HelpText message={SCM_NO_GITLAB_TEXT} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ScmToolSelect;
