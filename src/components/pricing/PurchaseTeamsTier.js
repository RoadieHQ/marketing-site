import React, { useState } from 'react';
import { Button } from 'components';
import { OPTIONS_FOR_NUMBER_OF_ENGINEERS } from 'components/forms/NumberOfEngineers';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import TeamsTier from './TeamsTier';

import { chargebeeSubdomain } from '../../environment';

const PurchaseTeamsTier = ({ currentlySetCurrency }) => {
  const [numberOfEngineers, setNumberOfEngineers] = useState(OPTIONS_FOR_NUMBER_OF_ENGINEERS[0].id);

  const chargebeePlanName = `Roadie-Teams-Plan-${currentlySetCurrency}-Monthly`;
  const chargebeeUrl = new URL(`https://${chargebeeSubdomain()}.chargebee.com/hosted_pages/checkout`);
  chargebeeUrl.searchParams.append('subscription_items[item_price_id][0]', chargebeePlanName);
  chargebeeUrl.searchParams.append('subscription_items[quantity][0]', numberOfEngineers);

  return (
    <TeamsTier
      numberOfEngineers={numberOfEngineers}
      setNumberOfEngineers={setNumberOfEngineers}
      currentlySetCurrency={currentlySetCurrency}
      optionsForNumberOfEngineers={OPTIONS_FOR_NUMBER_OF_ENGINEERS}
      ctaHelpText="Powered by Chargebee and Stripe"
      ctaComponent={(
        <Button
          text="Buy now"
          id="teams-plan-cta"
          postfixIcon={<ExternalLinkIcon />}
          link={true}
          to={chargebeeUrl.toString()}
          color="primary"
          forceOpenInSameTab={true}
          fullWidth
        />
      )}
    />
  );
};

export default PurchaseTeamsTier;
