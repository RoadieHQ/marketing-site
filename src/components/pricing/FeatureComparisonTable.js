import React, { Fragment } from 'react';
import { CheckIcon, MinusIcon } from '@heroicons/react/solid';
import { TextLink } from 'components';

import TIERS from './tiers';

const sections = [{
  name: 'Scale',
  features: [{
    name: 'Software components tracked',
    tiers: { Teams: 'Unlimited', Growth: 'Unlimited' },
  }, {
    name: 'API Specs',
    tiers: { Teams: 'Unlimited', Growth: 'Unlimited' },
  }, {
    name: 'TechDocs',
    tiers: { Teams: 'Unlimited', Growth: 'Unlimited' },
  }, {
    name: 'Scaffolder templates',
    tiers: { Teams: 'Unlimited', Growth: 'Unlimited' },
  }, {
    name: 'Scorecards (optional paid extra)',
    tiers: { Teams: 'Unlimited', Growth: 'Unlimited' },
  }, {
    name: 'Minimum seats',
    tiers: { Teams: TIERS.teams.minSeats.toString(), Growth: TIERS.growth.minSeats.toString() },
  }],

}, {
  name: 'Features',
  features: [{
    name: 'Software & teams catalog',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'Monthly, automatic upgrades',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'TechDocs technical documentation',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'Scaffolder golden paths',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'API specs in catalog',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'Open-source Backstage plugins',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'RAG AI & MCP Server Access (beta)',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'REST API access',
    tiers: { Growth: true },
  }, {
    name: 'Custom RBAC (optional paid extra)',
    tiers: { Growth: true },
  }],

}, {
  name: 'Support',
  features: [{
    name: 'In-app chat',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'Slack & MS Teams support',
    tiers: { Growth: true },
  }, {
    name: 'SLA',
    tiers: { Growth: true },
  }, {
    name: '24/7 On-call',
    tiers: { Growth: true },
  }, {
    name: 'Usage analytics dashboard',
    tiers: { Growth: true },
  }],

}, {
  name: 'Customization',
  features: [{
    name: 'Customizable theme',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'Customizable catalog',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'Customizable navigation',
    tiers: { Teams: true, Growth: true },
  }, {
    name: 'Multiple tenants available',
    tiers: { Growth: true },
  }, {
    name: 'Custom, private Backstage plugins',
    tiers: { Growth: true },
  }],
}, {
  name: 'Connect to on-prem infra',
  features: [{
    name: 'Secure on-prem connection',
    tiers: { Growth: true },
  }],
}];


const FeatureNameHeaderCell = ({ feature }) => (
  <th className="py-5 px-4 lg:px-6 text-sm font-normal text-gray-500 text-left" scope="row">
    {feature.name}
  </th>
);

const FeatureInTierIndicatorText = ({ text }) => (
  <span className="block text-sm text-gray-700 text-right lg:text-left">{text}</span>
);

const FeatureInTierIndicatorIcon = ({ featureTier, tier }) => (
  <>
    {featureTier === true ? (
      <CheckIcon className="ml-auto lg:ml-0 h-5 w-5 text-green-500" aria-hidden="true" />
    ) : (
      <MinusIcon className="ml-auto lg:ml-0 h-5 w-5 text-gray-400" aria-hidden="true" />
    )}

    <span className="sr-only">
      {featureTier === true ? 'Included' : 'Not included'} in {tier.name}
    </span>
  </>
);

const FeatureTierIndicatorCell = ({ tier, featureTier}) => (
  <td className="py-5 pr-4 lg:px-6">
    {typeof featureTier === 'string' ? (
      <FeatureInTierIndicatorText text={featureTier} />
    ) : (
      <FeatureInTierIndicatorIcon featureTier={featureTier} tier={tier} />
    )}
  </td>
);

const FeatureRow = ({ feature, tier }) => (
  <tr key={feature.name} className="border-t border-gray-200">
    <FeatureNameHeaderCell feature={feature} />
    <FeatureTierIndicatorCell featureTier={feature.tiers[tier.name]} tier={tier} />
  </tr>
);

const SectionTable = ({ section, tier, tierIndex }) => (
  <table key={section.name} className="w-full">
    <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
      {section.name}
    </caption>

    <thead>
      <tr>
        <th className="sr-only" scope="col">
          Feature
        </th>
        <th className="sr-only" scope="col">
          Included
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {section.features.map((feature) => (
        <FeatureRow
          feature={feature}
          key={`${tierIndex}-${feature.name}`}
          tier={tier}
        />
      ))}
    </tbody>
  </table>
);

const LargeFeatureRow = ({ feature }) => (
  <tr>
    <FeatureNameHeaderCell feature={feature} />

    <FeatureTierIndicatorCell
      featureTier={feature.tiers[TIERS.teams.name]}
      tier={TIERS.teams}
    />

    <FeatureTierIndicatorCell
      featureTier={feature.tiers[TIERS.growth.name]}
      tier={TIERS.growth}
    />
  </tr>
);

const LargeTierHeaderCell = ({ tier }) => (
  <th
    key={tier.name}
    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
    scope="col"
  >
    {tier.name}
  </th>
);

const LargeTierCta = ({ tier }) => (
  <td className="h-full py-8 px-6 align-top">
    <div className="relative h-full table">
      <TextLink color="primary" to={tier.ctaLinkTo}>
        {tier.ctaLabel}
      </TextLink>
    </div>
  </td>
);

const LargeSectionHeaderRow = ({ section }) => (
  <tr>
    <th
      className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
      colSpan={4}
      scope="colgroup"
    >
      {section.name}
    </th>
  </tr>
);

const FeatureComparisonTable = () => {
  return (
    <>
      {/* xs to lg */}
      <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
        <section>
          <div className="px-4 mb-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">{TIERS.teams.name}</h2>
          </div>

          {sections.map((section) => (
            <SectionTable section={section} key={section.name} tier={TIERS.teams} tierIndex={0} />
          ))}
        </section>

        <section>
          <div className="px-4 mb-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">{TIERS.growth.name}</h2>
          </div>

          {sections.map((section) => (
            <SectionTable section={section} key={section.name} tier={TIERS.growth} tierIndex={1} />
          ))}
        </section>
      </div>

      {/* lg+ */}
      <div className="hidden lg:block">
        <table className="w-full h-px">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th className="pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                <span className="sr-only">Feature by</span>
                <span>Plans</span>
              </th>
              <LargeTierHeaderCell tier={TIERS.teams} />
              <LargeTierHeaderCell tier={TIERS.growth}  />
            </tr>
          </thead>

          <tbody className="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top" scope="row">
                Get started
              </th>

              <LargeTierCta tier={TIERS.teams} />
              <LargeTierCta tier={TIERS.growth} />
            </tr>

            {sections.map((section) => (
              <Fragment key={section.name}>
                <LargeSectionHeaderRow section={section} />
                {section.features.map((feature) => (
                  <LargeFeatureRow feature={feature} key={feature.name} />
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default FeatureComparisonTable;
