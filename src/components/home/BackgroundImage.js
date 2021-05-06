import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import undrawContentTeam from '../../../content/assets/undraw/undraw_content_team_3epn.svg';

const useStyles = createUseStyles(() => ({
  image: {
    backgroundSize: 'contain',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

const BackgroundImage = ({
  backgroundImage = `url(${undrawContentTeam})`,
  className,
}) => {
  const classes = useStyles();
  return <div className={classnames(classes.image, className)} style={{ backgroundImage }} />;
};

export default BackgroundImage;
