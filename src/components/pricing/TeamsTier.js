import React from 'react';
import { Button, HelpText } from 'components';

import TeamsTierPriceDisplay from './TeamsTierPriceDisplay';
import TeamsTierBenefits from './TeamsTierBenefits';
import TierContainer from './TierContainer';
import TierName from './TierName';
import TierDescription from './TierDescription';
import { TIERS } from './prices';

const TeamsTier = ({
  ctaHelpText = 'No credit card required',
  ctaComponent = (
    <Button
      text={TIERS.teams.ctaLabel}
      link={true}
      color="primary"
      to={TIERS.teams.ctaLinkTo}
      fullWidth
    />
  ),
  currentlySetCurrency,
}) => (
    <TierContainer>
      <div className="p-6">
        <TierName name={TIERS.teams.name} />
        <TierDescription description={TIERS.teams.description} />

        <TeamsTierPriceDisplay
          currentlySetCurrency={currentlySetCurrency}
        />

        <div>
          <div className="mb-1">
            {ctaComponent}
          </div>

          <div className="text-center">
            <HelpText message={ctaHelpText} />
          </div>
        </div>
      </div>

      <TeamsTierBenefits />
    </TierContainer>
);

export default TeamsTier;
