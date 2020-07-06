/* Need to use nodejs compatible import/export here because this file is required by
 * gatsby-config.js.
 *
 * Restart gatsby develop to pick up changes in this file.
 *
 * This file is not loaded in the browser, only the object it exports is. There is no need to
 * worry about the file size.
 */

const { createMuiTheme } = require('@material-ui/core/styles');

const theme = createMuiTheme({
  typography: {
    // The corresponding @font-face is set in gatsby-ssr.js.
    fontFamily: 'Overpass, Arial',
  },
});

module.exports = theme;
