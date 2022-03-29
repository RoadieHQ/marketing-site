import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter } from 'components';

import DocsHeader from 'components/SitewideHeader/DocsHeader';

const Doc = ({
  data: {
    site: { siteMetadata },
  },
  location,
}) => (
  <>
    <SEO
      title={`Docs | ${siteMetadata.title}`}
      description="Learn how to use Roadie"
    />
    <DocsHeader location={location} />

    <main className="md:flex pt-4 md:pt-0">
      <article className="px-2 md:px-6 md:pt-7 md:flex-1">
        <p>Docs</p>
      </article>
    </main>

    <SitewideFooter maxWidth="full" />
  </>
);

export default Doc;

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
