import React from 'react';

import { INPUT_COLORS } from '.';
import { SCM_TOOLS } from './ScmToolRadioGroup';

export const ScmToolSelect = ({
  onChange,
  currentValue,
  label = 'Primary source code host',
  idPrefix = '',
  color = 'primary',
}) => {
  const { accent, border, placeholder, background, text, label: labelStyle } = INPUT_COLORS[color];
  const onInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <>
      <label className={`block text-sm font-medium ${labelStyle}`} htmlFor="scm">
        {label}
      </label>
      <select
        className={`block mt-1.5 appearance-none w-full py-3 px-4 block shadow-sm rounded-md ${background} ${text} ${accent} ${border} ${placeholder}`}
        id="scm"
        value={currentValue}
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
    </>
  );
};

export default ScmToolSelect;
