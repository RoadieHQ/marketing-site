/*
 * Styles for Algolia Autocomplete. It would be preferential to remove these imports and use
 * JSS to apply styling directly to components instead so that we own the themeing end to end.
 * I can't seem to find a way to edit the template of the input which forms the search box though
 * so that diesn't seem to be an option. It is definitely possible to template the search
 * results and use JSS there. There is limited advantage to doing that when we would need to
 * import these files anyway.
 */
require('@algolia/autocomplete-theme-classic');
require('./src/algolia-autocomplete-theme-overrides.css');
