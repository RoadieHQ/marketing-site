export default (theme) => ({
  root: {
    marginBottom: '1em',
    borderBottom: ({ bottomBorder }) =>
      bottomBorder ? `1px solid ${theme.palette.grey[300]}` : 'none',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '1em',
  },

  fullScreenNav: {
    display: 'none',
  },

  textLinkWrapper: {
    marginTop: -4,
  },

  hamburgerMenuWrapper: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      paddingRight: 0,
    },

    fullScreenNav: {
      display: 'flex',
    },

    hamburgerMenuWrapper: {
      display: 'none',
    },
  },
});
