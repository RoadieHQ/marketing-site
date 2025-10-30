import React from 'react';
import { graphql } from 'gatsby';
import { Seo, TextLink as Link, SitewideHeader, SitewideFooter, Headline, Lead } from 'components';
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

// This page is deprecated. Changelog posts are now published on our blog and tagged with 
// 'changelog'
const Changelog = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },

    changeSets: { edges: changeSets },
  },

  pageContext,
}) => (
  <>
    <Seo
      title={`Changelog (Legacy) | ${siteTitle}`}
      description={`Product improvements are now published on our blog.`}
    />

    <SitewideHeader />

    <main className="max-w-5xl sm:max-w-4xl mx-auto px-8 pb-20 lg:pt-8 lg:pb-28">
      <div className="bg-white">

        <div className="max-w-4xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mt-1">
              <Headline size="medium">
                <span className="line-through">What&apos;s new in Roadie</span><span> (Legacy)</span>
              </Headline>
            </div>
            <div className="mt-5">
              <Lead>
                <span>
                  Product improvements are now listed <Link to="/tags/changelog/" color="primary">on our blog</Link> and are also available via <Link to="/blog-changelog/rss.xml" color="primary">RSS</Link>. This changelog remains for posterity and will not be updated.
                </span>
              </Lead>
            </div>
          </div>
        </div>
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
  query Changelog($limit: Int!, $skip: Int!) {
    changeSets: allContentfulChangeSet(sort: { releasedAt: DESC }, limit: $limit, skip: $skip) {
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
