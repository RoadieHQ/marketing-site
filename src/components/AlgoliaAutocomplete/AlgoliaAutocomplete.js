import React, { useRef, useEffect, createElement, Fragment } from 'react';
import { render } from 'react-dom';
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

const AlgoliaAutocomplete = ({ as = 'div', className, ...rest }) => {
  const searchBoxRef = useRef();

  useEffect(() => {
    if (!searchBoxRef.current) return undefined;

    const search = autocomplete({
      container: searchBoxRef.current,
      renderer: { createElement, Fragment },
      detachedMediaQuery: '',
      navigator: {
        navigate({ itemUrl }) {
          destroySearchOverlay();
          navigate(itemUrl);
        },
      },
      render({ children }, root) {
        render(children, root);
      },
      getSources,
      ...rest,
    }, [rest]);

    return () => {
      search.destroy();
    };
  });

  return React.createElement(as, { ref: searchBoxRef, className });
};

export default AlgoliaAutocomplete;
