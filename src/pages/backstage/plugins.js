import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import { Page, SEO, Headline, Input, Lead, TextLink as Link } from 'components';
import ListItem from 'components/backstage/plugins/ListItem';

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


const BackstagePlugins = ({ data }) => {
  const {
    plugins,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const [query, setQuery] = useState('');
  const [npmData, setNpmData] = useState({});
  const [npmDataLoadingState, setNpmDataLoadingState] = useState('unloaded');

  useEffect(() => {
    (async () => {
      setNpmDataLoadingState('loading');
      console.log('fetching');
      const { status, data } = await fetchNpmDataForList();
      setNpmDataLoadingState(status);
      setNpmData(data);
    })();
  }, []);

  let filteredPlugins = [];
  if (query === '') {
    filteredPlugins = plugins.edges;
  } else {
    filteredPlugins = plugins.edges.filter(({ node }) => {
      return node.humanName.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <>
      <SEO
        title={`Backstage Plugins Directory - All plugins | ${title}`}
        description="A comprehensive list of Backstage plugins. With screenshots, installation instructions and usage guides."
      />

      <Page titleDivide={true}>
        <div className="lg:flex justify-between items-center">
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
              <Input
                type="text"
                onChange={setQuery}
                value={query}
                aria-label="Search"
                placeholder="Search"
                fullWidth
              />
            </form>
          </div>
        </div>

        <div className="grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {filteredPlugins.map(({ node }) => (
            <ListItem key={node.slug} {...node} npmData={npmData[node.npmPackageName] || {}} />
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
