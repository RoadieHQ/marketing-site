import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    marginBottom: 24,
  },

  p: {
    fontSize: '1.25rem',
    color: theme.palette.text.secondary,
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
