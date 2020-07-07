import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Hero from './home/Hero';
import SitewideHeader from './home/SitewideHeader';

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`Hosted, managed, enterprise Backstage | ${siteTitle}`} />
      <SitewideHeader />
      <Hero />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
