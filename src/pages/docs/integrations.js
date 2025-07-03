import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, Headline, Input, Lead, TextLink, Chip, TabInner } from 'components';
import classnames from 'classnames';

import DocsHeader from 'components/SitewideHeader/DocsHeader';
import ListItemHeader from 'components/backstage/plugins/ListItemHeader';
import customPluginsLogoImagePath from '../../../content/assets/logos/code/code.png';

const INTEGRATION_TYPE_FILTERS = Object.freeze({
  OSS_PLUGIN: 'oss plugin',
  INTEGRATION: 'integration',
  CATALOG_DATA_SOURCE: 'catalog data source',
  ALL: 'all',
});

const ListItem = ({
  fields: { slug },
  frontmatter: {
    logoImage,
    humanName,
    integrationType,
  },
  dashed = false
}) => (
  <div
    className={
      classnames('border-2 p-4 text-center', {
        'border-dashed': dashed,
      })
    }
    style={{ height: 350 }}
  >
    <ListItemHeader slug={slug} logoImage={logoImage} humanName={humanName} />
    <Chip label={integrationType} />
  </div>
);

const Tab = ({ label, isActive, onClick }) => (
  <div className="flex text-gray-400">
    <button onClick={onClick}>
      <TabInner label={label} isActive={isActive} />
    </button>
  </div>
);

const Header = ({ count }) => (
  <header className="mb-6 lg:mb-28">
    <div className="mb-2">
      <Headline size="small">Plugins & Integrations</Headline>
    </div>
    <Lead>Roadie supports {count} plugins and integrations out of the box. If we&apos;re missing something, <TextLink to="/docs/details/requesting-plugins/" color="primary">request it</TextLink>.</Lead>
    <Lead>Growth plan customers can <TextLink color="primary" to="/docs/custom-plugins/">write their own plugins</TextLink>.</Lead>
  </header>
);

const SearchAndFilterBar = ({
  integrationTypeFilter,
  setIntegrationTypeFilter,
  handleQueryInput,
  query,
}) => (
  <section className="md:flex justify-between items-center">
    <div className="flex mb-2">
      <Tab
        isActive={integrationTypeFilter === INTEGRATION_TYPE_FILTERS.ALL}
        label="All"
        onClick={() => setIntegrationTypeFilter(INTEGRATION_TYPE_FILTERS.ALL)}
      />

      <Tab
        isActive={integrationTypeFilter === INTEGRATION_TYPE_FILTERS.OSS_PLUGIN}
        label="Plugins"
        onClick={() => setIntegrationTypeFilter(INTEGRATION_TYPE_FILTERS.OSS_PLUGIN)}
      />

      <Tab
        isActive={integrationTypeFilter === INTEGRATION_TYPE_FILTERS.INTEGRATION}
        label="Integrations"
        onClick={() => setIntegrationTypeFilter(INTEGRATION_TYPE_FILTERS.INTEGRATION)}
      />

      <Tab
        isActive={integrationTypeFilter === INTEGRATION_TYPE_FILTERS.CATALOG_DATA_SOURCE}
        label="Catalog data source"
        onClick={() => setIntegrationTypeFilter(INTEGRATION_TYPE_FILTERS.CATALOG_DATA_SOURCE)}
      />
    </div>

    <form className="md:w-96">
      <Input
        type="text"
        onChange={handleQueryInput}
        value={query}
        aria-label="Filter"
        placeholder="Filter"
        fullWidth
      />
    </form>
  </section>
);

const CUSTOM_PLUGIN_PLACEHOLDER = {
  frontmatter: {
    humanName: 'Write your own',
    integrationType: 'OSS plugin',
    logoImage: {
      childImageSharp: {
        gatsbyImageData: {
          height: 100,
          images: {
            fallback: {
              src: customPluginsLogoImagePath,
            },
          },
          layout: 'fixed',
          width: 100,
        },
      },
    },
  },
  fields: {
    slug: '/docs/custom-plugins/',
  },
  dashed: true,
};

const DocsIntegrations = ({
  data: {
    site: { siteMetadata },
    integrations,
  },
  location,
}) => {
  const [query, setQuery] = useState('');
  const [integrationTypeFilter, setIntegrationTypeFilter] = useState(INTEGRATION_TYPE_FILTERS.ALL);

  const allIntegrations = [
    ...integrations.nodes,
    CUSTOM_PLUGIN_PLACEHOLDER,
  ];

  const count = integrations.nodes.length;

  let filteredIntegrations = [];
  if (query === '') {
    if (integrationTypeFilter === INTEGRATION_TYPE_FILTERS.ALL) {
      filteredIntegrations = [...allIntegrations];
    } else {
      filteredIntegrations = allIntegrations.filter(
        ({ frontmatter }) => frontmatter?.integrationType?.toLowerCase() === integrationTypeFilter
      );
    }
  } else {
    filteredIntegrations = allIntegrations.filter(({ frontmatter }) =>
      frontmatter?.humanName?.toLowerCase().includes(query.toLowerCase())
    );
  }

  const handleQueryInput = (queryValue) => {
    if (integrationTypeFilter !== INTEGRATION_TYPE_FILTERS.ALL) {
      setIntegrationTypeFilter(INTEGRATION_TYPE_FILTERS.ALL);
    }
    setQuery(queryValue);
  }

  return (
    <>
      <SEO
        title={`Backstage plugins & integrations docs | ${siteMetadata.title}`}
        description="Learn how to add Backstage plugins and other integrations to your Roadie Backstage experience."
      />
      <DocsHeader location={location} />

      <main className="pt-4 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto lg:max-w-7xl mb-24">
          <Header count={count} />

          <div className="border-b-2 border-gray-100 mb-6 pb-6">
            <SearchAndFilterBar
              integrationTypeFilter={integrationTypeFilter}
              setIntegrationTypeFilter={setIntegrationTypeFilter}
              handleQueryInput={handleQueryInput}
              query={query}
            />
          </div>


          <section className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12">
            {filteredIntegrations.map(({ fields, frontmatter, dashed }) => (
              <ListItem
                frontmatter={frontmatter}
                fields={fields}
                key={fields.slug}
                dashed={dashed}
              />
            ))}
          </section>
        </div>
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
      sort: { frontmatter: { humanName: ASC } },
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
