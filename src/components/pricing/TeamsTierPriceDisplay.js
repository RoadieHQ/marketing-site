import React from 'react';

import { USD_TO_EUR_EXCHANGE_RATE, SCORECARDS_USD_CENTS_PRICE } from 'components/pricing/prices';
import { NumberOfEngineers, Switch } from 'components';

const calculateCentCostInCurrency = ({
  numberOfEngineers,
  perSeatPrices,
  currentlySetCurrency,
  scorecards = false,
}) => {
  const usdCentCostPerDevPerMonth = perSeatPrices.find(
    (opt) => opt.id === numberOfEngineers
  ).usdCentCostPerDevPerMonth;

  let selectedCentCostPerDevPerMonth = usdCentCostPerDevPerMonth;
  if (currentlySetCurrency === 'EUR') {
    const eurCentCostPerDevPerMonth = usdCentCostPerDevPerMonth * USD_TO_EUR_EXCHANGE_RATE;
    selectedCentCostPerDevPerMonth = Math.round(eurCentCostPerDevPerMonth / 50) * 50;
  }

  if (scorecards) {
    let scorecardsCostInCents = SCORECARDS_USD_CENTS_PRICE;
    if (currentlySetCurrency === 'EUR') {
      const scorecardsEurCentsCostPerDevPerMonth = scorecardsCostInCents * USD_TO_EUR_EXCHANGE_RATE;
      scorecardsCostInCents = Math.round(scorecardsEurCentsCostPerDevPerMonth / 100) * 100;
    }
    selectedCentCostPerDevPerMonth += scorecardsCostInCents;
  }

  return selectedCentCostPerDevPerMonth;
};

const ScorecardsSwitch = ({ checked, onChange }) => (
  <div className="sm:col-span-2 mt-4">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <Switch
          checked={checked}
          onChange={onChange}
          name="scorecards"
          srTitle="scorecards-included"
        />
      </div>

      <div className="ml-3">
        <p className="text-base text-gray-500">
          Scorecards
        </p>
      </div>
    </div>
  </div>
);

const TeamsTierPriceDisplay = ({
  perSeatPrices,
  numberOfEngineers,
  setNumberOfEngineers,
  currentlySetCurrency,
  showMonthlyTotal,
  scorecards,
  setScorecards,
}) => {
  const centCostPerDevPerMonth = calculateCentCostInCurrency({
    numberOfEngineers,
    currentlySetCurrency,
    perSeatPrices,
    scorecards,
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

      <div className="mb-6">
        <NumberOfEngineers
          onChange={setNumberOfEngineers}
          value={numberOfEngineers}
          options={perSeatPrices}
          idPrefix="teams-plan-"
        />
      </div>

      <div className="mb-10">
        <ScorecardsSwitch checked={scorecards} onChange={setScorecards} />
      </div>
    </>
  );
};

export default TeamsTierPriceDisplay;
