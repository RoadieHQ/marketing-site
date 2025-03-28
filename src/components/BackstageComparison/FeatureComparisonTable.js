import React, { Fragment } from 'react';
import { CheckIcon, MinusIcon } from '@heroicons/react/solid';
import { TextLink } from 'components';

import COMPETITORS from './competitors';

const sections = [
  {
    name: 'Software catalog',
    features: [
      {
        name: 'Bring your own data model',
        competitor: { Roadie: 'Yes', 'Roadie Local': 'Yes', Backstage: 'Yes, with some effort' },
      },
      {
        name: 'Adding and updating Catalog items via YAML',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
      {
        name: 'Updating Catalog items in the UI',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
      {
        name: 'Adding and updating Catalog items via API',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
      {
        name: 'Out of the box data ingestion (k8s, GitHub, CI/CD, etc)',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
      {
        name: 'SCM Support',
        competitor: {
          Roadie:
            'GitHub Cloud, GitHub Enterprise Server, Azure DevOps, GCP, GitLab Cloud, GitLab On-Prem, BitBucket Cloud, BitBucket Server',
          'Roadie Local':
            'GitHub Cloud, GitHub Enterprise Server, Azure DevOps, GCP, GitLab Cloud, GitLab On-Prem, BitBucket Cloud, BitBucket Server',
          Backstage:
            'GitHub Cloud, GitHub Enterprise Server, Azure DevOps, GCP, GitLab Cloud, GitLab On-Prem, BitBucket Cloud, BitBucket Server, Gerrit',
        },
      },
      {
        name: 'Syncing repositories as items in the Catalog',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
    ],
  },
  {
    name: 'Scorecards',
    features: [
      {
        name: 'Extensible through the creation of custom data sources in the UI',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
      {
        name: 'Operational reviews',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
      {
        name: 'Levels',
        competitor: { Roadie: 'Coming soon', 'Roadie Local': 'Coming soon', Backstage: false },
      },
      {
        name: 'Campaigns',
        competitor: { Roadie: 'Coming soon', 'Roadie Local': 'Coming soon', Backstage: false },
      },
      {
        name: 'Team-based rollups',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
    ],
  },
  {
    name: 'Scaffolder',
    features: [
      {
        name: 'Self-serve actions',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
      {
        name: 'Custom self-serve actions',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
      {
        name: 'Custom field extensions',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
      {
        name: 'Fallback and retry',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
    ],
  },
  {
    name: 'TechDocs',
    features: [
      {
        name: 'Docs creation engine',
        competitor: { Roadie: 'TechDocs', 'Roadie Local': 'TechDocs', Backstage: 'TechDocs' },
      },
      {
        name: 'Extensibility via plugins',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
    ],
  },
  {
    name: 'Other plugins and extensions',
    features: [
      {
        name: 'Available Plugins',
        competitor: { Roadie: '70+', 'Roadie Local': '70+', Backstage: 'Requires build' },
      },
      {
        name: 'Secure access to on-prem infrastructure and resources',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
      {
        name: 'Theme customisation',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: 'Requires build' },
      },
      {
        name: 'Layout customisation',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: 'Requires build' },
      },
      {
        name: 'Catalog UI customisation',
        competitor: { Roadie: 'Yes', 'Roadie Local': true, Backstage: 'Requires build' },
      },
    ],
  },
  {
    name: 'Search',
    features: [
      {
        name: 'Engine',
        competitor: {
          Roadie: 'OpenSearch, pg_search',
          'Roadie Local': 'OpenSearch, pg_search',
          Backstage: 'Backstage search',
        },
      },
      {
        name: 'Additional search collators',
        competitor: {
          Roadie: 'Atlassian Confluence',
          'Roadie Local': 'Atlassian Confluence',
          Backstage: 'Atlassian Confluence',
        },
      },
    ],
  },
  {
    name: 'Users and Groups',
    features: [
      {
        name: 'SSO',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: 'Via OSS providers' },
      },
      {
        name: 'Entities created in the Catalog for each user and group',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: 'Via OSS providers' },
      },
    ],
  },
  {
    name: 'Role-based Access Control',
    features: [
      {
        name: 'Admin and non-Admin roles',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
      {
        name: 'Role assignment in the UI',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
      {
        name: 'Role assignment by identity provider token',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
      {
        name: 'Custom roles',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
      {
        name: 'Custom permissions policies',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: false },
      },
    ],
  },
  {
    name: 'Cost Insights (in beta)',
    features: [
      {
        name: 'Visualisation of cost data',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
      {
        name: 'Out of the box data ingestion',
        competitor: { Roadie: 'AWS, GCP', 'Roadie Local': 'AWS, GCP', Backstage: false },
      },
      {
        name: 'Attribution back to catalog components (inc. users and groups)',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: true },
      },
    ],
  },
  {
    name: 'Non-feature extras',
    features: [
      {
        name: 'Hosting',
        competitor: { Roadie: true, 'Roadie Local': false, Backstage: false },
      },
      {
        name: 'Upgrades to the latest version of Backstage',
        competitor: { Roadie: true, 'Roadie Local': true, Backstage: 'Requires build' },
      },
      {
        name: 'Analytics',
        competitor: { Roadie: true, 'Roadie Local': false, Backstage: false },
      },
      {
        name: 'Support',
        competitor: {
          Roadie: 'Email, Slack/Teams, and 24/7 On-call',
          'Roadie Local': 'Email, Slack/Teams, and 24/7 On-call (optional)',
          Backstage: 'via the OSS community',
        },
      },
      {
        name: 'Uptime guarantee',
        competitor: { Roadie: true, 'Roadie Local': false, Backstage: false },
      },
    ],
  },
];

const FeatureNameHeaderCell = ({ feature }) => (
  <th className="py-5 px-4 lg:px-6 text-sm font-normal text-gray-500 text-left" scope="row">
    {feature.name}
  </th>
);

const FeatureInCompetitorIndicatorText = ({ text }) => (
  <span className="block text-sm text-gray-700 text-right bold lg:text-left">{text}</span>
);

const FeatureInCompetitorIndicatorIcon = ({ featureCompetitor, competitor }) => (
  <>
    {featureCompetitor === true ? (
      <CheckIcon className="ml-auto lg:ml-0 h-5 w-5 text-green-500" aria-hidden="true" />
    ) : (
      <MinusIcon className="ml-auto lg:ml-0 h-5 w-5 text-gray-400" aria-hidden="true" />
    )}

    <span className="sr-only">
      {featureCompetitor === true ? 'Included' : 'Not included'} in {competitor.name}
    </span>
  </>
);

const FeatureCompetitorIndicatorCell = ({ competitor, featureCompetitor }) => (
  <td className="py-5 pr-4 lg:px-6">
    {typeof featureCompetitor === 'string' ? (
      <FeatureInCompetitorIndicatorText text={featureCompetitor} />
    ) : (
      <FeatureInCompetitorIndicatorIcon
        featureCompetitor={featureCompetitor}
        competitor={competitor}
      />
    )}
  </td>
);

const FeatureRow = ({ feature, competitor }) => (
  <tr key={feature.name} className="border-t border-gray-200">
    <FeatureNameHeaderCell feature={feature} />
    <FeatureCompetitorIndicatorCell
      featureCompetitor={feature.competitor[competitor.name]}
      competitor={competitor}
    />
  </tr>
);

const SectionTable = ({ section, competitor, competitorIndex }) => (
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
          key={`${competitorIndex}-${feature.name}`}
          competitor={competitor}
        />
      ))}
    </tbody>
  </table>
);

const LargeFeatureRow = ({ feature }) => (
  <tr>
    <FeatureNameHeaderCell feature={feature} />

    <FeatureCompetitorIndicatorCell
      featureCompetitor={feature.competitor[COMPETITORS.roadie_saas.name]}
      competitor={COMPETITORS.roadie_saas}
    />
    <FeatureCompetitorIndicatorCell
      featureCompetitor={feature.competitor[COMPETITORS.roadie_local.name]}
      competitor={COMPETITORS.roadie_local}
    />
    <FeatureCompetitorIndicatorCell
      featureCompetitor={feature.competitor[COMPETITORS.backstage.name]}
      competitor={COMPETITORS.backstage}
    />
  </tr>
);

const LargeCompetitorHeaderCell = ({ competitor }) => (
  <th
    key={competitor.name}
    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
    scope="col"
  >
    {competitor.name}
  </th>
);

const LargeCompetitorCta = ({ competitor }) => (
  <td className="h-full py-8 px-6 align-top">
    <div className="relative h-full table">
      <TextLink color="primary" to={competitor.ctaLinkTo}>
        {competitor.ctaLabel}
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
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              {COMPETITORS.roadie_saas.name}
            </h2>
          </div>

          {sections.map((section) => (
            <SectionTable
              section={section}
              key={section.name}
              competitor={COMPETITORS.roadie_saas}
              competitorIndex={0}
            />
          ))}
        </section>

        <section>
          <div className="px-4 mb-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              {COMPETITORS.roadie_local.name}
            </h2>
          </div>

          {sections.map((section) => (
            <SectionTable
              section={section}
              key={section.name}
              competitor={COMPETITORS.roadie_local}
              competitorIndex={1}
            />
          ))}
        </section>

        <section>
          <div className="px-4 mb-8">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              {COMPETITORS.backstage.name}
            </h2>
          </div>

          {sections.map((section) => (
            <SectionTable
              section={section}
              key={section.name}
              competitor={COMPETITORS.backstage}
              competitorIndex={2}
            />
          ))}
        </section>
      </div>

      {/* lg+ */}
      <div className="hidden lg:block">
        <table className="w-full h-px">
          <caption className="sr-only">Comparison</caption>
          <thead>
            <tr>
              <th className="pb-4 px-6 text-sm font-medium text-gray-900 text-left" scope="col">
                <span className="sr-only">Feature by</span>
              </th>
              <LargeCompetitorHeaderCell competitor={COMPETITORS.roadie_saas} />
              <LargeCompetitorHeaderCell competitor={COMPETITORS.roadie_local} />
              <LargeCompetitorHeaderCell competitor={COMPETITORS.backstage} />
            </tr>
          </thead>

          <tbody className="border-t border-gray-200 divide-y divide-gray-200">
            <tr>
              <th
                className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                scope="row"
              >
                Get started
              </th>

              <LargeCompetitorCta competitor={COMPETITORS.roadie_saas} />
              <LargeCompetitorCta competitor={COMPETITORS.roadie_local} />
              <LargeCompetitorCta competitor={COMPETITORS.backstage} />
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
  );
};

export default FeatureComparisonTable;
