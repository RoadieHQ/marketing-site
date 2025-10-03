import React from 'react';
import { graphql } from 'gatsby';

import { SEO, ContentHeader, SitewideHeader, SitewideFooter } from 'components';

const SecurityResponsibleDisclosure = ({ data: { site, page } }) => {
  const siteTitle = site.siteMetadata.title;

  return (
    <>
      <SEO title={`${page.title} | ${siteTitle}`} description={page.seoDescription} />

      <SitewideHeader />

      <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
        <article className="relative max-w-lg mx-auto lg:max-w-2xl mb-24">
          <div className="mb-8">
            <ContentHeader frontmatter={{ title: page.title, date: page.date }} />
          </div>

          <section
            className="prose prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }}
          />
        </article>
      </main>

      <SitewideFooter />
    </>
  );
};

export default SecurityResponsibleDisclosure;

export const pageQuery = graphql`
  query SecurityResponsibleDisclosure {
    site {
      siteMetadata {
        title
      }
    }

    page: contentfulMarkdownPage(slug: { eq: "/security/responsible-disclosure/" }) {
      date
      title
      seoDescription
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
