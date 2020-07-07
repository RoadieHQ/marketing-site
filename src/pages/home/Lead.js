import React from 'react';
import { createUseStyles } from 'react-jss';
import grey from '@material-ui/core/colors/grey';

const useStyles = createUseStyles(() => ({
  root: {
    marginBottom: 24,
  },

  p: {
    fontSize: '1.25rem',
    color: grey[700],
    lineHeight: 1.7,
  },
}));

const Lead = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.p}>
        {`Use Backstage without worrying about the cost of operation,
          upgrading plugins or making it fit with your internal tools.`}
      </p>
    </div>
  );
};

export default Lead;
