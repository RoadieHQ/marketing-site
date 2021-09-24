import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  InterstitialTitle,
  StickyFooter,
  ResponsiveSpacer,
  PageMargins,
} from 'components';
// eslint-disable-next-line import/named
import { Hero, FooterCTA, features, IntegrationsList } from 'components/home';

const SEO_TITLE = 'Backstage Developer Portal';
const HEADLINE = 'Ship faster with a powerful developer portal';
const LEAD = `
Get quick and easy access to Backstage, the OSS developer portal
which has powered Spotify's 3,000 microservices for 4+ years.
`;

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />
      <StickyFooter location={location}>
        <PageMargins>
          <ResponsiveSpacer>
            <Hero siteMetadata={data.site.siteMetadata} headline={HEADLINE} lead={LEAD} />
          </ResponsiveSpacer>

          <ResponsiveSpacer>
            <InterstitialTitle
              id="product"
              size="large"
            >
              Backstage with benefits...
            </InterstitialTitle>
          </ResponsiveSpacer>

          {features.quickEasySetup}
          {features.customPlugins}
          {features.securityMaintenance}

          <ResponsiveSpacer>
            <InterstitialTitle
              id="integrations"
              size="large"
            >
              Pre-loaded with all your favorite plugins
            </InterstitialTitle>
          </ResponsiveSpacer>

          <ResponsiveSpacer>
            <IntegrationsList />
          </ResponsiveSpacer>


          <ResponsiveSpacer>
            <InterstitialTitle
              id="solutions"
              size="large"
            >
              Turn tribal knowledge into shared context
            </InterstitialTitle>
          </ResponsiveSpacer>

          {features.builtOnBackstage}
          {features.discoverabilityAndOnboarding}
          {features.productionConsistency}

          <ResponsiveSpacer>
            <InterstitialTitle size="large" text="Sounds good? Let's get started..." />
          </ResponsiveSpacer>


          <ResponsiveSpacer>
            <FooterCTA />
          </ResponsiveSpacer>
        </PageMargins>
      </StickyFooter>
    </>
  );
};

export default Home;

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
