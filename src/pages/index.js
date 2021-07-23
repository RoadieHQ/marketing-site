import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  InterstitialTitle,
  StickyFooter,
  ResponsiveSpacer,
} from 'components';
// eslint-disable-next-line import/named
import { Hero, FooterCTA, features } from 'components/home';

const SEO_TITLE = 'SaaS Backstage hosting';
const HEADLINE = 'Backstage for growing engineering teams';
const LEAD = `
Roadie's SaaS platform handles hosting and upgrades and ensures
you always have access to the latest Backstage features.
`;

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />
      <StickyFooter location={location}>
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
