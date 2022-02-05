import React from 'react';
import { graphql } from 'gatsby';

import { SEO, ContentHeader, SitewideHeader, SitewideFooter } from 'components';

const BackstageUltimateGuide = ({ data: { page, site } }) => {
  const siteTitle = site.siteMetadata.title;

  return (
    <>
      <SEO
        title={`${page.frontmatter.title} | ${siteTitle}`}
        description={page.frontmatter.description || page.excerpt}
      />

      <SitewideHeader />

      <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
        <article className="relative max-w-lg mx-auto lg:max-w-2xl mb-24">
          <div className="mb-8">
            <ContentHeader frontmatter={page.frontmatter} />
          </div>

          <section
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </article>
      </main>

      <SitewideFooter />
    </>
  );
};

export default BackstageUltimateGuide;

export const pageQuery = graphql`
  query BackstageUltimateGuide {
    site {
      siteMetadata {
        title
      }
    }

    page: markdownRemark(fields: { slug: { eq: "/backstage/ultimate-guide/" } }) {
      id
      excerpt(pruneLength: 160)
      html

      frontmatter {
        title
        date
        description
      }
    }
  }
`;
