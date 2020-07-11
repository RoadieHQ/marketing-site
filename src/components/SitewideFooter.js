import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { LayoutControl } from 'components';

const useStyles = createUseStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 40,

    color: theme.palette.grey[700],
    textDecoration: 'none',

    '& a': {
      color: theme.palette.grey[700],
      textDecoration: 'none',
    },
  },

  nonFirstLink: {
    marginLeft: 32,
  },
}));

const SitewideFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <LayoutControl>
        <div className={classes.inner}>
          <span>© {new Date().getFullYear()} Larder, Inc. All rights reserved.</span>

          <nav>
            <Link to="/terms">Terms of service</Link>
            {/*<Link to="/privacy" className={classes.nonFirstLink}>Privacy</Link>*/}
          </nav>
        </div>
      </LayoutControl>
    </footer>
  );
};

export default SitewideFooter;
