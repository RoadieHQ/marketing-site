import React from 'react';
import { Sidebar, SidebarSection, SidebarSectionList, SidebarItem } from 'components/Sidebar';
import { createUseStyles } from 'react-jss';
import algoliasearch from 'algoliasearch/lite';
import { getAlgoliaHits } from '@algolia/autocomplete-js';
import Search, { SearchResult } from 'components/AlgoliaAutocomplete';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const useStyles = createUseStyles(() => ({
  searchWrapper: {
    paddingRight: 8,
  },

  title: {
    marginBottom: 4,
  },
}));

const getSearchSources = ({ query }) => {
  return [{
    sourceId: 'docs',
    getItemUrl({ item }) {
      return item.slug;
    },
    getItems() {
      return getAlgoliaHits({
        searchClient,
        queries: [{
          indexName: 'docs',
          query,
        }],
      });
    },
    templates: {
      item({ item }) {
        return <SearchResult hit={item} />;
      }
    }
  }];
};

const DocSidebar = () => {
  const classes = useStyles();
  return (
    <Sidebar>
      <SidebarSection>
        <div className={classes.title}>
          <strong>Documentation</strong>
        </div>
        <div className={classes.searchWrapper}>
          <Search
            placeholder="Search"
            getSources={getSearchSources}
          />
        </div>
      </SidebarSection>

      <SidebarSectionList title="Getting started">
        <SidebarItem
          to="/docs/getting-started/getting-started-for-admins/"
          text="Configuring Roadie"
        />

        <SidebarItem to="/docs/getting-started/adding-components/" text="Adding components" />

        <SidebarItem
          to="/docs/getting-started/technical-documentation/"
          text="Using TechDocs"
        />

        <SidebarItem to="/docs/getting-started/openapi-specs/" text="Using OpenAPI specs" />
      </SidebarSectionList>

      <SidebarSectionList title="Integrations">
        <SidebarItem to="/docs/integrations/github-token/" text="GitHub via Token" />
        <SidebarItem to="/docs/integrations/github-client/" text="GitHub via Oauth" />
        <SidebarItem to="/docs/integrations/github-org/" text="GitHub Teams" />
        <SidebarItem to="/docs/integrations/sentry/" text="Sentry" />
        <SidebarItem to="/docs/integrations/circleci/" text="CircleCI" />
        <SidebarItem to="/docs/integrations/jira/" text="Jira" />
        <SidebarItem to="/docs/integrations/pagerduty/" text="PagerDuty" />
        <SidebarItem to="/docs/integrations/gcp/" text="Google Cloud Platform" />
      </SidebarSectionList>

      <SidebarSectionList title="Custom plugins">
        <SidebarItem to="/docs/custom-plugins/" text="Installing Custom Plugins" />
      </SidebarSectionList>
    </Sidebar>
  );
};

export default DocSidebar;
