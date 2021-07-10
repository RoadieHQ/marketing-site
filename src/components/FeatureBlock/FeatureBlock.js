import React from 'react';
import { createUseStyles } from 'react-jss';
import TwoColumnLayout from '../TwoColumnLayout';

const useStyles = createUseStyles((theme) => ({
  leftCol: {
    marginBottom: 16,
  },

  rightCol: {
    textAlign: 'center',
  },

  twoColumnLayoutRoot: {
    display: 'flex',
    flexDirection: 'column',
  },

  img: {
    // Makes the img smaller rather than overflowing horizontally on mobile.
    maxWidth: '100%',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    leftCol: {
      marginBottom: 0,
      paddingRight: 8,
    },

    rightCol: {
      paddingLeft: 8,
      textAlign: 'left',
    },

    twoColumnLayoutRoot: {
      flexDirection: 'row',
    },

    img: {
      float: 'right',
    },
  },

  [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
    leftCol: {
      paddingLeft: 88,
    },

    rightCol: {
      paddingRight: 88,
    },
  },
}));

const FeatureBlock = ({ imgSrc, imgAlt, children }) => {
  const classes = useStyles();
  return (
    <div>
      <TwoColumnLayout
        className={{
          root: classes.twoColumnLayoutRoot,
          leftCol: classes.leftCol,
          rightCol: classes.rightCol,
        }}
        rightContent={
          <img src={imgSrc} alt={imgAlt} className={classes.img} />
        }
        leftContent={children}
      />
    </div>
  );
};

export default FeatureBlock;
