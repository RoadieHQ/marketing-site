import { Link } from 'gatsby';
import React from 'react';
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from 'react-instantsearch-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    // display: ${props => (props.show ? `block` : `none`)},
    display: 'block',
    maxHeight: '80vh',
    overflow: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
    position: 'absolute',
    zIndex: 2,
    right: 0,
    top: '100%',
    marginTop: '0.5em',
    width: '80vw',
    maxWidth: '30em',
    boxShadow: '0 0 5px 0',
    padding: '1em',
    borderRadius: 2,
    // background: ${({ theme }) => theme.background};
  },

  hitCount: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  hits: {
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
    },

    '& li.ais-Hits-item': {
      marginBottom: '1em',
    },

    '& a': {
      // color: ${({ theme }) => theme.foreground};
    },

    '& h4': {
      marginBottom: '0.2em',
    },
  },
}));

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  const classes = useStyles();

  return hitCount > 0 ? (
    <div className={classes.hitCount}>
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null;
});

const PageHit = ({ hit }) => (
  <div>
    <Link to={hit.slug}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);

const HitsInIndex = ({ index }) => {
  const classes = useStyles();

  return (
    <Index indexName={index.name}>
      <HitCount />
      <Hits className={classes.hits} hitComponent={PageHit} />
    </Index>
  );
};

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
);

export default SearchResult;
