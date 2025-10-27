import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import classnames from 'classnames';
import { Field, Label } from '@headlessui/react';
import { ChartBarIcon, CalendarIcon, IdentificationIcon } from '@heroicons/react/outline';

import { Page, SEO, Headline, Search, Lead, Select, SegmentedControl } from 'components';
import { ListItem, filterActions, PackageHeader } from 'components/backstage/scaffolder-actions';
import { fetchPackageDataForList } from 'components/backstage/plugins';

const SORT_ORDERS = [{
  label: 'Name',
  value: 'name',
  icon: IdentificationIcon,
}, {
  label: 'Popularity',
  value: 'popularity',
  icon: ChartBarIcon,
}, {
  label: 'Recently Updated',
  value: 'recent',
  icon: CalendarIcon,
}];

const AVAILABILITY_FILTERS = [{
  label: 'All',
  value: 'all',
  checkedBgColor: 'bg-tealbackstage',
  checkedTextColor: 'text-white',
}, {
  label: 'Available on Roadie',
  value: 'roadie',
  checkedBgColor: 'bg-orange-600',
  checkedTextColor: 'text-white',
}];

const BackstageScaffolderActions = ({ data }) => {
  const {
    actions,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS[0]);
  const [availabilityFilter, setAvailabilityFilter] = useState(AVAILABILITY_FILTERS[0]);
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
    availabilityFilter,
  });

  // Group actions by package
  const groupedActions = filteredActions.reduce((groups, action) => {
    const packageName = action.containedInPackage?.npmPackageName || 'Uncategorized';
    if (!groups[packageName]) {
      groups[packageName] = {
        actions: [],
        packageData: packageData[packageName],
      };
    }
    groups[packageName].actions.push(action);
    return groups;
  }, {});

  // Sort packages based on selected sort order
  const sortedPackageNames = Object.keys(groupedActions).sort((a, b) => {
    const aData = groupedActions[a].packageData || {};
    const bData = groupedActions[b].packageData || {};

    if (sortOrder.value === 'popularity') {
      // Sort by download count (descending)
      const aDownloads = aData.downloadCount || 0;
      const bDownloads = bData.downloadCount || 0;
      return bDownloads - aDownloads;
    } else if (sortOrder.value === 'recent') {
      // Sort by latest version published time (most recent first)
      const aTime = aData.latestVersionPublishedTime ? new Date(aData.latestVersionPublishedTime).getTime() : 0;
      const bTime = bData.latestVersionPublishedTime ? new Date(bData.latestVersionPublishedTime).getTime() : 0;
      return bTime - aTime;
    } else {
      // Sort by name (alphabetically)
      return a.localeCompare(b);
    }
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
            <div className="lg:flex lg:justify-between lg:items-center gap-4">
              <div className="mb-4 lg:mb-0 w-full lg:w-72">
                <Search
                  name="search"
                  onChange={setQuery}
                  value={query}
                  aria-label="Search"
                  placeholder="Filter"
                />
              </div>

              <div className="mb-4 lg:mb-0 flex justify-center w-full lg:w-auto">
                <div className="w-full lg:w-auto">
                  <SegmentedControl
                    value={availabilityFilter}
                    onChange={setAvailabilityFilter}
                    options={AVAILABILITY_FILTERS}
                    name="availability-filter"
                  />
                </div>
              </div>

              <Field
                className="text-right w-full flex items-center justify-end"
                disabled={packageDataLoadingState !== 'loaded'}
              >
                <Label
                  className={classnames('mr-2 whitespace-nowrap', {
                    'text-gray-400': packageDataLoadingState !== 'loaded',
                  })}
                >
                  Sort by:
                </Label>

                <div className="w-48">
                  <Select
                    value={sortOrder}
                    onChange={setSortOrder}
                    options={SORT_ORDERS}
                    name="sort-order"
                    optionKey="label"
                    disabled={packageDataLoadingState !== 'loaded'}
                    showIcon={true}
                  />
                </div>
              </Field>
            </div>
          </div>
        </div>

        <div className="pt-6 grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedPackageNames.map((packageName) => {
            const packageGroup = groupedActions[packageName];
            const actionsInPackage = packageGroup.actions;
            const logoImage = actionsInPackage[0]?.containedInPackage?.logoImage;
            const packagePackageData = packageGroup.packageData || {};
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
