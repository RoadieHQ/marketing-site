import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { SEO, SitewideHeader, SitewideFooter, Headline } from 'components';
import {
  GrowthPricingTier,
  PurchaseTeamsTier,
  SectionHeader,
  FeatureComparisonTable,
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
}) => (
  <>
    <SEO
      title={`Pricing | ${siteTitle}`}
      description="Hosted Backstage solution pricing from Roadie. Simple, flexible pricing options to fit your Backstage needs. Free Trial."
    />
    <Helmet>
      <script src="https://js.chargebee.com/v2/chargebee.js" data-cb-site="roadie-test" />
    </Helmet>

    <SitewideHeader />

    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          <PurchaseTeamsTier />
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
