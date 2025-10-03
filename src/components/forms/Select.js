import React from 'react';
import classnames from 'classnames';

import { INPUT_COLORS } from '.';
const CLASSES = 'appearance-none py-3 shadow-sm rounded-md';

const Select = ({ options, onChange, children, color = 'primary', fullWidth = true, ...props }) => {
  const { accent, border, placeholder, background, text } = INPUT_COLORS[color];
  const inputColors = `${background} ${text} ${accent} ${border} ${placeholder}`;

  function onInputChange(e) {
    const newValue = { ...options.find(({ value }) => value === e.target.value) };
    onChange(newValue);
  }

  return (
    <select
      className={classnames(CLASSES, inputColors, {
        'w-full': fullWidth,
      })}
      onChange={onInputChange}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
