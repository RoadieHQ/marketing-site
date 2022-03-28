import React from 'react';
import { Popover } from '@headlessui/react';
import algoliasearch from 'algoliasearch/lite';
import { getAlgoliaResults } from '@algolia/autocomplete-js';

import { AlgoliaAutocomplete } from 'components/AlgoliaAutocomplete';
import SearchResult from 'components/AlgoliaAutocomplete/SearchResult';

import Logo from '../Logo';
import OpenMenuButton from './OpenMenuButton';
import DrawerMenu from './DrawerMenu';
import { Button } from 'components';

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

const DocsHeader = () => (
  <Popover className="relative bg-white z-20">
    <div className="max-w-full mx-auto px-2 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

        <div className="flex">
          <span>
            <Logo />
          </span>

          <span className="hidden md:inline ml-8">
            <AlgoliaAutocomplete
              placeholder="Search"
              getSources={getSearchSources}
              className="w-96"
            />
          </span>
        </div>

        <div className="-mr-2 -my-2 md:hidden">
          <OpenMenuButton />
        </div>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Button link={true} color="primary" to="/free-trial/" text="Try it free" />
        </div>
      </div>
    </div>

    <DrawerMenu />
  </Popover>
);

export default DocsHeader;
