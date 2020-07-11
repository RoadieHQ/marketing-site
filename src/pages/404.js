import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import StickyFooter from 'components/layouts/StickyFooter';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`404: Not Found | ${siteTitle}`} />
      <StickyFooter location={location}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </StickyFooter>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
