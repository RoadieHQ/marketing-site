import React from 'react';
import { Button } from 'components';

import TeamsTierPriceDisplay from './TeamsTierPriceDisplay';
import TierName from './TierName';
import TierDescription from './TierDescription';
import TIERS from './tiers';

const TeamsTier = ({
  ctaComponent = (
    <Button
      text={TIERS.teams.ctaLabel}
      link={true}
      className="Button size-3 neutral expand"
      to={TIERS.teams.ctaLinkTo}
    />
  ),
  perSeatPrices,
  numberOfEngineers,
  setNumberOfEngineers,
  currentlySetCurrency,
  showMonthlyTotal,
}) => (
    <div className="p-5 bp3-gc-3" style={{ borderLeft: '1px solid var(--gray-5)' }}>
      <div className='mb-4'>
        <h2 className='Text size-5'>Teams</h2>
      </div>
      
      <TierDescription description={TIERS.teams.description} />

      <TeamsTierPriceDisplay
        perSeatPrices={perSeatPrices}
        numberOfEngineers={numberOfEngineers}
        setNumberOfEngineers={setNumberOfEngineers}
        currentlySetCurrency={currentlySetCurrency}
        showMonthlyTotal={showMonthlyTotal}
      />

      <div>
        <div className="mb-2">
          {ctaComponent}
        </div>

        <small className='Text size-2 lowContrast'>No credit card required</small>
      </div>
    </div>
);

export default TeamsTier;
