import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO } from 'components';
import {
  PurchaseGrowthTier,
  PurchaseTeamsTier,
  SectionHeader,
  CurrencySwitcher,
} from 'components/pricing';
import { FAQs } from 'components/landing';

const Purchase = ({
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
        title={`Purchase | ${siteTitle}`}
        description="Hosted Backstage solution pricing from Roadie. Simple, flexible pricing options to fit your Backstage needs. Buy now."
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <SectionHeader headline="Purchase Roadie" />
            <CurrencySwitcher
              setCurrency={setCurrency}
              currentlySetCurrency={currentlySetCurrency}
            />
          </div>

          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
            <PurchaseTeamsTier currentlySetCurrency={currentlySetCurrency} />
            <PurchaseGrowthTier />
          </div>
        </div>
      </div>

      <FAQs/>
    </>
  );
};

export default Purchase;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
