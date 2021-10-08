import React from 'react';
import { graphql } from 'gatsby';
import { SEO, TextLink as Link } from 'components';
import ContentHeader from 'components/tailwind/ContentHeader';
import { TableOfContentsSidebar } from 'components/tailwind/Sidebar';
import { Sidebar } from 'components/tailwind/doc';
import editOnGitHubUrl from '../../editOnGitHubUrl';
import SitewideHeader from 'components/tailwind/SitewideHeader';
import SitewideFooter from 'components/tailwind/SitewideFooter';
import HeadContent from 'components/tailwind/HeadContent';

const Doc = ({
  data: {
    doc,
    site: { siteMetadata },
  },
}) => (
  <>
    <SEO
      title={`${doc.frontmatter.title} | ${siteMetadata.title}`}
      description={doc.frontmatter.description}
    />
    <HeadContent />

    <SitewideHeader maxWidth="full" />

    <main className="md:flex">
      <Sidebar />

      <article className="px-2 md:px-6 md:pt-7 md:flex-1">
        <ContentHeader frontmatter={doc.frontmatter} dateKey="lastUpdated" />

        <section
          className="prose prose-indigo"
          dangerouslySetInnerHTML={{ __html: doc.html }}
        />

        <footer className="border-t-2 border-gray-100 my-3 py-3">
          <Link
            to={editOnGitHubUrl({ siteMetadata, node: doc, contentSourcePath: '/content/docs' })}
          >
            Edit this page on GitHub
          </Link>
        </footer>
      </article>

      <TableOfContentsSidebar headings={doc.headings} />
    </main>

    <SitewideFooter maxWidth="full" />
  </>
);

export default Doc;

export const pageQuery = graphql`
  query TailwindDocBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        sourceCodeUrl
        social {
          twitter
        }
      }
    }

    doc: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fileAbsolutePath
      headings(depth: h2) {
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
