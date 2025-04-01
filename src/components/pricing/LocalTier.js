import React from 'react';
import { Button, HelpText } from 'components';

import LocalTierPriceDisplay from './LocalTierPriceDisplay';
import LocalTierBenefits from './LocalTierBenefits';
import TierContainer from './TierContainer';
import TierName from './TierName';
import TierDescription from './TierDescription';
import TIERS from './tiers';

const LocalTier = ({
  ctaHelpText = 'No credit card required',
  ctaComponent = (
    <Button
      text={TIERS.local.ctaLabel}
      link={true}
      color="primary"
      to={TIERS.local.ctaLinkTo}
      fullWidth
    />
  ),
  perSeatPrices,
  numberOfEngineers,
  setNumberOfEngineers,
  currentlySetCurrency,
  showMonthlyTotal,
}) => (
  <TierContainer>
    <div className="p-6">
      <TierName name={TIERS.local.name} />
      <TierDescription description={TIERS.local.description} />

      <LocalTierPriceDisplay
        perSeatPrices={perSeatPrices}
        numberOfEngineers={numberOfEngineers}
        setNumberOfEngineers={setNumberOfEngineers}
        currentlySetCurrency={currentlySetCurrency}
        showMonthlyTotal={showMonthlyTotal}
      />

      <div>
        <div className="mb-1">{ctaComponent}</div>

        <div className="text-center">
          <HelpText message={ctaHelpText} />
        </div>
      </div>
    </div>

    <LocalTierBenefits />
  </TierContainer>
);

export default LocalTier;
