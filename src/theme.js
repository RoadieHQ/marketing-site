/* Need to use nodejs compatible import/export here because this file is required by
 * gatsby-config.js.
 *
 * Restart gatsby develop to pick up changes in this file.
 */

const deepOrange = require('@material-ui/core/colors/deepOrange').default;
const grey = require('@material-ui/core/colors/grey').default;
const indigo = require('@material-ui/core/colors/indigo').default;

const PALETTE_PRIMARY_MAIN = deepOrange[600];

const theme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 720,
      lg: 960,
      xl: 1280,
    },
  },

  palette: {
    grey,

    deepOrange,

    primary: {
      light: deepOrange[400],
      main: PALETTE_PRIMARY_MAIN,
      dark: deepOrange[900],
    },

    secondary: {
      light: indigo[400],
      main: indigo[600],
      dark: indigo[900],
    },

    // TODO: Names are confusing. secondary is basically a lighter primary, but then primary
    // light is extremely light. "Light" is supposed to mean "this contrasts on a dark background".
    text: {
      // Black on white
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      // White on Black
      primaryLight: 'rgba(255, 255, 255, 0.87)',
      secondaryLight: 'rgba(247, 247, 247, 0.87)',
    },
  },

  typography: {
    bold: {
      // We have a real Soehne font for this weight
      fontWeight: 600,
    },
  },

  preMadeStyles: {
    // These styles are set on the root element of HTML nodes which have compiled Markdown injected
    // into then with dangerouslySetInnerHTML. There is no good way to use JSS with markdown
    // so styling the root element is all we can do.
    content: {
      maxWidth: '70rem',

      '& p': {
        marginTop: 0,
      },

      '& ul': {
        paddingLeft: '1em',
      },

      '& ol': {
        paddingLeft: '1em',
      },

      '& li': {
        marginBottom: 'calc(1.75rem / 2)',
      },

      '& a, & a:visited': {
        color: PALETTE_PRIMARY_MAIN,
      },

      '& dl': {
        // The whole page will scroll horizontally without this.
        overflowX: 'scroll',
      },

      '& dt': {
        fontWeight: 600,
      },

      '& dd': {
        lineHeight: '2rem',
      },

      '& table': {
        borderCollapse: 'collapse',
        marginBottom: '1em',
        display: 'block',
        maxWidth: 'fit-content',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      },

      '& th, & td': {
        border: '1px solid #999',
        padding: '0.5rem',
        textAlign: 'left',
      },

      '& twitter-tweet': {
        marginLeft: 'auto',
        marginRight: 'auto',
      },

      '@media (min-width: 720px)': {
        '& ul': {
          paddingLeft: '3em',
        },

        '& ol': {
          paddingLeft: '3em',
        },

        '& h2': {
          marginTop: '4rem',
        },

        '& h3': {
          marginTop: '2rem',
        },

        '& blockquote': {
          background: grey[100],
          borderLeft: '10px solid #ccc',
          margin: '1.5em 10px',
          padding: '0.5em 10px',
        },
      },
    },
  },
};

module.exports = theme;
