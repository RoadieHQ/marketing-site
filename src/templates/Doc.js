import React from 'react';
import { graphql } from 'gatsby';
import { SEO, TextLink, ContentHeader, SitewideFooter } from 'components';

import { TableOfContentsSidebar } from 'components/Sidebar';
import { Sidebar } from 'components/doc';
import DocsHeader from 'components/SitewideHeader/DocsHeader';

import editOnGitHubUrl from '../editOnGitHubUrl';

const Doc = ({
  data: {
    doc,
    site: { siteMetadata },
  },
  location,
}) => (
  <>
    <SEO
      title={`${doc.frontmatter.title} | ${siteMetadata.title}`}
      description={doc.frontmatter.description}
    />
    <DocsHeader location={location} />

    <main className="md:flex pt-4 md:pt-0">
      <Sidebar location={location} />

      <article className="px-2 md:px-6 md:pt-7 md:flex-1">
        <div className="mb-8">
          <ContentHeader frontmatter={doc.frontmatter} dateKey="publishedDate" />
        </div>

        <section
          className="prose prose-primary"
          dangerouslySetInnerHTML={{ __html: doc.html }}
        />

        <footer className="border-t-2 border-gray-100 my-3 py-3">
          <TextLink
            to={editOnGitHubUrl({ siteMetadata, node: doc, nodeSourcePath: '/content/docs' })}
          >
            Edit this page on GitHub
          </TextLink>
        </footer>
      </article>

      <TableOfContentsSidebar headings={doc.headings} />
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
        publishedDate
      }
    }
  }
`;
