import React from 'react';
import { graphql } from 'gatsby';
import { SEO, TextLink, ContentHeader, SitewideFooter } from 'components';

import { NestedTableOfContentsSidebar } from 'components/Sidebar/index';
import { Sidebar } from 'components/doc';
import DocsHeader from 'components/SitewideHeader/DocsHeader';

import editOnGitHubUrl from '../editOnGitHubUrl';

import isEmpty from 'lodash/isEmpty';

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
          
          {!isEmpty(doc.frontmatter.integrationType) && (
            <span class="rounded-md bg-orange-600 py-1 px-2 border border-transparent text-sm text-white transition-all shadow-sm">
              {doc.frontmatter.integrationType}
            </span>
          )}
        </div>

        <section
          className="prose prose-primary max-w-3xl"
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

      <NestedTableOfContentsSidebar tableOfContents={doc.tableOfContents} className='self-start sticky top-0' />
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
          linkedin
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
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.title"
        maxDepth: 5
      )
      frontmatter {
        description
        title
        publishedDate
        integrationType
      }
    }
  }
`;
