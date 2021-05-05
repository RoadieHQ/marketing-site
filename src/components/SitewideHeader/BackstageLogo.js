import React from 'react';
import { createUseStyles } from 'react-jss';

import backstageLogo from '../../../content/assets/logos/backstage/backstage-logo.svg';

const useStyles = createUseStyles({
  root: {
    height: '1em',
    width: '1em',
  },
});

const BackstageLogo = () => {
  const classes = useStyles();
  return <img src={backstageLogo} alt="Backstage logo - stacked Bs" className={classes.root} />;
};

export default BackstageLogo;
