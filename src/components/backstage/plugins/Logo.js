import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  root: {
    margin: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: ({ sharpImage }) => `url(${sharpImage.fixed.src})`,
    height: ({ minHeight, sharpImage }) => Math.max(minHeight, sharpImage.fixed.height),
    width: ({ minWidth, sharpImage }) => Math.max(minWidth, sharpImage.fixed.width),
  },
}));

const Logo = ({ sharpImage, minHeight = 200, minWidth = 200 }) => {
  const classes = useStyles({ minHeight, minWidth, sharpImage });
  return <div className={classes.root} />;
};

export default Logo;
