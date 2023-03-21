import React from 'react';

import { USD_TO_EUR_EXCHANGE_RATE } from 'components/pricing/prices';
import { NumberOfEngineers } from 'components';

const calculateCentCostInCurrency = ({
  numberOfEngineers,
  perSeatPrices,
  currentlySetCurrency,
}) => {
  const usdCentCostPerDevPerMonth = perSeatPrices.find(
    (opt) => opt.id === numberOfEngineers
  ).usdCentCostPerDevPerMonth;

  let selectedCentCostPerDevPerMonth = usdCentCostPerDevPerMonth;
  if (currentlySetCurrency === 'EUR') {
    const eurCentCostPerDevPerMonth = usdCentCostPerDevPerMonth * USD_TO_EUR_EXCHANGE_RATE;
    selectedCentCostPerDevPerMonth = Math.round(eurCentCostPerDevPerMonth / 50) * 50;
  }

  return selectedCentCostPerDevPerMonth;
};

const TeamsTierPriceDisplay = ({
  perSeatPrices,
  numberOfEngineers,
  setNumberOfEngineers,
  currentlySetCurrency,
  showMonthlyTotal,
}) => {
  const centCostPerDevPerMonth = calculateCentCostInCurrency({
    numberOfEngineers,
    currentlySetCurrency,
    perSeatPrices,
  });
  const centCostPerMonth = numberOfEngineers * centCostPerDevPerMonth;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currentlySetCurrency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return (
    <>
      <div className="mb-2">
        <span className="text-4xl font-extrabold text-gray-900">
          {formatter.format(centCostPerDevPerMonth / 100)}
        </span>
        <span className="text-base text-gray-500"> per dev/month</span>
      </div>

      {showMonthlyTotal && (
        <div className="mb-4">
          <span className="text-base text-gray-900">
            {formatter.format(centCostPerMonth / 100)} billed monthly
          </span>
        </div>
      )}

      <div className="mb-10">
        <NumberOfEngineers
          onChange={setNumberOfEngineers}
          value={numberOfEngineers}
          options={perSeatPrices}
          idPrefix="teams-plan-"
        />
      </div>
    </>
  );
};

export default TeamsTierPriceDisplay;
