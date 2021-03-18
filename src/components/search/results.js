import { Link } from 'gatsby';
import React from 'react';
import { connectStateResults, Highlight, Hits, Index, Snippet } from 'react-instantsearch-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: ({ show = false } = {}) => (show ? 'block' : 'none'),
    maxHeight: '80vh',
    overflow: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
    position: 'absolute',
    zIndex: 2,
    left: 0,
    top: '100%',
    width: '80vw',
    maxWidth: '30em',
    boxShadow: '0 0 5px 0',
    padding: 8,
    borderRadius: 2,
    background: 'white',
  },

  hitCount: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '1.3rem',
  },

  hits: {
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
    },

    '& li.ais-Hits-item': {
      marginBottom: '1em',
    },

    '& mark.ais-Highlight-highlighted': {
      backgroundColor: theme.palette.deepOrange[100],
      color: theme.palette.primary.main,
    },

    '& mark.ais-Snippet-highlighted': {
      backgroundColor: theme.palette.deepOrange[100],
    },

    '& a': {
      color: theme.palette.primary.main,
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

const SearchResult = ({ indices, show = false }) => {
  const classes = useStyles({ show });

  return (
    <div className={classes.root}>
      {indices.map((index) => (
        <HitsInIndex index={index} key={index.name} />
      ))}
    </div>
  );
};

export default SearchResult;
