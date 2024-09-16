import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideHeader, SitewideFooter, Headline, Link } from 'components';
import { SectionHeader, FeatureComparisonTable } from 'components/BackstageComparison';
import { FAQs } from 'components/landing';
import RoadieBackstageLogos from '../../../content/assets/roadie-backstage-logos.svg';

const Comparison = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
}) => {
  return (
    <>
      <SEO
        title={`Roadie vs Backstage | ${siteTitle}`}
        description="Hosted Backstage from Roadie vs self-hosting open source Backstage. Which IDP fits your needs?"
      />

      <SitewideHeader borderBottom={false} />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <SectionHeader />
          </div>
        </div>
        <div className="flex justify-center pb-12">
          <img src={RoadieBackstageLogos} alt="" className="webkit-optimize-image-rendering" />
        </div>
        <div className="flex justify-center">
          <div className="flex-column text-center max-w-2xl mt-5 mx-auto sm:px-6 lg:px-8">
            <Headline el="h2" size="small">
              Overview
            </Headline>
            <h2 className="text-lg sm:mt-8 lg:text-xl xl:text-xl">
              <Link to="https://backstage.io/" color="primary">
                Backstage
              </Link>{' '}
              is the best tool on the market for building Internal Developer Portals (IDPs).
              However, it requires significant investment to take the raw building blocks that
              Backstage offers and turn them into a true Internal Developer Portal.
            </h2>
            <h2 className="text-lg sm:mt-8 lg:text-xl xl:text-xl">
              With Roadie, we have taken the open-source version of Backstage and used it to build a
              comprehensive and maintenance-free IDP.
            </h2>
          </div>
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

export default Comparison;

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
