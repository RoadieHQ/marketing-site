import React, { useState } from 'react';
import { Sidebar, SidebarSectionList, SidebarItem } from 'components/tailwind/Sidebar';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import Button from 'components/tailwind/forms/Button';
import algoliasearch from 'algoliasearch/lite';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
// This import doesn't have any styling or JSS attached to it.
import { AlgoliaAutocomplete as Search } from 'components/AlgoliaAutocomplete';
import SearchResult from 'components/tailwind/AlgoliaAutocomplete/SearchResult';
import useMedia from 'react-use/lib/useMedia';
import classnames from 'classnames';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../../tailwind.config.js';

const fullTailwindConfig = resolveConfig(tailwindConfig);

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const getSearchSources = ({ query }) => {
  return [{
    sourceId: 'docs',
    getItemUrl({ item }) {
      return item.slug;
    },
    getItems() {
      return getAlgoliaResults({
        searchClient,
        queries: [{
          indexName: 'docs',
          query,
        }],
      });
    },
    templates: {
      item({ item, components }) {
        return <SearchResult hit={item} components={components} />;
      }
    }
  }];
};

const DocSidebar = () => {
  const isWide = useMedia(`(min-width: ${fullTailwindConfig.theme.screens.md})`);
  const [isOpen, setOpen] = useState(isWide);

  const toggleSliderOpen = () => {
    // It should never be possible to hide the nav on big screens. The feature only makes
    // selse on mobile.
    if (isOpen && !isWide) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <Sidebar>
      <div className="px-2 my-3">
        <div className="mb-1 flex justify-between items-center">
          <span>
            <strong>Documentation</strong>
          </span>
          <span className="inline md:hidden">
            <Button
              onClick={toggleSliderOpen}
              text={isOpen ? 'Hide nav' : 'Show nav'}
              icon={isOpen ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
              color="inset"
              size="small"
            />
          </span>
        </div>

        <div className="md:pr-3">
          <Search
            placeholder="Search"
            getSources={getSearchSources}
          />
        </div>
      </div>

      <nav className={classnames('overflow-y-hidden h-0', { 'h-full': isOpen })}>
        <SidebarSectionList title="Getting started">
          <SidebarItem
            to="/tailwind/docs/getting-started/getting-started-for-admins/"
            text="Configuring Roadie"
          />

          <SidebarItem to="/tailwind/docs/getting-started/adding-components/" text="Adding components" />
          <SidebarItem to="/tailwind/docs/getting-started/user-management/" text="Adding users" />

          <SidebarItem
            to="/docs/getting-started/technical-documentation/"
            text="Using TechDocs"
          />

          <SidebarItem to="/tailwind/docs/getting-started/openapi-specs/" text="Using OpenAPI specs" />

          <SidebarItem to="/tailwind/docs/getting-started/updating-the-ui/" text="Updating the UI" />
        </SidebarSectionList>

        <SidebarSectionList title="Integrations">
          {/* Alphabetical ordering */}
          <SidebarItem to="/tailwind/docs/integrations/bugsnag/" text="Bugsnag" />
          <SidebarItem to="/tailwind/docs/integrations/circleci/" text="CircleCI" />
          <SidebarItem to="/tailwind/docs/integrations/github-org/" text="GitHub Teams" />
          <SidebarItem to="/tailwind/docs/integrations/github-token/" text="GitHub via Token" />
          <SidebarItem to="/tailwind/docs/integrations/gcp/" text="Google Cloud Platform" />
          <SidebarItem to="/tailwind/docs/integrations/jira/" text="Jira" />
          <SidebarItem to="/tailwind/docs/integrations/kubernetes/" text="Kubernetes" />
          <SidebarItem to="/tailwind/docs/integrations/newrelic/" text="NewRelic" />
          <SidebarItem to="/tailwind/docs/integrations/opsgenie/" text="Opsgenie" />
          <SidebarItem to="/tailwind/docs/integrations/pagerduty/" text="PagerDuty" />
          <SidebarItem to="/tailwind/docs/integrations/prometheus/" text="Prometheus" />
          <SidebarItem to="/tailwind/docs/integrations/sentry/" text="Sentry" />
          <SidebarItem to="/tailwind/docs/integrations/snyk/" text="Snyk" />
          <SidebarItem to="/tailwind/docs/integrations/sonarqube/" text="SonarQube" />
        </SidebarSectionList>

        <SidebarSectionList title="Configuration">
          <SidebarItem to="/tailwind/docs/configuration/tech-radar/" text="Tech Radar" />
        </SidebarSectionList>

        <SidebarSectionList title="Custom plugins">
          <SidebarItem to="/tailwind/docs/custom-plugins/configuring" text="Configuring Custom Plugins" />
          <SidebarItem to="/tailwind/docs/custom-plugins/artifactory" text="Using Private Roadie Repository" />
        </SidebarSectionList>
      </nav>
    </Sidebar>
  );
};

export default DocSidebar;
