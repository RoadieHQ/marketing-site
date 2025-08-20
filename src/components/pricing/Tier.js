import React from 'react';

import TierBulletsSection from './TierBulletsSection';
import TierContainer from './TierContainer';
import TierName from './TierName';
import TierDescription from './TierDescription';
import TierPriceDisplay from './TierPriceDisplay';
import { Button, HelpText } from 'components';

const GrowthTier = ({ 
  tier,
  currentlySetCurrency,
}) => (
  <TierContainer>
    <div className="p-6">
      <TierName name={tier.name} />
      <TierDescription description={tier.description} />
      <TierPriceDisplay tier={tier} currentlySetCurrency={currentlySetCurrency} />

      <div className="mb-5">
        <Button
          text={tier.ctaLabel}
          link={true}
          color="primary"
          to={tier.ctaLinkTo}
          fullWidth
        />
      </div>

      {tier.ctaHelpText && (
        <div className="text-center">
          <HelpText message={tier.ctaHelpText} />
        </div>
      )}
    </div>

      <TierBulletsSection
        heading={tier.benefits.heading}
        bullets={tier.benefits.bullets}
      />
  </TierContainer>
);

export default GrowthTier;
