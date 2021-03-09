import algoliasearch from 'algoliasearch/lite';
import { createUseStyles } from 'react-jss';
import { createRef, React, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import useClickOutside from './useClickOutside';
import SearchBox from './SearchBox';
import SearchResult from './results';

const useStyles = createUseStyles(() => ({
  root: {
    position: 'relative',
    margin: '0.6em 0',
  },
}));

export default function Search({ indices }) {
  const classes = useStyles();
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <div className={classes.root}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult show={query && query.length > 0 && hasFocus} indices={indices} />
      </InstantSearch>
    </div>
  );
}
