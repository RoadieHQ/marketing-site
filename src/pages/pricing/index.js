import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter } from 'components';
import { EnterprisePricingTier, ProPricingTier, SectionHeader } from 'components/pricing';

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
          <ProPricingTier />
          <EnterprisePricingTier />
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
