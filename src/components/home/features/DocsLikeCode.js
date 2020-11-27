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
      <h2>Docs that get read</h2>
      <p className={classes.p}>
        <span role="img" aria-label="one">
          1️⃣
        </span>{' '}
        Commit markdown docs and API specs alongside your code.
      </p>
      <p className={classes.p}>
        <span role="img" aria-label="two">
          2️⃣
        </span>{' '}
        Beautiful technical documentation appears with the services in your catalog.
      </p>
    </div>
  );
};

const FeatureDocsLikeCode = ({ imageSide = 'right' }) => {
  const image = <BackgroundImage backgroundImage="url(undraw/undraw_education_f8ru.svg)" />;
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

export default FeatureDocsLikeCode;
