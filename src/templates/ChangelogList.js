import React from 'react';
import { graphql } from 'gatsby';
import { SEO, TextLink as Link, SitewideHeader, SitewideFooter } from 'components';
import { ChangeSet, Pagination } from 'components/changelog';

// In the code below, this is used to prevent the changelog from being collapsed on the preview
// site. There is basic authentication on the preview site (preview.roadie.io) to prevent it being
// indexed by search engines. This basic authentication is preventing prefetching from working,
// because the requests to prefetch content do not have the authentication information added.
// For some reason I (David) cannot understand, the ChangeSet componentis being chunked and
// prefetched. On the preview site, it never gets loaded because of the prefetch authentication
// problem, and I cannot expand the changelog items to check that the content looks as expected.
// For this reason, I am using an env var to toggle off collapsing on the preview site but
// nowhere else.
import { isPreviewSite } from '../environment';

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

    <main className="Container">
      <div className="Flex column gap-5">
        <h1 className='Text size-9'>What's new in Roadie</h1>
        <p className='Text size-5 weight-1 lowContrast'>This is the changelog for Roadie. It lists new and updated features so you can get a quick overview of what&apos;s new. Subscribe via <Link color="primary" to="rss.xml">RSS</Link> or follow us on <Link color="primary" to="https://twitter.com/roadiehq">Twitter</Link> for more updates.</p>
      </div>

      <ul className="container mt-12 mb-8">
        {changeSets.map(({ node: { title, releasedAt, description, slug } }) => (
          <ChangeSet
            key={`${title} ${releasedAt}`}
            title={title}
            releasedAt={releasedAt}
            description={description && description.childMarkdownRemark}
            slug={slug}
            isCollapsible={isPreviewSite() ? false : true}
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
          slug
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
