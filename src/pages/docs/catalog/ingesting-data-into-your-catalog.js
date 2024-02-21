import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, Headline, Input, Lead, TextLink, Chip } from 'components';
import classnames from 'classnames';

import DocsHeader from 'components/SitewideHeader/DocsHeader';
import ListItemHeader from 'components/backstage/plugins/ListItemHeader';
import { Sidebar } from '../../../components/doc';

const INTEGRATION_TYPE_FILTERS = Object.freeze({
  OSS_PLUGIN: 'oss plugin',
  INTEGRATION: 'integration',
  ALL: 'all',
});

const ListItem = ({
                    fields: { slug },
                    frontmatter: {
                      logoImage,
                      humanName,
                      entityKinds,
                      discovery,
                      experimental,
                    },
                    dashed = false
                  }) => (
  <div
    className={
      classnames('border-2 p-4 py-6 text-center', {
        'border-dashed': dashed,
      })
    }
    style={{}}
  >
    {discovery ? (<Chip color="green" label="Discovery Enabled" />) : (<Chip color="green" invisible label="Discovery Enabled" />)}
    <div className="break-after-all"></div>
    {experimental ? (<Chip color="red" label="Experimental" />) : (<Chip color="red" invisible label="Experimental" />)}
    <ListItemHeader slug={slug} logoImage={logoImage} humanName={humanName} />
    <div className={classnames('flex flex-row flex-wrap gap-1 align-center justify-center w-full')}>
      {entityKinds.map(kind => {
        return (<Chip key={kind} label={kind} />)
      })}
    </div>
  </div>
)
;

const Header = ({ count }) => (
  <header className="mb-6 lg:mb-28">
    <div className="mb-2">
      <Headline size="small">Entity Providers</Headline>
    </div>
    <Lead>Roadie supports {count} entity providers out of the box. If we&apos;re missing something, <TextLink
      to="/docs/details/requesting-plugins/" color="primary">request it</TextLink>.</Lead>
  </header>
);

const SearchAndFilterBar = ({
                              handleQueryInput,
                              query,
                            }) => (
  <section className="md:flex justify-between items-center">
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
    ...integrations.nodes
  ];

  const count = integrations.nodes.length;

  let filteredIntegrations = [];
  if (query === '') {
    if (integrationTypeFilter === INTEGRATION_TYPE_FILTERS.ALL) {
      filteredIntegrations = [...allIntegrations];
    } else {
      filteredIntegrations = allIntegrations.filter(({ frontmatter }) => (
        frontmatter.integrationType.toLowerCase() === integrationTypeFilter
      ));
    }
  } else {
    filteredIntegrations = allIntegrations.filter(({ frontmatter }) => {
      return frontmatter.humanName.toLowerCase().includes(query.toLowerCase());
    });
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
      <main className='md:flex pt-4 md:pt-0'>
        <Sidebar location={location} />

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
            {filteredIntegrations.reverse().map(({ fields, frontmatter, dashed }) => (
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
      sort: { fields: frontmatter___humanName, order: ASC }
      filter: { fileAbsolutePath: { regex: "/.+/content/docs/catalog/ingesting-data-into-your-catalog/.+/" } }
    ) {
      nodes {
        fields {
          slug
        }

        frontmatter {
          humanName
          entityKinds
          discovery
          experimental

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
