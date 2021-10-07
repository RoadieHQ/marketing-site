import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';
import destroySearchOverlay from './destroySearchOverlay';

const useStyles = createUseStyles(() => ({
  link: {
    textDecoration: 'none',
  },
}));

const SearchResult = ({ hit, components }) => {
  const classes = useStyles();
  console.log('hit', hit);
  return (
    <div className="aa-ItemWrapper">
      <Link
        to={hit.slug}
        className={classes.link}
        onClick={destroySearchOverlay}
        data-testid={`algolia-search-result-link-${hit.slug.replaceAll('/', '-')}`}
      >
        <div className="aa-ItemContent">
          <div className="aa-ItemContentBody">
            <div className="aa-ItemContentTitle">
              <components.Snippet hit={hit} attribute="title" />
            </div>
            <div className="aa-ItemContentDescription">
              <components.Snippet hit={hit} attribute="excerpt" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchResult;
