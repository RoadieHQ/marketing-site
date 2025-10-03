import React from 'react';
import classnames from 'classnames';

const CurrencySwitcherButton = ({ currentlySetCurrency, setCurrency, currency }) => {
  const sharedClassNames =
    'relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-600 focus:z-10 sm:w-auto sm:px-8';
  const activeClassNames = 'bg-white border-gray-200 shadow-sm text-gray-900';
  const inactiveClassNames = 'ml-0.5 border border-transparent text-gray-700';

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setCurrency(currency);
      }}
      className={classnames(sharedClassNames, {
        [activeClassNames]: currentlySetCurrency === currency,
        [inactiveClassNames]: currentlySetCurrency !== currency,
      })}
      id={`currency-switcher-${currency.toLowerCase()}`}
    >
      {currency}
    </button>
  );
};

const CurrencySwitcher = (props) => (
  <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
    <CurrencySwitcherButton currency="USD" {...props} />
    <CurrencySwitcherButton currency="EUR" {...props} />
  </div>
);

export default CurrencySwitcher;
