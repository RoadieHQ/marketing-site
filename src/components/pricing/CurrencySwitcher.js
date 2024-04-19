import React from 'react';
import classnames from 'classnames';

const CurrencySwitcherButton = ({ currentlySetCurrency, setCurrency, currency }) => {
  const sharedClassNames = 'SwitchTrigger';
  const activeClassNames = 'active';
  const inactiveClassNames = 'fml';

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
  <div className="Switch">
    <CurrencySwitcherButton currency="USD" {...props} />
    <CurrencySwitcherButton currency="EUR" {...props} />
  </div>
);

export default CurrencySwitcher;
