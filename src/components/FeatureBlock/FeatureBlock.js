import React from 'react';
import { createUseStyles } from 'react-jss';
import TwoColumnLayout from '../TwoColumnLayout';

const useStyles = createUseStyles((theme) => ({
  textCol: {
    marginBottom: 16,

    '& p': {
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },

    '& h2': {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
  },

  imgCol: {
    textAlign: 'center',
  },

  twoColumnLayoutRoot: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1em',
  },

  img: {
    // Makes the img smaller rather than overflowing horizontally on mobile.
    maxWidth: '100%',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    textCol: {
      marginBottom: 0,
      paddingRight: 8,

      '& p': {
        fontSize: '1.9rem',
        marginBottom: '1.5em',
      },

      '& h2': {
        fontSize: '2.3rem',
        marginBottom: '2rem',
      },
    },

    imgCol: {
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
    textCol: {
      paddingLeft: 88,
    },

    imgCol: {
      paddingRight: 88,
    },
  },
}));

const FeatureBlock = ({ imgSrc, imgAlt, children }) => {
  const classes = useStyles();
  return (
    <TwoColumnLayout
      className={{
        root: classes.twoColumnLayoutRoot,
        leftCol: classes.textCol,
        rightCol: classes.imgCol,
      }}
      rightContent={
        <img src={imgSrc} alt={imgAlt} className={classes.img} />
      }
      leftContent={children}
    />
  );
};

export default FeatureBlock;
