import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter, Headline } from 'components';
import {
  GrowthPricingTier,
  TeamsPricingTier,
  SectionHeader,
  FeatureComparisonTable,
  CurrencySwitcher,
} from 'components/pricing';
import { FAQs } from 'components/landing';

const Pricing = ({
  data: {
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    },
  },
}) => {
  const [currentlySetCurrency, setCurrency] = useState('USD');

  return (
    <>
      <SEO
        title={`Pricing | ${siteTitle}`}
        description="Hosted Backstage solution pricing from Roadie. Simple, flexible pricing options to fit your Backstage needs. Free Trial."
      />

      <SitewideHeader />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <SectionHeader />

            <CurrencySwitcher
              setCurrency={setCurrency}
              currentlySetCurrency={currentlySetCurrency}
            />
          </div>

          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
            <TeamsPricingTier currentlySetCurrency={currentlySetCurrency} />
            <GrowthPricingTier />
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Headline el="h2" size="small">Feature comparison</Headline>
          </div>
          <FeatureComparisonTable />
        </div>
      </div>

      <FAQs/>

      <SitewideFooter />
    </>
  );
};

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
