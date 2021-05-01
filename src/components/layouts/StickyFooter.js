import React from 'react';
import { createUseStyles } from 'react-jss';

import { LayoutControl, SitewideHeader, SitewideFooter } from 'components';
import TopBanner from 'components/TopBanner';
import Hiring from 'components/TopBanner/Hiring';

const useStyles = createUseStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  expandVertically: {
    flex: '1 0 auto',
    marginBottom: 40,
  },

  footerWrapper: {
    flexShrink: 0,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    footerWrapper: {
      borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
  },
}));

const StickyFooter = ({ children, maxWidthBreakpoint, location, headerBottomBorder }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.expandVertically}>
        <TopBanner>
          <Hiring />
        </TopBanner>

        <SitewideHeader
          location={location}
          bottomBorder={headerBottomBorder}
          maxWidthBreakpoint={maxWidthBreakpoint}
        />

        <LayoutControl maxWidthBreakpoint={maxWidthBreakpoint}>{children}</LayoutControl>
      </div>

      <div className={classes.footerWrapper}>
        <LayoutControl maxWidthBreakpoint={maxWidthBreakpoint}>
          <SitewideFooter />
        </LayoutControl>
      </div>
    </div>
  );
};

export default StickyFooter;
