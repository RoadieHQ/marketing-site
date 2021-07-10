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
    paddingBottom: '1em',
  },

  fullScreenNav: {
    display: 'none',
  },

  hamburgerMenuWrapper: {
    // The hamburger menu tends to sit too close to the scrollbar on mobile if we don't apply
    // some padding. It can be difficult to tap when the scrollbar is in the way.
    paddingRight: 4,
  },

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
