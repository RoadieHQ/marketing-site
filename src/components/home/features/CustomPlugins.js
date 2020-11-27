import React from 'react';
import { TwoColumnLayout } from 'components';
import { createUseStyles } from 'react-jss';

import BackgroundImage from '../BackgroundImage';

const useStyles = createUseStyles(() => ({
  p: {
    fontSize: '2rem',
  },
}));

const Text = () => {
  const classes = useStyles();

  return (
    <div>
      <h2>Custom plugins</h2>
      <p className={classes.p}>Ready to roll, easy to extend.</p>
      <p className={classes.p}>
        Common SaaS tools come baked in. When you need to break out you can roll your own and deploy
        with a simple push.
      </p>
    </div>
  );
};

const FeatureCustomPlugins = ({ imageSide = 'right' }) => {
  const image = <BackgroundImage backgroundImage="url(undraw/undraw_building_websites_i78t.svg)" />;
  const text = <Text />;

  if (imageSide === 'right') {
    return (
      <div style={{ paddingLeft: 100 }}>
        <TwoColumnLayout leftContent={text} rightContent={image} />
      </div>
    );
  }

  return (
    <div style={{ paddingRight: 100 }}>
      <TwoColumnLayout leftContent={image} rightContent={text} />
    </div>
  );
};

export default FeatureCustomPlugins;
