import './src/stylesheets/soehne.css';
import './src/stylesheets/tailwind.css';
import './src/stylesheets/table-of-contents-sidebar.css';

import './src/stylesheets/Avatar.css';
import './src/stylesheets/Arrow.css';
import './src/stylesheets/Badge.css';
import './src/stylesheets/Banner.css';
import './src/stylesheets/Button.css';
import './src/stylesheets/Card.css';
import './src/stylesheets/Code.css';
import './src/stylesheets/Container.css';
import './src/stylesheets/Flex.css';
import './src/stylesheets/Grid.css';
import './src/stylesheets/Header.css';
import './src/stylesheets/HoverMenu.css';
import './src/stylesheets/Icon.css';
import './src/stylesheets/IconButton.css';
import './src/stylesheets/IconContainer.css';
import './src/stylesheets/Image.css';
import './src/stylesheets/Link.css';
import './src/stylesheets/LinkCard.css';
import './src/stylesheets/List.css';
import './src/stylesheets/ListItem.css';
import './src/stylesheets/Mask.css';
import './src/stylesheets/Section.css';
import './src/stylesheets/Select.css';
import './src/stylesheets/Separator.css';
import './src/stylesheets/Skeleton.css';
import './src/stylesheets/Status.css';
import './src/stylesheets/Sub.css';
import './src/stylesheets/Sup.css';
import './src/stylesheets/Switch.css';
import './src/stylesheets/Tab.css';
import './src/stylesheets/Table.css';
import './src/stylesheets/Text.css';
import './src/stylesheets/TextField.css';
import './src/stylesheets/VideoThumb.css';

import './src/stylesheets/padding.css';
import './src/stylesheets/margin.css';

import './src/stylesheets/ds.css';

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
