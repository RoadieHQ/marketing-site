import React from 'react';
import { createUseStyles } from 'react-jss';

import { LayoutControl, SitewideHeader, SitewideFooter } from 'components';

const useStyles = createUseStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  expandVertically: {
    flex: '1 0 auto',
  },

  noShrink: {
    flexShrink: 0,
  },
}));

const StickyFooter = ({ children, maxWidthBreakpoint, location }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.expandVertically}>
        <LayoutControl maxWidthBreakpoint={maxWidthBreakpoint}>
          <SitewideHeader location={location} />

          {children}
        </LayoutControl>
      </div>

      <div className={classes.noShrink}>
        <LayoutControl maxWidthBreakpoint={maxWidthBreakpoint}>
          <SitewideFooter />
        </LayoutControl>
      </div>
    </div>
  );
};

export default StickyFooter;
