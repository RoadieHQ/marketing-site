import React from 'react';
import { TwoColumnLayout } from 'components';
import { createUseStyles } from 'react-jss';

import BackgroundImage from './BackgroundImage';

const useStyles = createUseStyles((theme) => ({
  root: {},

  twoColumnLayoutRoot: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },

  backgroundImage: {
    height: 250,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      paddingLeft: 100,
      paddingRight: 100,
    },

    twoColumnLayoutRoot: {
      flexDirection: 'row',
    },
  },
}));

const FeatureBlock = ({ text, backgroundImageUrl, imageSide }) => {
  const classes = useStyles();
  const className = {
    root: classes.twoColumnLayoutRoot,
  };

  const image = (
    <BackgroundImage backgroundImage={backgroundImageUrl} className={classes.backgroundImage} />
  );

  if (imageSide === 'right') {
    return (
      <div className={classes.root}>
        <TwoColumnLayout leftContent={text} rightContent={image} className={className} />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <TwoColumnLayout leftContent={image} rightContent={text} />
    </div>
  );
};

export default FeatureBlock;
