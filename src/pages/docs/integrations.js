import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, Headline, Input, Lead, TextLink } from 'components';

import DocsHeader from 'components/SitewideHeader/DocsHeader';
import ListItemHeader from 'components/backstage/plugins/ListItemHeader';

const ListItem = ({
  fields: { slug },
  frontmatter: {
    logoImage,
    humanName,
    integrationType,
  },
}) => (
  <div className="border-2 p-4 text-center" style={{ height: 350 }}>
    <ListItemHeader slug={slug} logoImage={logoImage} humanName={humanName} />

    <span
      className="bg-primary-100 text-primary-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2"
    >
      {integrationType}
    </span>
  </div>
);

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
        <article className="relative mx-auto lg:max-w-7xl mb-24">
          <div className="lg:flex justify-between items-center mb-12">
            <div className="mb-6 lg:mb-0">
              <div className="mb-2">
                <Headline size="small">Plugins & Integrations</Headline>
              </div>
              <Lead>Roadie supports all of these plugins and integrations out of the box.</Lead>
              <Lead>Please contact support if you need a plugin which is currently not supported.</Lead>
              <Lead>Customers on the Growth plan can <TextLink color="primary" to="/docs/custom-plugins/artifactory/">write their own plugins</TextLink>.</Lead>
            </div>

            <form>
              <Input
                type="text"
                onChange={setQuery}
                value={query}
                aria-label="Filter"
                placeholder="Filter"
                className="w-96"
              />
            </form>
          </div>


          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12">
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
