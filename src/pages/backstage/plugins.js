import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import classnames from 'classnames';
import { Field, Label } from '@headlessui/react';

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

const BackstagePlugins = ({ data }) => {
  const {
    plugins,
    pluginCategories,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS[0]);
  const [npmData, setNpmData] = useState({});
  const [npmDataLoadingState, setNpmDataLoadingState] = useState('unloaded');
  const [category, setCategory] = useState({});

  useEffect(() => {
    (async () => {
      setNpmDataLoadingState('loading');
      const { status, data } = await fetchNpmDataForList();
      setNpmDataLoadingState(status);
      setNpmData(data);
    })();
  }, []);

  const allPluginsCount = plugins.edges.length;
  const hydratedPlugins = plugins.edges.map(({ node }) => hydratePlugin(node, npmData));

  const filteredPlugins = filterPlugins({
    plugins: hydratedPlugins,
    query,
    sortOrder,
    category,
    npmDataLoadingState,
  });

  return (
    <>
      <SEO
        title={`Backstage Plugins Directory - All plugins | ${title}`}
        description="A comprehensive list of Backstage plugins. With screenshots, installation instructions and usage guides."
      />

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
                    onChange={setCategory}
                    value={category}
                    options={pluginCategories.edges.map(({ node }) => node)}
                    placeholderText="Categories"
                    name="filter-categories"
                  />
                </div>
              </div>

              <Field
                className={classnames('text-right w-full flex items-center justify-end', {
                  visible: npmDataLoadingState === 'loaded',
                  invisible: npmDataLoadingState !== 'loaded',
                })}
              >
                <Label className="mr-2 whitespace-nowrap">
                  Sort by:
                </Label>

                <div className="w-48">
                  <Select
                    value={sortOrder}
                    onChange={setSortOrder}
                    options={SORT_ORDERS}
                    name="sort-order"
                    optionKey="label"
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
        }
      }
    }

    plugins: allContentfulBackstagePlugin(sort: { humanName: ASC }) {
      edges {
        node {
          slug
          humanName
          npmPackageName
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
