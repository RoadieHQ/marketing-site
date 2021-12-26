import './src/stylesheets/soehne.css';
import './src/stylesheets/tailwind.css';

/*
 * Styles for Algolia Autocomplete. It would be preferential to remove these imports and use
 * JSS to apply styling directly to components instead so that we own the themeing end to end.
 *
 * I can't seem to find a way to edit the template of the input which forms the search box though
 * so that diesn't seem to be an option. It is definitely possible to template the search
 * results and use JSS there. There is limited advantage to doing that when we would need to
 * import these files anyway.
 */
import '@algolia/autocomplete-theme-classic';
import './src/stylesheets/algolia-autocomplete-theme-overrides.css';

import './src/stylesheets/prism.css';
