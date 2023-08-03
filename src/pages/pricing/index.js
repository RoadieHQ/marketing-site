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

      <SitewideHeader borderBottom={false} />

      <div className="Container">
        <div className="">
          <SectionHeader />

          <CurrencySwitcher
            setCurrency={setCurrency}
            currentlySetCurrency={currentlySetCurrency}
          />
        </div>

        <div className="Grid columns-2 gap-4">
          <TeamsPricingTier currentlySetCurrency={currentlySetCurrency} />
          <GrowthPricingTier />
        </div>

        <div className="">
          <h3 className='Text size-7'>Feature comparison</h3>
          <FeatureComparisonTable />
        </div>

        <FAQs />
      </div>

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
