import React from 'react';
import { graphql } from 'gatsby';
import { Seo, ContentHeader, SitewideHeader, SitewideFooter } from 'components';
import { NestedTableOfContentsSidebar } from 'components/Sidebar';
import { Sidebar } from 'components/legal-notice';

const LegalNotice = ({ data: { notice, site } }) => (
  <>
    <Seo
      title={`${notice.frontmatter.title} | ${site.siteMetadata.title}`}
      description={notice.frontmatter.description}
    />

    <SitewideHeader maxWidth="full" />

    <main className="md:flex pt-4 md:pt-0">
      <Sidebar />

      <article className="px-2 md:px-6 md:pt-7 md:flex-1">
        <div className="mb-8">
          <ContentHeader frontmatter={notice.frontmatter} dateKey="lastUpdated" />
        </div>

        <section
          className="prose prose-primary"
          dangerouslySetInnerHTML={{ __html: notice.html }}
        />
      </article>

      <NestedTableOfContentsSidebar tableOfContents={notice.tableOfContents} />
    </main>

    <SitewideFooter maxWidth="full" />
  </>
);

export default LegalNotice;

export const pageQuery = graphql`
  query LegalNoticeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
        }
      }
    }

    notice: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html

      tableOfContents(absolute: false, pathToSlugField: "frontmatter.title", maxDepth: 3)

      frontmatter {
        description
        title
        lastUpdated
      }
    }
  }
`;
