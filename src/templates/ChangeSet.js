import React from 'react';
import { graphql } from 'gatsby';
import { Seo, SitewideHeader, SitewideFooter, TextLink as Link } from 'components';
import { ChangeSet } from 'components/changelog';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import get from 'lodash/get';

const ChangeSetPage = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },

    changeSet,
  },
}) => (
  <>
    <Seo
      title={`Release: ${changeSet.title} | ${siteTitle}`}
      description={get(changeSet, 'description.childMarkdownRemark.excerpt', 'Read the changelog')}
    />

    <SitewideHeader />

    <main className="max-w-5xl sm:max-w-4xl mx-auto px-8 pb-20 pt-8 lg:pb-28">
      <ChangeSet
        title={changeSet.title}
        releasedAt={changeSet.releasedAt}
        description={get(changeSet, 'description.childMarkdownRemark', {})}
        isCollapsible={false}
      />

      <div className="mt-6 list-reset lg:flex items-start">
        <div className="md:w-32 lg:w-48 flex-shrink-0" />
        <Link to="/changelog/" color="primary">
          <ArrowCircleLeftIcon className="mr-1 h-6 w-6 inline" />
          <span className="align-middle">Browse the full changlog</span>
        </Link>
      </div>
    </main>

    <SitewideFooter />
  </>
);

export default ChangeSetPage;

export const pageQuery = graphql`
  query ChangeSetBySlug($slug: String!) {
    changeSet: contentfulChangeSet(slug: { eq: $slug }) {
      title
      releasedAt
      slug
      description {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 160, format: PLAIN)
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
