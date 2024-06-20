import './src/stylesheets/soehne.css';
import './src/stylesheets/tailwind.css';
import './src/stylesheets/table-of-contents-sidebar.css';

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

import 'prismjs/themes/prism.css';
import './src/stylesheets/prismjs-theme-overrides.css';
// eslint-disable-next-line
import SwaggerUI from 'swagger-ui';
// eslint-disable-next-line
import SwaggerUIStandalonePreset from 'swagger-ui-dist/swagger-ui-standalone-preset';
import './src/stylesheets/swagger-ui.css';

window.SwaggerUI = SwaggerUI;
window.SwaggerUIStandalonePreset = SwaggerUIStandalonePreset;
const INTERCOM_APP_ID = 'qegbmsy6';

const isHidden = () => process.env.NODE_ENV === `production` && typeof Intercom === `function`;

const onInitialClientRender = () => {
  if (!isHidden()) {
    return;
  }

  window.Intercom('boot', {
    app_id: INTERCOM_APP_ID,
    hide_default_launcher: isHidden,
  });
};

const onRouteUpdate = function () {
  if (!isHidden()) {
    return;
  }

  window.Intercom('update');
};

export { onInitialClientRender, onRouteUpdate };
