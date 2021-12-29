import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  Page,
  SEO,
  Headline,
  Input,
} from 'components';
import ListItem from 'components/backstage/plugins/ListItem';

const BackstagePlugins = ({ data }) => {
  const {
    plugins,
    site: {
      siteMetadata: { title },
    },
  } = data;

  const [query, setQuery] = useState('');

  let filteredPlugins = [];
  if (query === '') {
    filteredPlugins = plugins.edges;
  } else {
    filteredPlugins = plugins.edges.filter(({ node }) => {
      return node.frontmatter.humanName.toLowerCase().includes(query.toLowerCase());
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
          <div className="sm:mb-6 lg:mb-0">
            <Headline>Backstage plugins</Headline>
          </div>

          <form>
            <Input
              type="text"
              onChange={setQuery}
              value={query}
              aria-label="Search"
              placeholder="Search"
            />
          </form>
        </div>

        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {filteredPlugins.map(({ node: { fields, frontmatter } }) => (
            <ListItem frontmatter={frontmatter} fields={fields} key={fields.slug} />
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

    plugins: allMarkdownRemark(
      sort: { fields: frontmatter___humanName, order: ASC }
      filter: { fileAbsolutePath: { regex: "/.+/content/backstage/plugins/.+/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }

          frontmatter {
            humanName

            logoImage {
              childCloudinaryAsset {
                fixed {
                  ...CloudinaryAssetFixed
                }
              }
            }

            attribution {
              text
              href
            }
          }
        }
      }
    }
  }
`;
