import React from 'react';

import { NumberOfEngineers } from 'components';

const TeamsTierPriceDisplay = ({ 
  optionsForNumberOfEngineers,
  numberOfEngineers,
  setNumberOfEngineers,
  currentlySetCurrency,
}) => {
  const centCostPerDevPerMonth = optionsForNumberOfEngineers.find((opt) => (
    opt.id === numberOfEngineers
  ))[`${currentlySetCurrency.toLowerCase()}CentCostPerDevPerMonth`];

  const centCostPerMonth = numberOfEngineers * centCostPerDevPerMonth;

  var formatter = new Intl.NumberFormat('en-US', {
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

      <div className="mb-4">
        <span className="text-base text-gray-900">{formatter.format(centCostPerMonth / 100)} billed monthly</span>
      </div>

      <div className="mb-10">
        <NumberOfEngineers
          onChange={setNumberOfEngineers}
          value={numberOfEngineers}
          options={optionsForNumberOfEngineers}
          idPrefix="teams-plan-"
        />
      </div>
    </>
  );
};

export default TeamsTierPriceDisplay;
