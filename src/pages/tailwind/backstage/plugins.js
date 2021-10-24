import React, { useState } from 'react';
import { graphql } from 'gatsby';

import {
  SitewideHeader,
  TailwindHeadContent,
  SitewideFooter,
  SEO,
  Headline,
} from 'components/tailwind';
import ListItem from 'components/tailwind/backstage/plugins/ListItem';

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

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <SEO
        title={`Backstage Plugins Directory - All plugins | ${title}`}
        description="A comprehensive list of Backstage plugins. With screenshots, installation instructions and usage guides."
      />
      <TailwindHeadContent />

      <SitewideHeader />

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="lg:flex justify-between items-center">
            <div className="sm:mb-6 lg:mb-0">
              <Headline>Backstage plugins</Headline>
            </div>

            <form>
              <input
                type="text"
                onChange={onInputChange}
                value={query}
                aria-label="Search"
                className="bg-gray-100 color-gray-800 border-2 border-gray-300 sm:w-full lg:w-56 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {filteredPlugins.map(({ node: { fields, frontmatter } }) => (
              <ListItem frontmatter={frontmatter} fields={fields} key={fields.slug} />
            ))}
          </div>
        </div>
      </div>

      <SitewideFooter />
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
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 140)
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
