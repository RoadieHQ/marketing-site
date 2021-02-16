import React from 'react';
import { createUseStyles } from 'react-jss';

import { LayoutControl, SitewideHeader, SitewideFooter } from 'components';

const useStyles = createUseStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    paddingLeft: 16,
    paddingRight: 16,
  },

  expandVertically: {
    flex: '1 0 auto',
    marginBottom: 40,
  },

  footerWrapper: {
    flexShrink: 0,
    borderTop: '1px solid #777',
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

      <div className={classes.footerWrapper}>
        <LayoutControl maxWidthBreakpoint={maxWidthBreakpoint}>
          <SitewideFooter />
        </LayoutControl>
      </div>
    </div>
  );
};

export default StickyFooter;
