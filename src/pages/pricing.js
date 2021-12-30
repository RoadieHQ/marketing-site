import React from 'react';
import { graphql } from 'gatsby';
import { CheckIcon } from '@heroicons/react/solid'
import { Button, SEO, SitewideHeader, SitewideFooter } from 'components';

const TierIncludedFeature = ({ feature, hasIcon = true }) => {
  return (
    <li className="flex space-x-3">
      {hasIcon && (
        <CheckIcon className="flex-shrink-0 h-5 w-5 text-gray-600" aria-hidden="true" />
      )}
      <span className="text-sm text-gray-600">{feature}</span>
    </li>
  );
};

const TierName = ({ name }) => (
  <h2 className="text-lg leading-6 font-medium text-gray-900">{name}</h2>
);

const TierDescription = ({ description }) => (
  <p className="mt-4 text-sm text-gray-500">{description}</p>
);

const TierPrice = ({ price, cadence }) => (
  <p className="mt-8">
    <span className="text-4xl font-extrabold text-gray-900">{price}</span>
    {cadence && (
      <span className="text-base font-medium text-gray-500">{cadence}</span>
    )}
  </p>
);

const TierLimitations = ({ limitations }) => (
  <div className="pt-6 pb-8 px-6">
    <ul className="mt-6 space-y-4">
      {limitations.map((limitation) => (
        <TierIncludedFeature feature={limitation} key={limitation} hasIcon={false} />
      ))}
    </ul>
  </div>
);


const TierIncludedFeatures = ({ heading, includedFeatures }) => (
  <div className="pt-6 pb-8 px-6">
    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">{heading}</h3>
    <ul className="mt-6 space-y-4">
      {includedFeatures.map((feature) => (
        <TierIncludedFeature feature={feature} key={feature} />
      ))}
    </ul>
  </div>
);

const PricingTier = ({ children }) => (
  <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
    {children}
  </div>
);

const SectionHeader = () => (
  <div className="sm:flex sm:flex-col sm:align-center">
    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
    <p className="mt-5 text-xl text-gray-500 sm:text-center">
      Start building for free, then add a site plan to go live. Account plans unlock additional features.
    </p>
  </div>
);

const Pricing = ({
  data: {
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    },
  },
}) => (
  <>
    <SEO
      title={`Pricing | ${siteTitle}`}
      description="Roadie is FREE for teams."
    />

    <SitewideHeader />

    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          <PricingTier>
            <div className="p-6">
              <TierName name="Team" />
              <TierDescription description="All the basics for starting a new business" />
              <TierPrice price="FREE" />

              <div className="mt-8">
                <Button
                  link={true}
                  color="primary"
                  text="Sign Up, It's Free"
                  to="/"
                />
              </div>
            </div>

            <TierLimitations
              limitations={[
                'Up to 3 software components tracked.',
                'Up to 2 scaffolder templates.',
                'Up to 3 API specs.',
                'Unlimited TechDocs',
                'Unlimited Users',
              ]}
            />

            <TierIncludedFeatures
              heading="Key Features"
              includedFeatures={[
                'Backstage software catalog',
                'TechDocs technical documentation',
                'Locations log',
                'Scaffolder software templating'
              ]}
            />
          </PricingTier>

          <PricingTier>
            <div className="p-6">
              <TierName name="Org" />
              <TierDescription description="All the basics for starting a new business" />

              <TierPrice price="$16" cadence="/user/month" />

              <div className="mt-8">
                <Button
                  link={true}
                  color="primary"
                  text="Start a free 14-Day Trial"
                  to="/"
                />
              </div>
            </div>

            <TierLimitations
              limitations={[
                '50 software components tracked.',
                '6 scaffolder templates.',
                '50 API specs.',
                'Unlimited TechDocs',
                'Unlimited Users',
              ]}
            />

            <TierIncludedFeatures
              heading="Everything in Team, plus..."
              includedFeatures={[
                'Kubernetes plugin',
                'Bring your own private plugins',
                'Slack and email Support',
                'Single sign on',
                'API access',
                'Risus cursus ullamcorper.',
              ]}
            />
          </PricingTier>
        </div>
      </div>
    </div>

    <SitewideFooter />
  </>
);

export default Pricing;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;
