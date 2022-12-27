import React from 'react';

import { INPUT_COLORS } from '.';
import { SCM_TOOLS, SCM_SUPPORT_HELP_TEXT } from '../../contactFormConstants';
import { HelpText } from 'components';

export const ScmToolSelect = ({
  onChange,
  currentValue,
  label = 'Primary source code host',
  idPrefix = '',
  color = 'primary',
  helpText = SCM_SUPPORT_HELP_TEXT,
}) => {
  const { accent, border, placeholder, background, text, label: labelStyle } = INPUT_COLORS[color];

  function onInputChange(e) {
    const newScmTool = { ...SCM_TOOLS.find(({ value }) => value === e.target.value) };
    onChange(newScmTool);
  }

  return (
    <>
      <label className={`block text-lg font-medium ${labelStyle}`} htmlFor="scm">
        {label}
      </label>

      <select
        className={`block mt-1.5 appearance-none w-full py-3 px-4 block shadow-sm rounded-md ${background} ${text} ${accent} ${border} ${placeholder}`}
        id="scm"
        value={currentValue.value}
        name="scm"
        onChange={onInputChange}
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
      </select>

      {helpText && helpText !== '' && (
        <div className="mt-3">
          <HelpText message={helpText} />
        </div>
      )}
    </>
  );
};

export default ScmToolSelect;
