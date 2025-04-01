import React, { useState } from 'react';

import LocalTier from './LocalTier';

import { PER_SEAT_PRICES_ROADIE_LOCAL } from 'components/pricing/prices';

const LocalPricingTier = ({ currentlySetCurrency }) => {
  const [numberOfEngineers, setNumberOfEngineers] = useState(PER_SEAT_PRICES_ROADIE_LOCAL[0].id);

  return (
    <LocalTier
      numberOfEngineers={numberOfEngineers}
      setNumberOfEngineers={setNumberOfEngineers}
      perSeatPrices={PER_SEAT_PRICES_ROADIE_LOCAL}
      currentlySetCurrency={currentlySetCurrency}
    />
  );
};

export default LocalPricingTier;
