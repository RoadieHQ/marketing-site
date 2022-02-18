import React from 'react';
import { HelpText } from 'components';

import Input from './Input';

const TextField = ({
  id,
  label,
  helpText,
  helpTextState,
  ...rest
}) => {
  const htmlId = id ? id : Math.random().toString(36).slice(2);

  return (
    <div className="sm:col-span-2 mt-4">
      <label htmlFor={htmlId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <Input id={htmlId} {...rest} />
        <HelpText message={helpText} state={helpTextState} />
      </div>
    </div>
  );
};

export default TextField;
