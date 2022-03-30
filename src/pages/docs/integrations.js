import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, Headline, Input } from 'components';

import DocsHeader from 'components/SitewideHeader/DocsHeader';
import ListItem from 'components/backstage/plugins/ListItem';

const DocsIntegrations = ({
  data: {
    site: { siteMetadata },
    integrations,
  },
  location,
}) => {
  const [query, setQuery] = useState('');

  let filteredIntegrations = [];
  if (query === '') {
    filteredIntegrations = integrations.nodes;
  } else {
    filteredIntegrations = integrations.nodes.filter(({ frontmatter }) => {
      return frontmatter.humanName.toLowerCase().includes(query.toLowerCase());
    });
  }

  return (
    <>
      <SEO
        title={`Backstage plugins & integrations docs | ${siteMetadata.title}`}
        description="Learn how to add Backstage plugins and other integrations to your Roadie Backstage experience."
      />
      <DocsHeader location={location} />

      <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
        <article className="relative max-w-lg mx-auto lg:max-w-7xl mb-24">
          <div className="lg:flex justify-between items-center mb-12">
            <div className="sm:mb-6 lg:mb-0">
              <Headline>Plugins & Integrations</Headline>
            </div>

            <form>
              <Input
                type="text"
                onChange={setQuery}
                value={query}
                aria-label="Filter"
                placeholder="Filter"
              />
            </form>
          </div>


          <div className="grid gap-16 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12">
            {filteredIntegrations.map(({ fields, frontmatter }) => (
              <ListItem frontmatter={frontmatter} fields={fields} key={fields.slug} />
            ))}
          </div>
        </article>
      </main>

      <SitewideFooter maxWidth="full" />
    </>
  );
};

export default DocsIntegrations;

export const pageQuery = graphql`
  query DocsIntegrations {
    site {
      siteMetadata {
        title
      }
    }

    integrations: allMarkdownRemark(
      sort: { fields: frontmatter___humanName, order: ASC }
      filter: { fileAbsolutePath: { regex: "/.+/content/docs/integrations/.+/" } }
    ) {
      nodes {
        fields {
          slug
        }

        frontmatter {
          humanName
          integrationType

          logoImage {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 140)
            }
          }
        }
      }
    }
  }
`;
