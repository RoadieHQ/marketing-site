import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  TextLink as Link,
  ContentHeader,
  SitewideHeader,
  SitewideFooter,
  TailwindHeadContent,
} from 'components';
import { TableOfContentsSidebar } from 'components/Sidebar';
import { Sidebar } from 'components/doc';
import editOnGitHubUrl from '../editOnGitHubUrl';

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
    <TailwindHeadContent />

    <SitewideHeader maxWidth="full" />

    <main className="md:flex pt-4 md:pt-0">
      <Sidebar />

      <article className="px-2 md:px-6 md:pt-7 md:flex-1">
        <div className="mb-8">
          <ContentHeader frontmatter={doc.frontmatter} dateKey="lastUpdated" />
        </div>

        <section
          className="prose prose-primary"
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
