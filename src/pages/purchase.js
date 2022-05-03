import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter } from 'components';
import { PurchaseGrowthTier, PurchaseTeamsTier, SectionHeader } from 'components/pricing';
import { FAQs } from 'components/landing';

const Purchase = ({
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
      title={`Purchase | ${siteTitle}`}
      description="Hosted Backstage solution pricing from Roadie. Simple, flexible pricing options to fit your Backstage needs. Buy now."
    />

    <SitewideHeader />

    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <SectionHeader headline="Purchase Roadie" />

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          <PurchaseTeamsTier />
          <PurchaseGrowthTier />
        </div>
      </div>
    </div>

    <FAQs/>

    <SitewideFooter />
  </>
);

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
