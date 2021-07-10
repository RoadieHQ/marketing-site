import React from 'react';
import { createUseStyles } from 'react-jss';
import TwoColumnLayout from '../TwoColumnLayout';

const useStyles = createUseStyles((theme) => ({
  featureBlockRoot: {},

  twoColumnLayoutRoot: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },

  rightSideFeatureBlockImgWrapper: {},

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    featureBlockRoot: {
      paddingLeft: 100,
      paddingRight: 100,
    },

    twoColumnLayoutRoot: {
      flexDirection: 'row',
    },

    rightSideFeatureBlockImgWrapper: {
      float: 'right',
    },
  },
}));

const FeatureBlock = ({ imgSrc, imgAlt, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.featureBlockRoot}>
      <TwoColumnLayout
        className={{
          root: classes.twoColumnLayoutRoot,
        }}
        rightContent={
          <div className={classes.rightSideFeatureBlockImgWrapper}>
            <img src={imgSrc} alt={imgAlt} />
          </div>
        }
        leftContent={children}
      />
    </div>
  );
};

export default FeatureBlock;
