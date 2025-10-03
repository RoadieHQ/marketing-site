import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';
import classnames from 'classnames';

import { Page, SEO, Headline, Input, Lead, Select, TextLink as Link } from 'components';
import ListItem from 'components/backstage/plugins/ListItem';

const SORT_ORDERS = [
  {
    label: 'Name',
    value: 'name',
  },
  {
    label: 'Popularity',
    value: 'popularity',
  },
  {
    label: 'Recently Updated',
    value: 'recent',
  },
];

async function fetchNpmDataForList() {
  let response;

  try {
    response = await fetch('/.netlify/functions/fetchNpmDataForList');

    if (!response.ok) {
      return {
        status: 'error',
        data: {},
      };
    }
  } catch (err) {
    console.error(err);
    return {
      status: 'error',
      data: {},
    };
  }

  try {
    const json = await response.json();
    return {
      status: 'loaded',
      data: json.data,
    };
  } catch (err) {
    console.warn(
      `Unparsable JSON returned from Netlify function. It's likely not available in this environment.`
    );
    return {
      status: 'error',
      data: {},
    };
  }
}

const hydratePlugin = (plugin, npmData) => {
  const pluginNpmData = npmData[plugin.npmPackageName];
  if (pluginNpmData) {
    plugin.npmData = {
      lastMonthDownloads: pluginNpmData.lastMonthDownloads,
      latestVersionPublishedTime: new Date(Date.parse(pluginNpmData.latestVersionPublishedTime)),
    };
  } else {
    plugin.npmData = {};
  }
  return plugin;
};

const filterPlugins = ({ plugins, query, sortOrder, npmDataLoadingState }) => {
  let filteredPlugins = [];
  if (query === '') {
    filteredPlugins = plugins;
  } else {
    filteredPlugins = plugins.filter(({ humanName }) => {
      return humanName.toLowerCase().includes(query.toLowerCase());
    });
  }

  if (npmDataLoadingState === 'loaded') {
    if (sortOrder.value === 'name') {
      filteredPlugins = sortBy(filteredPlugins, ['humanName']);
    } else if (sortOrder.value === 'popularity') {
      filteredPlugins = sortBy(filteredPlugins, ['npmData.lastMonthDownloads']).reverse();
    } else if (sortOrder.value === 'recent') {
      filteredPlugins = sortBy(filteredPlugins, ['npmData.latestVersionPublishedTime']).reverse();
    }
  }

  return filteredPlugins;
};

const BackstagePlugins = ({ data }) => {
  const {
    plugins,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS[0]);
  const [npmData, setNpmData] = useState({});
  const [npmDataLoadingState, setNpmDataLoadingState] = useState('unloaded');

  useEffect(() => {
    (async () => {
      setNpmDataLoadingState('loading');
      const { status, data } = await fetchNpmDataForList();
      setNpmDataLoadingState(status);
      setNpmData(data);
    })();
  }, []);

  const allPLuginsCount = plugins.edges.length;
  const hydratedPlugins = plugins.edges.map(({ node }) => hydratePlugin(node, npmData));

  const hydratedPlugins = plugins.edges.map(({ node }) => (
    hydratePlugin(node, npmData)
  ));

  const filteredPlugins = filterPlugins({
    plugins: hydratedPlugins,
    query,
    sortOrder,
    npmDataLoadingState,
  });

  return (
    <>
      <SEO
        title={`Backstage Plugins Directory - All plugins | ${title}`}
        description="A comprehensive list of Backstage plugins. With screenshots, installation instructions and usage guides."
      />

      <Page titleDivide={true}>
        <div className="lg:flex justify-between items-center mb-6">
          <div className="lg:mr-8">
            <div className="mb-4">
              <Headline>Backstage plugins</Headline>
            </div>
            <div className="mb-10">
              <Lead>
                Descriptions, installation instructions, and changelogs for {allPLuginsCount.toLocaleString()} open-source Backstage 
                plugins.
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
            <form className="lg:w-96">
              <div className="mb-2">
                <Input
                  type="text"
                  onChange={setQuery}
                  value={query}
                  aria-label="Search"
                  placeholder="Search"
                  fullWidth
                />
              </div>

              <div
                className={classnames('text-right', {
                  visible: npmDataLoadingState === 'loaded',
                  invisible: npmDataLoadingState !== 'loaded',
                })}
              >
                <label htmlFor="sort-order" className="mr-2">
                  Sort by:
                </label>

                <Select
                  value={sortOrder.value}
                  onChange={setSortOrder}
                  options={SORT_ORDERS}
                  name="sort-order"
                  fullWidth={false}
                >
                  {SORT_ORDERS.map(({ value, label }) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </div>
            </form>
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
        }
      }
    }
  }
`;
