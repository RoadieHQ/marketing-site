import React from 'react';
import { createUseStyles } from 'react-jss';

import BackgroundImage from '../BackgroundImage';
import FeatureBlock from '../FeatureBlock';

const useStyles = createUseStyles(() => ({
  p: {
    fontSize: '2rem',
  },

  backgroundImage: {
    height: 250,
  },
}));

const Text = ({ classes }) => (
  <div>
    <h2>Service catalog for discoverability</h2>
    <p className={classes.p}>Got more repos than you can keep up with?</p>
    <p className={classes.p}>
      Get control of the sprawl and improve new hire onboarding by making it easy to understand what
      each service is and who owns it.
    </p>
  </div>
);

const FeatureServiceCatalog = ({ imageSide = 'right' }) => {
  const classes = useStyles();

  const image = (
    <BackgroundImage
      backgroundImage="url(undraw/undraw_the_search_s0xf.svg)"
      className={classes.backgroundImage}
    />
  );
  const text = <Text classes={classes} />;

  return <FeatureBlock text={text} image={image} imageSide={imageSide} />;
};

export default FeatureServiceCatalog;
