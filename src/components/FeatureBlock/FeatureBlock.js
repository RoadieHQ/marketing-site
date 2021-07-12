import React from 'react';
import { createUseStyles } from 'react-jss';
import TwoColumnLayout from '../TwoColumnLayout';

const useStyles = createUseStyles((theme) => ({
  textCol: {
    marginBottom: 16,

    '& ul': {
      fontSize: '2rem',
    },

    '& li': {
      marginBottom: '1.5em',
      listStyle: 'none',
    },

    '& p': {
      fontSize: '2rem',
      marginBottom: '1.5em',
    },

    '& h2': {
      marginBottom: '2rem',
    },
  },

  imgCol: {
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
    textCol: {
      marginBottom: 0,
      paddingRight: 8,
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
    <div>
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
    </div>
  );
};

export default FeatureBlock;
