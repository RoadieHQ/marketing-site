import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { Page, SEO, Headline, Input, Lead } from 'components';
import { ListItem, filterActions } from 'components/backstage/scaffolder-actions';

const BackstageScaffolderActions = ({ data }) => {
  const {
    actions,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const [query, setQuery] = useState('');

  const allActionsCount = actions.edges.length;
  const actionsList = actions.edges.map(({ node }) => node);

  const filteredActions = filterActions({
    actions: actionsList,
    query,
  });

  const seoTitle = `Backstage Scaffolder Actions Directory | ${title}`;
  const seoDescription = 'Browse Backstage scaffolder actions. View descriptions, schemas, code locations, and availability information.';

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />

      <Page titleDivide={true}>
        <div className="mb-6">
          <div>
            <div className="mb-4">
              <Headline>Backstage Scaffolder Actions</Headline>
            </div>
            <div className="mb-10">
              <Lead>
                Browse and search {allActionsCount.toLocaleString()} Backstage scaffolder actions with
                detailed information about their inputs, outputs, and availability.
              </Lead>
            </div>
          </div>

          <div className="mb-2">
            {/* Search Input */}
            <div className="mb-4 w-full lg:w-72">
              <Input
                type="text"
                name="search"
                onChange={setQuery}
                value={query}
                aria-label="Search"
                placeholder="Search"
                fullWidth={true}
              />
            </div>
          </div>
        </div>

        <div className="pt-6 grid gap-4 lg:gap-8 lg:grid-cols-2">
          {filteredActions.map(({ slug, ...action }) => (
            <ListItem
              key={slug}
              slug={slug}
              {...action}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredActions.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No scaffolder actions found matching your filters.
          </div>
        )}
      </Page>
    </>
  );
};

export default BackstageScaffolderActions;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    actions: allContentfulBackstageScaffolderAction(sort: { actionId: ASC }) {
      edges {
        node {
          slug
          actionId
          description {
            childMarkdownRemark {
              html
            }
          }
          inputSchema {
            internal {
              content
            }
          }
          outputSchema {
            internal {
              content
            }
          }
          supportsDryRun
          codeLocation
          availableOnRoadie
        }
      }
    }
  }
`;
