import React, { useRef, useEffect, createElement, Fragment } from 'react';
import { render } from 'react-dom';
import { navigate } from 'gatsby';
import { autocomplete } from '@algolia/autocomplete-js';
import { Link } from 'components';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  link: {
    textDecoration: 'none',
  },
}));

const destroySearchOverlay = () => {
  // This works around a bug where the search dialog is not properly removed from the
  // page because we are working with Gatsby's client side refreshes. The search dialog
  // expects a page refresh to occur when navigating.
  // https://github.com/algolia/autocomplete/blob/45944e4c9f4e695039ab18e41284ff3d621774b7/packages/autocomplete-js/src/createAutocompleteDom.ts#L40
  //
  // Ideally we would be calling the onDetachedOverlayClose link from the GitHub URL
  // above but that seems to be a private function.
  document.body.classList.remove('aa-Detached');
};

/*
 * CSS for these components is loaded in gatsby-browser.js
 */

export const SearchResult = ({ hit, components }) => {
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

const AlgoliaAutocomplete = (props) => {
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
      ...props,
    }, [props]);

    return () => {
      search.destroy();
    };
  });

  return <div ref={searchBoxRef} />
};

export default AlgoliaAutocomplete;
