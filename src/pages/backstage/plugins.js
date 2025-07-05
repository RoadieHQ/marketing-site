import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { Page, SEO, Headline, Input, Lead, TextLink as Link } from 'components';
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
      sort: { frontmatter: { humanName: ASC } }
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
