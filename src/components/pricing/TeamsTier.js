import React from 'react';
import { Button, HelpText } from 'components';

import TeamsTierPriceDisplay from './TeamsTierPriceDisplay';
import TeamsTierBenefits from './TeamsTierBenefits';
import TierContainer from './TierContainer';
import TierName from './TierName';
import TierDescription from './TierDescription';
import TIERS from './tiers';

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
  perSeatPrices,
  numberOfEngineers,
  setNumberOfEngineers,
  currentlySetCurrency,
  showMonthlyTotal,
  scorecards,
  setScorecards,
}) => (
    <TierContainer>
      <div className="p-6">
        <TierName name={TIERS.teams.name} />
        <TierDescription description={TIERS.teams.description} />

        <TeamsTierPriceDisplay
          perSeatPrices={perSeatPrices}
          numberOfEngineers={numberOfEngineers}
          setNumberOfEngineers={setNumberOfEngineers}
          currentlySetCurrency={currentlySetCurrency}
          showMonthlyTotal={showMonthlyTotal}
          scorecards={scorecards}
          setScorecards={setScorecards}
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
