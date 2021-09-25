import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from 'components';
import SimpleCentered from 'components/tailwind/hero/SimpleCentered';
import AlternativeSideBySide from 'components/tailwind/features/AlternativeSideBySide';
import SplitGridOnRight from 'components/tailwind/logo-clouds/SplitGridOnRight';
import SimpleCenteredCTA from 'components/tailwind/ctas/SimpleCentered';

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

      <SimpleCentered />
      <AlternativeSideBySide />
      <SplitGridOnRight />
      <SimpleCenteredCTA />
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
