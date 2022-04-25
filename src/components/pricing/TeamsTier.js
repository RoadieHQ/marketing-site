import React from 'react';
import { Button, HelpText } from 'components';

import TeamsTierPriceDisplay from './TeamsTierPriceDisplay';
import TeamsTierBenefits from './TeamsTierBenefits';
import TierContainer from './TierContainer';
import TeamsTierHeader from './TeamsTierHeader';

const TeamsTier = ({
  ctaHelpText = 'No credit card required',
  ctaComponent = (
    <Button
      text="Start a free trial"
      link={true}
      color="primary"
      to="/free-trial/"
      fullWidth
    />
  ),
  optionsForNumberOfEngineers,
  numberOfEngineers,
  setNumberOfEngineers,
}) => (
    <TierContainer>
      <div className="p-6">
        <TeamsTierHeader />

        <TeamsTierPriceDisplay
          optionsForNumberOfEngineers={optionsForNumberOfEngineers}
          numberOfEngineers={numberOfEngineers}
          setNumberOfEngineers={setNumberOfEngineers}
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
