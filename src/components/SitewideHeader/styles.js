export default (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1em',
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
