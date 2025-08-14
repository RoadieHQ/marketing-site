import React, { Fragment } from 'react';
import CheckIcon from '@heroicons/react/solid/CheckIcon';
import MinusIcon from '@heroicons/react/solid/MinusIcon';
import PlusIcon from '@heroicons/react/solid/PlusIcon';
import { TextLink } from 'components';
import isString from 'lodash/isString';

import { TIERS } from './tiers';

const sections = [{
  name: 'Scale',
  features: [{
    name: 'Minimum seats',
    tiers: TIERS.reduce((collection, tier) => ({
      [tier.name]: tier.minSeats.toString(),
      ...collection,
    }), {}),
  }],

}, {
  name: 'Catalog',
  features: [{
    name: 'Software components',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'API Specs',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'TechDocs technical documentation',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Self-service automation templates',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Infrastructure',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Teams & Users',
    tiers: { Teams: true, Growth: true, },
  }],

}, {
  name: 'Features',
  features: [{
    name: 'Automatic Backstage upgrades',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Open-source Backstage plugins',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Scorecards',
    tiers: { Teams: 'plus', Growth: 'plus', },
  }, {
    name: 'RAG AI & MCP Server Access (beta)',
    tiers: { Growth: true, },
  }, {
    name: 'REST API access',
    tiers: { Growth: true, },
  }, {
    name: 'Search Engine',
    tiers: { Teams: 'PostgreSQL', Growth: 'OpenSearch', }
  }],

}, {
  name: 'Support',
  features: [{
    name: 'In-app chat',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Slack & MS Teams support',
    tiers: { Growth: true, },
  }, {
    name: 'SLA',
    tiers: { Growth: true, },
  }, {
    name: 'Usage analytics dashboard',
    tiers: { Growth: true, },
  }],

}, {
  name: 'Security & Authorization',
  features: [{
    name: 'Single Sign-On',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Custom RBAC',
    tiers: { Teams: false, Growth: true, },
  }],

}, {
  name: 'Customization',
  features: [{
    name: 'Customizable theme',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Customizable catalog',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Customizable navigation',
    tiers: { Teams: true, Growth: true, },
  }, {
    name: 'Multiple tenants',
    tiers: { Teams: 'plus', Growth: 'plus', },
  }, {
    name: 'Custom, private Backstage plugins',
    tiers: { Growth: true, },
  }],

}, {
  name: 'Connect to on-prem infra',
  features: [{
    name: 'Secure on-prem connection',
    tiers: { Growth: true, },
  }],
}];

console.log(sections);

const FeatureNameHeaderCell = ({ feature }) => (
  <th className="py-5 px-4 lg:px-6 text-sm font-normal text-gray-500 text-left" scope="row">
    {feature.name}
  </th>
);

const FeatureTierIndicatorCell = ({ tier, featureTier}) => {
  let inner;

  if (featureTier === true) {
    inner = (
      <>
        <span title={`Included in ${tier.name}`}>
          <CheckIcon className="ml-auto lg:ml-0 h-5 w-5 text-green-500" aria-hidden="true" />
        </span>
        <span className="sr-only">Included in {tier.name}</span>
      </>
    );
  } else if (isString(featureTier) && featureTier.toLowerCase() === 'plus') {
    inner = (
      <>
        <span title={`Available as optional paid extra in ${tier.name}`}>
          <PlusIcon className="ml-auto lg:ml-0 h-5 w-5 text-green-500" aria-hidden="true" />
        </span>
        <span className="sr-only">Avalable as optional paid extra in {tier.name}</span>
      </>
    );
  } else if (isString(featureTier)) {
    inner = <span className="block text-sm text-gray-700 text-right lg:text-left">{featureTier}</span>;
  } else {
    inner = (
      <>
        <span title={`Not available in ${tier.name}`}>
          <MinusIcon className="ml-auto lg:ml-0 h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        <span className="sr-only">Not available in {tier.name}</span>
      </>
    );
  }

  return (
    <td className="py-5 pr-4 lg:px-6">
      {inner}
    </td>
  );
};

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

    {TIERS.map((tier) => (
      <FeatureTierIndicatorCell
        key={tier.name}
        featureTier={feature.tiers[tier.name]}
        tier={tier}
      />
    ))}
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
        {TIERS.map((tier) => (
          <section key={tier.name}>
            <div className="px-4 mb-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
            </div>

            {sections.map((section) => (
              <SectionTable section={section} key={section.name} tier={tier} tierIndex={0} />
            ))}
          </section>
        ))}
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
              {TIERS.map((tier) => (
                <LargeTierHeaderCell tier={tier} key={tier.name} />
              ))}
            </tr>
          </thead>

          <tbody className="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top" scope="row">
                Get started
              </th>

              {TIERS.map((tier) => (
                <LargeTierCta tier={tier} key={tier.name} />
              ))}
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
