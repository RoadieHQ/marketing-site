import React from 'react';
import { Link } from 'components';
import destroySearchOverlay from 'components/AlgoliaAutocomplete/destroySearchOverlay';

const SearchResult = ({ hit, components }) => {
  return (
    <div className="aa-ItemWrapper">
      <Link
        to={hit.slug}
        className="no-underline text-primary-600"
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
