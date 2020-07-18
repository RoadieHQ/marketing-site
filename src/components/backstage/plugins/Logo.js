import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  logo: {
    margin: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

const Logo = ({ sharpImage, minHeight = 200, minWidth = 200 }) => {
  const classes = useStyles();
  const logoStyles = {
    backgroundImage: `url(${sharpImage.fixed.src})`,
    height: `${Math.max(minHeight, sharpImage.fixed.height)}px`,
    width: `${Math.max(minWidth, sharpImage.fixed.width)}px`,
  };

  return <div className={classes.logo} style={logoStyles} />;
};

export default Logo;
