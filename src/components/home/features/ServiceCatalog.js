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
      <h2>Service catalog for discoverability</h2>
      <p className={classes.p}>Got more repos than you can keep up with?</p>
      <p className={classes.p}>
        Get control of the sprawl and improve new hire onboarding by making it easy to understand
        what each service is and who owns it.
      </p>
    </div>
  );
};

const FeatureServiceCatalog = ({ imageSide = 'right' }) => {
  const image = <BackgroundImage backgroundImage="url(undraw/undraw_the_search_s0xf.svg)" />;
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

export default FeatureServiceCatalog;
