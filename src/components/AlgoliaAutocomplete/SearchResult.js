import React from 'react';

// These search results don't need all of the handling for outbound links that components/Link
// adds to it's logic. They're also mounted outside of the Gatsby DOM tree, so they don't have
// the same access to the Router as normal components do. I (David) couldn't figure out how to
// fix this, and it was preventing me from using useLocation in the Link component, so I am
// opting to simply use gatsby/Link here instead.
import { Link } from 'gatsby';
import destroySearchOverlay from 'components/AlgoliaAutocomplete/destroySearchOverlay';

const SearchResult = ({ hit, components }) => (
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

export default SearchResult;
