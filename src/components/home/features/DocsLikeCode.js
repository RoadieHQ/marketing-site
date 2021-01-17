import React from 'react';
import { createUseStyles } from 'react-jss';

import BackgroundImage from '../BackgroundImage';
import FeatureBlock from '../FeatureBlock';

const useStyles = createUseStyles(() => ({
  p: {
    fontSize: '2rem',
  },

  backgroundImage: {
    height: 300,
  },
}));

const Text = ({ classes }) => (
  <div>
    <h2>Docs that get read</h2>
    <p className={classes.p}>
      <span role="img" aria-label="one">
        1️⃣
      </span>
      {'  '}
      Commit markdown docs and API specs alongside your code.
    </p>
    <p className={classes.p}>
      <span role="img" aria-label="two">
        2️⃣
      </span>
      {'  '}
      Beautiful technical documentation appears with the services in your catalog.
    </p>
  </div>
);

const FeatureDocsLikeCode = ({ imageSide = 'right' }) => {
  const classes = useStyles();

  const image = (
    <BackgroundImage
      backgroundImage="url(undraw/undraw_education_f8ru.svg)"
      className={classes.backgroundImage}
    />
  );
  const text = <Text classes={classes} />;

  return <FeatureBlock text={text} image={image} imageSide={imageSide} />;
};

export default FeatureDocsLikeCode;
