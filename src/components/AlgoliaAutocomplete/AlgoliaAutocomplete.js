import React, { useRef, useEffect, createElement, Fragment } from 'react';
import { render } from 'react-dom';
import { navigate } from 'gatsby';
import { autocomplete } from '@algolia/autocomplete-js';
import destroySearchOverlay from './destroySearchOverlay';

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
