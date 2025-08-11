import React from 'react';

import { USD_TO_EUR_EXCHANGE_RATE, TIERS } from 'components/pricing/prices';

const TeamsTierPriceDisplay = ({
  currentlySetCurrency,
}) => {
  const usdCentCostPerDevPerMonth = TIERS.teams.usdCentCostPerDevPerMonth;

  let centCostPerDevPerMonth = usdCentCostPerDevPerMonth;
  if (currentlySetCurrency === 'EUR') {
    const eurCentCostPerDevPerMonth = usdCentCostPerDevPerMonth * USD_TO_EUR_EXCHANGE_RATE;
    centCostPerDevPerMonth = Math.round(eurCentCostPerDevPerMonth / 50) * 50;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currentlySetCurrency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return (
    <>
      <div className="mb-4">
        <span className="text-4xl font-extrabold text-gray-900">
          {formatter.format(centCostPerDevPerMonth / 100)}
        </span>
        <span className="text-base text-gray-500"> per dev/month</span>
      </div>
  
      <div className="mb-10">
        <p className="pt-2 pb-4">{TIERS.teams.minSeats} to {TIERS.teams.maxSeats} developers</p>
      </div>
    </>
  );
};

export default TeamsTierPriceDisplay;
