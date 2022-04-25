import React, { useState } from 'react';

import { OPTIONS_FOR_NUMBER_OF_ENGINEERS } from 'components/forms/NumberOfEngineers';

import TeamsTier from './TeamsTier';

const TeamsPricingTier = () => {
  const [numberOfEngineers, setNumberOfEngineers] = useState(OPTIONS_FOR_NUMBER_OF_ENGINEERS[0].id);

  return (
    <TeamsTier
      numberOfEngineers={numberOfEngineers}
      setNumberOfEngineers={setNumberOfEngineers}
      optionsForNumberOfEngineers={OPTIONS_FOR_NUMBER_OF_ENGINEERS}
    />
  );
};

export default TeamsPricingTier;
