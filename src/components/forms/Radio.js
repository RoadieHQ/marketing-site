import React from 'react';

const Radio = ({ id, onChange, value, currentValue, label, ...rest }) => {
  const htmlId = id ? id : Math.random().toString(36).slice(2);

  const onValueChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        id={htmlId}
        onChange={onValueChange}
        checked={currentValue === value}
        value={value}
        type="radio"
        {...rest}
        className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
      />
      <label htmlFor={htmlId} className="ml-3">
        <span className="block text-md text-blueroadie font-medium">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
