import React from 'react';
import kebabCase from 'lodash/kebabCase';

const CURRENCY_SYMBOL = {
  EUR: '€',
  USD: '$',
};

const TierPriceDisplay = ({
  currentlySetCurrency,
  tier,
}) => {
  let cost = 'Custom';
  if (!tier.customPricing) {
    const costPerDevPerMonth = tier[`${currentlySetCurrency.toLowerCase()}CentCostPerDevPerMonth`];
    cost = CURRENCY_SYMBOL[currentlySetCurrency] + costPerDevPerMonth.toString();
  }

  return (
    <>
      <div className="mb-4">
        <span
          className="text-4xl font-extrabold text-gray-900"
          id={`${kebabCase(tier.name)}-cost-display`}
        >
          {cost}
        </span>
        {tier.costQualifier && (
          <span className="text-base text-gray-500">{tier.costQualifier}</span>
        )}
      </div>
  
      <div className="mb-10">
        <p>{tier.pricingCondition}</p>
      </div>
    </>
  );
};

export default TierPriceDisplay;
