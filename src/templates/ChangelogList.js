import React from 'react';
import { graphql } from 'gatsby';
import { SEO, TextLink as Link, SitewideHeader, SitewideFooter } from 'components';
import { SimpleCenteredHeading } from 'components/landing';
import { ChangeSet, Pagination } from 'components/changelog';

const Changelog = ({
  data: {
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    },

    changeSets: {
      edges: changeSets,
    },
  },

  pageContext,
}) => (
  <>
    <SEO
      title={`Changelog | ${siteTitle}`}
      description={`
        A list of all new and updated features so you can get a quick overview of what has changed in the product.
      `}
    />

    <SitewideHeader />

    <main className="max-w-5xl sm:max-w-4xl mx-auto px-8 pb-20 lg:pt-8 lg:pb-28">
      <SimpleCenteredHeading
        headline="What's new in Roadie"
        lead={
          <span>This is the changelog for Roadie. It lists new and updated features so you can get a quick overview of what&apos;s new. You can follow us on <Link color="primary" to="https://twitter.com/roadiehq">Twitter</Link> for more updates.</span>
        }
        headlineSize="small"
      />

      <ul className="container mt-12 mb-8">
        {changeSets.map(({ node: { title, releasedAt, description } }) => (
          <ChangeSet
            key={`${title} ${releasedAt}`}
            title={title}
            releasedAt={releasedAt}
            description={description && description.childMarkdownRemark}
          />
        ))}
      </ul>

      <Pagination pageContext={pageContext} />
    </main>

    <SitewideFooter />
  </>
);

export default Changelog;

export const pageQuery = graphql`
  query Changelog(
    $limit: Int!
    $skip: Int!
  ) {
    changeSets: allContentfulChangeSet(
      sort: {fields: releasedAt, order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          releasedAt
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
