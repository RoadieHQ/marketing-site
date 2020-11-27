import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  image: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      height: '100%',
      width: '100%',
    },
  },
}));

const BackgroundImage = ({ backgroundImage = 'url(undraw/undraw_content_team_3epn.svg)' }) => {
  const classes = useStyles();
  return <div className={classes.image} style={{ backgroundImage }} />;
};

export default BackgroundImage;
