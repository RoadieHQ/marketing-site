import React, { useState } from 'react';

import { PER_SEAT_PRICES_MARKETING } from 'components/pricing/prices';

import TeamsTier from './TeamsTier';

const TeamsPricingTier = ({ currentlySetCurrency }) => {
  const [numberOfEngineers, setNumberOfEngineers] = useState(PER_SEAT_PRICES_MARKETING[0].id);
  const [scorecards, setScorecards] = useState(false);

  return (
    <TeamsTier
      numberOfEngineers={numberOfEngineers}
      setNumberOfEngineers={setNumberOfEngineers}
      perSeatPrices={PER_SEAT_PRICES_MARKETING}
      currentlySetCurrency={currentlySetCurrency}
      scorecards={scorecards}
      setScorecards={setScorecards}
    />
  );
};

export default TeamsPricingTier;
