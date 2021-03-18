import React, { useState, useRef } from 'react';
import algoliasearch from 'algoliasearch/lite';
import useClickAway from 'react-use/lib/useClickAway';
import { createUseStyles } from 'react-jss';
import { InstantSearch } from 'react-instantsearch-dom';

import SearchBox from './SearchBox';
import SearchResult from './results';

const useStyles = createUseStyles(() => ({
  root: {
    position: 'relative',
  },
}));

const Search = ({ indices }) => {
  const classes = useStyles();
  const rootRef = useRef(null);
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  useClickAway(rootRef, () => {
    setFocus(false);
  });

  return (
    <div className={classes.root} ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox
          onFocus={() => setFocus(true)}
          hasFocus={hasFocus}
          placeholder="Search"
          aria-label="Search docs"
        />
        <SearchResult show={query && query.length > 0 && hasFocus} indices={indices} />
      </InstantSearch>
    </div>
  );
};

export default Search;
