import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  ContentHeader,
  TailwindHeadContent,
  SitewideHeader,
  SitewideFooter,
} from 'components/tailwind';
import { TableOfContentsSidebar } from 'components/tailwind/Sidebar';
import { Sidebar } from 'components/tailwind/legal-notice';

const LegalNotice = ({ data: { notice, site } }) => (
  <>
    <SEO
      title={`${notice.frontmatter.title} | ${site.siteMetadata.title}`}
      description={notice.frontmatter.description}
    />
    <TailwindHeadContent />

    <SitewideHeader maxWidth="full" />

    <main className="md:flex pt-4 md:pt-0">
      <Sidebar />

      <article className="px-2 md:px-6 md:pt-7 md:flex-1">
        <div className="mb-8">
          <ContentHeader frontmatter={notice.frontmatter} dateKey="lastUpdated" />
        </div>

        <section
          className="prose prose-indigo"
          dangerouslySetInnerHTML={{ __html: notice.html }}
        />
      </article>

      <TableOfContentsSidebar headings={notice.headings} />
    </main>

    <SitewideFooter maxWidth="full" />
  </>
);

export default LegalNotice;

export const pageQuery = graphql`
  query TailwindLegalNoticeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }

    notice: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      headings(depth: h3) {
        id
        value
      }
      frontmatter {
        description
        title
        lastUpdated
      }
    }
  }
`;
