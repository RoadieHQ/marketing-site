import React from 'react';
import { createUseStyles } from 'react-jss';
import { GatsbyImage } from 'gatsby-plugin-image';

const useStyles = createUseStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: ({ minHeight, sharpImage }) => Math.max(minHeight, sharpImage.gatsbyImageData.height),
  },
}));

const Logo = ({ sharpImage, minHeight = 200 }) => {
  const classes = useStyles({ minHeight, sharpImage });
  return (
    <div className={classes.root}>
      <GatsbyImage image={sharpImage.gatsbyImageData} />
    </div>
  );
};

export default Logo;
