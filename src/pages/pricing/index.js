import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter } from 'components';
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

      <section className='Section size-3'>
        <div className="Container">
          <SectionHeader />

          <div className="Grid columns-1 bp2-columns-2 bp3-columns-4 gap-5 bp2-gap-9 bp3-gap-0 mb-7 lg:-mt-32">
            <div className="bp3-gc-3">
              <CurrencySwitcher
                setCurrency={setCurrency}
                currentlySetCurrency={currentlySetCurrency}
              />
            </div>
          </div>

          <div className="Grid columns-1 bp2-columns-2 bp3-columns-4 gap-5 bp2-gap-9 bp3-gap-0">
            <TeamsPricingTier currentlySetCurrency={currentlySetCurrency} />
            <GrowthPricingTier />
          </div>

          <FeatureComparisonTable />
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <FAQs />

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className='Section size-3'>
        <div className='Container'>
          <div className='Flex column bp2-row jc-between'>
            <span className='Text size-7 mb-7 bp2-mb-0'>Simpler, safer, and more powerful Backstage.</span>
            <a className='Button size-3 accent' href="#">Request a Demo</a>
          </div>
        </div>
      </section>


      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
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
