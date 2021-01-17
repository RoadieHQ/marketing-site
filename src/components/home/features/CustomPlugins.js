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
    <h2>Custom plugins</h2>
    <p className={classes.p}>Ready to roll, easy to extend.</p>
    <p className={classes.p}>
      Common SaaS tools come baked in. When you need to break out you can roll your own and deploy
      with a simple push.
    </p>
  </div>
);

const FeatureCustomPlugins = ({ imageSide = 'right' }) => {
  const classes = useStyles();

  const image = (
    <BackgroundImage
      backgroundImage="url(undraw/undraw_building_websites_i78t.svg)"
      className={classes.backgroundImage}
    />
  );
  const text = <Text classes={classes} />;

  return <FeatureBlock text={text} image={image} imageSide={imageSide} />;
};

export default FeatureCustomPlugins;
