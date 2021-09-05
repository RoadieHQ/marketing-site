import React from 'react';
import { graphql } from 'gatsby';

import { SEO, StickyFooter, PageMargins } from 'components';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`404: Not Found | ${siteTitle}`} />
      <StickyFooter location={location}>
        <PageMargins>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </PageMargins>
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
