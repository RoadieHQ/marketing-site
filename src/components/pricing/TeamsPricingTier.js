import React, { useState } from 'react';
import { Button, NumberOfEngineers, HelpText } from 'components';

import { OPTIONS_FOR_NUMBER_OF_ENGINEERS } from 'components/forms/NumberOfEngineers';

import TierName from './TierName';
import TierDescription from './TierDescription';
import TierBulletsSection from './TierBulletsSection';

const TeamsPricingTier = () => {
  const [numberOfEngineers, setNumberOfEngineers] = useState(OPTIONS_FOR_NUMBER_OF_ENGINEERS[0].id);
  const dollarCentCostPerDevPerMonth = OPTIONS_FOR_NUMBER_OF_ENGINEERS.find((opt) => opt.id === numberOfEngineers).dollarCentCostPerDevPerMonth;
  const dollarCentCostPerMonth = numberOfEngineers * dollarCentCostPerDevPerMonth;

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div className="p-6">
        <TierName name="Teams" />
        <TierDescription
          description="For teams who want a home for their services, docs, runbooks, API specs and CI."
        />

        <div className="mb-2">
          <span className="text-4xl font-extrabold text-gray-900">{formatter.format(dollarCentCostPerDevPerMonth / 100)}</span>
          <span className="text-base text-gray-500"> per dev/month</span>
        </div>

        <div className="mb-4">
          <span className="text-base text-gray-900">{formatter.format(dollarCentCostPerMonth / 100)} billed monthly</span>
        </div>

        <div className="mb-10">
          <NumberOfEngineers
            onChange={setNumberOfEngineers}
            value={numberOfEngineers}
            options={OPTIONS_FOR_NUMBER_OF_ENGINEERS}
            idPrefix="teams-plan-"
          />
        </div>

        <div>
          <div className="mb-1">
            <Button
              text="Start a free trial"
              link={true}
              color="primary"
              to="/free-trial/"
              fullWidth
            />
          </div>

          <div className="text-center">
            <HelpText message="No credit card required" />
          </div>
        </div>
      </div>

      <TierBulletsSection
        hasIcon={false}
        bullets={[
          'Unlimited software components tracked.',
          'Unlimited API specs.',
          'Unlimited TechDocs',
          'Unlimited scaffolder templates.',
        ]}
      />

      <TierBulletsSection
        heading="Key features"
        bullets={[
          'Backstage software catalog',
          'Monthly Backstage upgrades',
          'TechDocs technical documentation',
          'Scaffolder service creator',
          'API specs',
          'Vast array of open-source Backstage plugins',
          'Locations log',
          'Tech radar',
          'Kubernetes plugin',
          'Single sign on',
        ]}
      />
    </div>
  );
};

export default TeamsPricingTier;
