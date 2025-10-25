import React from 'react';
import XIcon from '@heroicons/react/solid/XIcon';
import { SearchIcon } from '@heroicons/react/outline';
import Input from './Input';

const Search = ({ value, onChange, placeholder = 'Search', className = '', ...rest }) => {
  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange('');
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        fullWidth={true}
        className="pl-10 pr-10"
        {...rest}
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 flex items-center pr-3 hover:opacity-70"
          aria-label="Clear search"
          type="button"
          tabIndex={-1}
        >
          <XIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Search;
