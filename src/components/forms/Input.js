import React from 'react';
import classnames from 'classnames';
import { INPUT_COLORS } from './input-colors';

const Input = ({ onChange, className, fullWidth = false, ...rest }) => {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };
  const { accent, border, placeholder, background, text } = INPUT_COLORS.primary;

  return (
    <input
      onChange={onInputChange}
      className={classnames(
        className,
        `py-3 px-4 block shadow-sm rounded-md ${background} ${text} ${accent} ${border} ${placeholder}`,
        {
          'w-full': fullWidth,
        }
      )}
      {...rest}
    />
  );
};

export default Input;
