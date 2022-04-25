import React from 'react';

import { NumberOfEngineers } from 'components';

const TeamsTierPriceDisplay = ({ 
  optionsForNumberOfEngineers,
  numberOfEngineers,
  setNumberOfEngineers,
}) => {
  const dollarCentCostPerDevPerMonth = optionsForNumberOfEngineers.find((opt) => (
    opt.id === numberOfEngineers
  )).dollarCentCostPerDevPerMonth;

  const dollarCentCostPerMonth = numberOfEngineers * dollarCentCostPerDevPerMonth;

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <>
      <div className="mb-2">
        <span className="text-4xl font-extrabold text-gray-900">
          {formatter.format(dollarCentCostPerDevPerMonth / 100)}
        </span>
        <span className="text-base text-gray-500"> per dev/month</span>
      </div>

      <div className="mb-4">
        <span className="text-base text-gray-900">{formatter.format(dollarCentCostPerMonth / 100)} billed monthly</span>
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
