import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter, Headline } from 'components';
import {
  GrowthPricingTier,
  TeamsPricingTier,
  SectionHeader,
  FeatureComparisonTable,
  CurrencySwitcher,
  HostingSwitcher,
  HostingWrapper,
} from 'components/pricing';
import { FAQs } from 'components/landing';

const Pricing = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
}) => {
  const [currentlySetCurrency, setCurrency] = useState('USD');
  const [currentlySetHosting, setHosting] = useState('SaaS');

  return (
    <>
      <SEO
        title={`Pricing | ${siteTitle}`}
        description="Hosted & self-hosted Backstage solution pricing from Roadie. Simple, flexible pricing options to fit your Backstage needs. Free Trial."
      />

      <SitewideHeader borderBottom={false} />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <SectionHeader />
            <div className="sm:flex sm:flex gap-12 sm:align-center mx-auto">
              <CurrencySwitcher
                setCurrency={setCurrency}
                currentlySetCurrency={currentlySetCurrency}
              />

              <HostingSwitcher setHosting={setHosting} currentlySetHosting={currentlySetHosting} />
            </div>
          </div>
      
            <HostingWrapper
              currentlySetHosting={currentlySetHosting}
              currentlySetCurrency={currentlySetCurrency}
            />
        </div>

        <div className="max-w-4xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Headline el="h2" size="small">
              Feature comparison
            </Headline>
          </div>
          <FeatureComparisonTable />
        </div>
      </div>

      <FAQs />

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
          linkedin
        }
      }
    }
  }
`;
