import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import { Page, SEO, Headline, Input, Lead } from 'components';
import { ListItem, filterActions, PackageHeader } from 'components/backstage/scaffolder-actions';
import { fetchPackageDataForList } from 'components/backstage/plugins';

const BackstageScaffolderActions = ({ data }) => {
  const {
    actions,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const [query, setQuery] = useState('');
  const [packageData, setPackageData] = useState({});
  const [packageDataLoadingState, setPackageDataLoadingState] = useState('unloaded');

  useEffect(() => {
    (async () => {
      setPackageDataLoadingState('loading');
      const { status, data } = await fetchPackageDataForList();
      setPackageDataLoadingState(status);
      setPackageData(data);
    })();
  }, []);

  const allActionsCount = actions.edges.length;
  const actionsList = actions.edges.map(({ node }) => node);

  const filteredActions = filterActions({
    actions: actionsList,
    query,
  });

  // Group actions by package
  const groupedActions = filteredActions.reduce((groups, action) => {
    const packageName = action.containedInPackage?.npmPackageName || 'Uncategorized';
    if (!groups[packageName]) {
      groups[packageName] = [];
    }
    groups[packageName].push(action);
    return groups;
  }, {});

  // Sort packages alphabetically
  const sortedPackageNames = sortBy(Object.keys(groupedActions));

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
            <div className="mb-4 w-full lg:w-72">
              <Input
                type="text"
                name="search"
                onChange={setQuery}
                value={query}
                aria-label="Search"
                placeholder="Filter"
                fullWidth={true}
              />
            </div>
          </div>
        </div>

        <div className="pt-6 grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedPackageNames.map((packageName) => {
            const actionsInPackage = groupedActions[packageName];
            const logoImage = actionsInPackage[0]?.containedInPackage?.logoImage;
            const packagePackageData = packageData[packageName] || {};
            return (
              <React.Fragment key={packageName}>
                <PackageHeader
                  packageName={packageName}
                  logoImage={logoImage}
                  packageData={packagePackageData}
                  packageDataLoadingState={packageDataLoadingState}
                />
                {actionsInPackage.map((action) => (
                  <ListItem key={action.slug} action={action} />
                ))}
              </React.Fragment>
            );
          })}
        </div>

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
          humanName
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
          containedInPackage {
            npmPackageName
            logoImage {
              gatsbyImageData(
                height: 80
                width: 80
                placeholder: DOMINANT_COLOR
                resizingBehavior: PAD
              )
            }
          }
        }
      }
    }
  }
`;
