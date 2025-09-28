import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import { Page, SEO, Headline, Input, Lead, TextLink as Link } from 'components';
import ListItem from 'components/backstage/plugins/ListItem';

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

async function fetchNpmDataForList () {
  let response;

  try {
    response = await fetch( '/.netlify/functions/fetchNpmDataForList');

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
    console.warn(`Unparsable JSON returned from Netlify function. It's likely not available in this environment.`);
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

  function onSortOrderInputChange(e) {
    const newSortOrder = { ...SORT_ORDERS.find(({ value }) => value === e.target.value) };
    setSortOrder(newSortOrder);
  }

  const hydratedPlugins = plugins.edges.map(({ node }) => (
    hydratePlugin(node, npmData)
  ));

  console.log('hydratedPlugins', hydratedPlugins);

  let filteredPlugins = [];
  if (query === '') {
    filteredPlugins = hydratedPlugins;
  } else {
    filteredPlugins = hydratedPlugins.filter(({ humanName }) => {
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
              <Lead>Descriptions, guides and installation instructions for popular open-source Backstage plugins.</Lead>
              <Lead>Using Roadie? Visit our <Link to="/docs/integrations/" color="primary">integrations list</Link> instead.</Lead>
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

              {npmDataLoadingState === 'loaded' && (
                <div className="text-right">
                  <label htmlFor="sort-order" className="mr-2">
                    Sort by:
                  </label>

                  <select
                    value={sortOrder.value}
                    onChange={onSortOrderInputChange}
                    name="sort-order"
                    className="rounded-md shadow-sm"
                  >
                    {SORT_ORDERS.map(({ value, label }) => (
                      <option value={value} key={value}>{label}</option>
                    ))}
                  </select>
                </div>
              )}
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

    plugins: allContentfulBackstagePlugin(sort: {humanName: ASC}) {
      edges {
        node {
          slug
          humanName
          npmPackageName
          logoImage {
            gatsbyImageData(
              height: 80,
              width: 80,
              placeholder: DOMINANT_COLOR,
              resizingBehavior: PAD,
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
