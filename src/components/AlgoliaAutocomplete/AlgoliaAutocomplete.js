import React, { useRef, useEffect, createElement, Fragment, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { navigate } from 'gatsby';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch/lite';

import SearchResult from './SearchResult';
import destroySearchOverlay from './destroySearchOverlay';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

const getSources = ({ query }) => {
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
          params: {
            attributesToSnippet: ['title:10', 'excerpt:35'],
          },
        }],
      });
    },
    templates: {
      item({ item, components }) {
        return <SearchResult hit={item} components={components} />;
      },
      noResults() {
        return <p>No results for this query.</p>;
      },
    }
  }];
};

const AlgoliaAutocomplete = ({ as = 'div', className, ...rest }) => {
  const searchBoxRef = useRef();
  const rootRef = useRef();
  const panelRootRef = useRef();
  let search = null;

  const openSearchOnHotkeyPress = useCallback((event) => {
    if (event.key === '/') {
      search.setIsOpen(true);
      search.refresh();
    }
  }, []);

  useEffect(() => {
    if (!searchBoxRef.current) return undefined;

    search = autocomplete({
      container: searchBoxRef.current,
      renderer: { createElement, Fragment, render: () => {}, },
      render({ children, }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
      detachedMediaQuery: '',
      // openOnFocus is required to circumvent a bug: https://github.com/algolia/autocomplete/issues/843
      openOnFocus: true,
      navigator: {
        navigate({ itemUrl }) {
          destroySearchOverlay();
          navigate(itemUrl);
        },
      },
      getSources,
      ...rest,
    });

    document.addEventListener('keydown', openSearchOnHotkeyPress, false);

    return () => {
      search.destroy();
      document.removeEventListener('keydown', openSearchOnHotkeyPress, false);
    };
  }, [rest]);

  return React.createElement(as, { ref: searchBoxRef, className });
};

export default AlgoliaAutocomplete;
