import React, { useState, useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import classnames from 'classnames';
import { Field, Label } from '@headlessui/react';
import isEmpty from 'lodash/isEmpty';
import { ChartBarIcon, CalendarIcon, IdentificationIcon } from '@heroicons/react/outline';

import { Typeahead, Page, SEO, Headline, Search, Lead, Select, TextLink as Link } from 'components';
import {
  ListItem,
  fetchPackageDataForList,
  filterPlugins,
  hydratePlugin,
} from 'components/backstage/plugins';
import { useCategoryFilter, useQueryFilter } from 'hooks/useUrlFilterState';

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

const BackstagePlugins = ({ data, location }) => {
  const {
    plugins,
    pluginCategories,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  const queryParam = searchParams.get('q');

  const [query, setQuery] = useState(queryParam || '');
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS[0]);
  const [packageData, setPackageData] = useState({});
  const [packageDataLoadingState, setPackageDataLoadingState] = useState('unloaded');
  const initialCategory = pluginCategories.edges
    .map(({ node }) => node)
    .find(({ searchParam }) => searchParam === categoryParam);
  const [category, setCategory] = useState(initialCategory || {});

  const handleCategoryChange = useCategoryFilter(location, setCategory);
  const handleQueryChange = useQueryFilter(location, setQuery);

  useEffect(() => {
    (async () => {
      setPackageDataLoadingState('loading');
      const { status, data } = await fetchPackageDataForList();
      setPackageDataLoadingState(status);
      setPackageData(data);
    })();
  }, []);

  useEffect(() => {
    // Save search params to sessionStorage so we can restore them when returning from a plugin page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('pluginsPageSearchParams', location.search);
    }
  }, [location.search]);

  const clearFilters = () => {
    setQuery('');
    setCategory({});
    navigate(location.pathname, { replace: true });
  };

  const allPluginsCount = plugins.edges.length;
  const hydratedPlugins = plugins.edges.map(({ node }) => hydratePlugin(node, packageData));

  const filteredPlugins = filterPlugins({
    plugins: hydratedPlugins,
    query,
    sortOrder,
    category,
    packageDataLoadingState,
  });

  let seoTitle = `Backstage Plugins Directory - All plugins | ${title}`;
  let seoDescription = 'All Backstage plugins. Screenshots, installation instructions, changelogs & NPM data. Sort by popularity.';
  if (!isEmpty(category)) {
    seoTitle = `Backstage Plugins - ${category.name} | ${title}`;
    seoDescription = `${category.name} Backstage plugins. Screenshots, installation instructions, changelogs & NPM data. Sort by popularity.`;
  }

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />

      <Page titleDivide={true}>
        <div className="mb-6">
          <div>
            <div className="mb-4">
              <Headline>Backstage plugins</Headline>
            </div>
            <div className="mb-10">
              <Lead>
                Descriptions, installation instructions, and changelogs for{' '}
                {allPluginsCount.toLocaleString()} open-source Backstage plugins.
              </Lead>
              <Lead>
                Using Roadie? Visit our{' '}
                <Link to="/docs/integrations/" color="primary">
                  integrations list
                </Link>{' '}
                instead.
              </Lead>
            </div>
          </div>

          <div className="mb-2">
            <div className="lg:flex lg:justify-between">
              <div className="sm:flex">
                <div className="mb-4 lg:mb-0 sm:mr-4 w-full lg:w-72">
                  <Search
                    name="search"
                    onChange={handleQueryChange}
                    value={query}
                    aria-label="Search"
                    placeholder="Filter"
                  />
                </div>

                <div className="mb-4 lg:mb-0 w-full lg:w-96">
                  <Typeahead
                    onChange={handleCategoryChange}
                    value={category}
                    options={pluginCategories.edges.map(({ node }) => node)}
                    placeholderText="Categories"
                    name="filter-categories"
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

        {filteredPlugins.length === 0 ? (
          <div className="pt-6 text-center">
            <p className="text-gray-600 text-lg">
              No plugins match your filter settings.
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
        ) : (
          <div className="pt-6 grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {filteredPlugins.map(({ slug, ...plugin }) => (
              <ListItem
                key={slug}
                slug={slug}
                {...plugin}
                packageDataLoadingState={packageDataLoadingState}
              />
            ))}
          </div>
        )}
      </Page>
    </>
  );
};

export default BackstagePlugins;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    pluginCategories: allContentfulBackstagePluginCategory(sort: {
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

    plugins: allContentfulBackstagePlugin(
      sort: { humanName: ASC }
    ) {
      edges {
        node {
          slug
          humanName

          packages {
            npmPackageName
            registry
          }

          logoImage {
            gatsbyImageData(
              height: 80
              width: 80
              placeholder: DOMINANT_COLOR
              resizingBehavior: PAD
            )
          }
          attributionText
          attributionUrl
          lead

          category {
            name
          }
        }
      }
    }
  }
`;
