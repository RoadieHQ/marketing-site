import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from 'components';
import SimpleCentered from 'components/tailwind/hero/SimpleCentered';
import AlternativeSideBySide from 'components/tailwind/features/AlternativeSideBySide';
import SplitGridOnRight from 'components/tailwind/logo-clouds/SplitGridOnRight';
import FooterCTA from 'components/tailwind/home/FooterCTA';
import TailwindHeadContent from 'components/tailwind/HeadContent';

const SEO_TITLE = 'SaaS Backstage hosting';
const LEAD = `
Roadie's SaaS platform handles hosting and upgrades and ensures
you always have access to the latest Backstage features.
`;

const Home = ({ data,}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />
      <TailwindHeadContent />

      <SimpleCentered />
      <AlternativeSideBySide />
      <SplitGridOnRight />
      <FooterCTA />
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
