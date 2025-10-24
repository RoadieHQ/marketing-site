import React, { useState, useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import classnames from 'classnames';
import { Field, Label } from '@headlessui/react';
import isEmpty from 'lodash/isEmpty';

import { Typeahead, Page, SEO, Headline, Input, Lead, Select, TextLink as Link } from 'components';
import {
  ListItem,
  fetchNpmDataForList,
  filterPlugins,
  hydratePlugin,
} from 'components/backstage/plugins';

const SORT_ORDERS = [{
  label: 'Name',
  value: 'name',
}, {
  label: 'Popularity',
  value: 'popularity',
}, {
  label: 'Recently Updated',
  value: 'recent',
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

  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS[0]);
  const [npmData, setNpmData] = useState({});
  const [npmDataLoadingState, setNpmDataLoadingState] = useState('unloaded');
  const initialCategory = pluginCategories.edges
    .map(({ node }) => node)
    .find(({ searchParam }) => searchParam === categoryParam);
  const [category, setCategory] = useState(initialCategory || {});

  useEffect(() => {
    (async () => {
      setNpmDataLoadingState('loading');
      const { status, data } = await fetchNpmDataForList();
      setNpmDataLoadingState(status);
      setNpmData(data);
    })();
  }, []);

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

  const allPluginsCount = plugins.edges.length;
  const hydratedPlugins = plugins.edges.map(({ node }) => hydratePlugin(node, npmData));

  const filteredPlugins = filterPlugins({
    plugins: hydratedPlugins,
    query,
    sortOrder,
    category,
    npmDataLoadingState,
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
                disabled={npmDataLoadingState !== 'loaded'}
              >
                <Label
                  className={classnames('mr-2 whitespace-nowrap', {
                    'text-gray-400': npmDataLoadingState !== 'loaded',
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
                    disabled={npmDataLoadingState !== 'loaded'}
                  />
                </div>
              </Field>
            </div>
          </div>
        </div>

        <div className="pt-6 grid gap-4 md:gap-8 md:grid-cols-2 lg:gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {filteredPlugins.map(({ slug, ...plugin }) => (
            <ListItem
              key={slug}
              slug={slug}
              {...plugin}
              npmDataLoadingState={npmDataLoadingState}
            />
          ))}
        </div>
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

    plugins: allContentfulBackstagePlugin(sort: { humanName: ASC }) {
      edges {
        node {
          slug
          humanName

          packages {
            npmPackageName
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
