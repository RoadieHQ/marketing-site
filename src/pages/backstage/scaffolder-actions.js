import React, { useState, useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import classnames from 'classnames';
import { Field, Label } from '@headlessui/react';
import isEmpty from 'lodash/isEmpty';
import { ChartBarIcon, CalendarIcon, IdentificationIcon } from '@heroicons/react/outline';

import { Typeahead, Page, SEO, Headline, Search, Lead, Select, SegmentedControl } from 'components';
import { ListItem, filterActions, PackageHeader } from 'components/backstage/scaffolder-actions';
import { fetchPackageDataForList } from 'components/backstage/plugins';
import { RoadieRacksIcon } from 'components/icons';

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
  shortLabel: 'Roadie',
  value: 'roadie',
  icon: RoadieRacksIcon,
  checkedBgColor: 'bg-orange-600',
  checkedTextColor: 'text-white',
  checkedIconColor: '#ffffff',
  uncheckedIconColor: '#ea580c',
}];

const BackstageScaffolderActions = ({ data, location }) => {
  const {
    actions,
    actionCategories,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  const queryParam = searchParams.get('q');
  const availabilityParam = searchParams.get('availability');

  const [query, setQuery] = useState(queryParam || '');
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS[0]);
  const initialAvailabilityFilter = AVAILABILITY_FILTERS.find(
    filter => filter.value === availabilityParam
  ) || AVAILABILITY_FILTERS[0];
  const [availabilityFilter, setAvailabilityFilter] = useState(initialAvailabilityFilter);
  const initialCategory = actionCategories.edges
    .map(({ node }) => node)
    .find(({ searchParam }) => searchParam === categoryParam);
  const [category, setCategory] = useState(initialCategory || {});
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

  useEffect(() => {
    // Save search params to sessionStorage so we can restore them when returning from an action page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('actionsPageSearchParams', location.search);
    }
  }, [location.search]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);

    const params = new URLSearchParams(location.search);
    if (isEmpty(newCategory)) {
      params.delete('category');
    } else {
      params.set('category', newCategory.searchParam);
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);

    const params = new URLSearchParams(location.search);
    if (!newQuery || newQuery.trim() === '') {
      params.delete('q');
    } else {
      params.set('q', newQuery);
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const handleAvailabilityFilterChange = (newFilter) => {
    setAvailabilityFilter(newFilter);

    const params = new URLSearchParams(location.search);
    if (newFilter.value === 'all') {
      params.delete('availability');
    } else {
      params.set('availability', newFilter.value);
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const clearFilters = () => {
    setQuery('');
    setCategory({});
    setAvailabilityFilter(AVAILABILITY_FILTERS[0]);
    navigate(location.pathname, { replace: true });
  };

  const allActionsCount = actions.edges.length;
  const actionsList = actions.edges.map(({ node }) => node);

  const filteredActions = filterActions({
    actions: actionsList,
    query,
    availabilityFilter,
    category,
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

  let seoTitle = `Backstage Scaffolder Actions Directory | ${title}`;
  let seoDescription = 'Browse Backstage scaffolder actions. View descriptions, schemas, usage examples, and popularity data.';
  if (!isEmpty(category)) {
    seoTitle = `Backstage Scaffolder Actions - ${category.name} | ${title}`;
    seoDescription = `${category.name} Backstage scaffolder actions. View descriptions, schemas, usage examples, and popularity data.`;
  }

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

          <div className="mb-2 xl:flex xl:items-center">
            <div className="md:mb-2 md:flex md:items-center md:gap-2 xl:mb-0">
              <div className="mb-2 md:mb-0 md:w-full lg:w-full xl:mr-2">
                <Search
                  name="search"
                  onChange={handleQueryChange}
                  value={query}
                  aria-label="Search"
                  placeholder="Filter"
                />
              </div>

              <div className="mb-2 md:mb-0 md:w-full lg:hidden mx:mr-2">
                <Typeahead
                  onChange={handleCategoryChange}
                  value={category}
                  options={actionCategories.edges.map(({ node }) => node)}
                  placeholderText="Categories"
                  name="filter-categories"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-2 lg:justify-between xl:flex-grow">
              <div className="lg:flex lg:items-center">
                <div className="hidden lg:block lg:w-96 xl:w-auto xl:flex-shrink-0 lg:mr-2 mx:mr-2 xl:w-72">
                  <Typeahead
                    onChange={handleCategoryChange}
                    value={category}
                    options={actionCategories.edges.map(({ node }) => node)}
                    placeholderText="Categories"
                    name="filter-categories"
                  />
                </div>

                <div className="flex-shrink-0">
                  <SegmentedControl
                    value={availabilityFilter}
                    onChange={handleAvailabilityFilterChange}
                    options={AVAILABILITY_FILTERS}
                    name="availability-filter"
                  />
                </div>
              </div>

              <Field
                className="text-right flex items-center justify-end flex-shrink-0 xl:ml-auto"
                disabled={packageDataLoadingState !== 'loaded'}
              >
                <Label
                  className={classnames('mr-2 whitespace-nowrap', {
                    'text-gray-400': packageDataLoadingState !== 'loaded',
                  })}
                >
                  Sort:
                </Label>

                <div className="w-32 lg:w-48">
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

        {filteredActions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No scaffolder actions found matching your filters.
            </p>
            <p className="text-gray-500 mt-2">
              <button
                onClick={clearFilters}
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Clear all filters
              </button>
            </p>
          </div>
        )}

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

    actionCategories: allContentfulBackstageScaffolderActionCategory(sort: {
      name: ASC
    }) {
      edges {
        node {
          name
          description
          searchParam
        }
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
          availableOnRoadie
          category {
            name
            description
            searchParam
          }
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
