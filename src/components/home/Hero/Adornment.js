import React from 'react';
import { createUseStyles } from 'react-jss';

import BackgroundImage from '../BackgroundImage';
import backstageScreenshot from '../../../../content/assets/backstage-screenshot-long.png';
import playIcon from '../../../../content/assets/play-icon.png';

const useStyles = createUseStyles((theme) => ({
  button: {
    height: '100%',
  },

  buttonLabel: {
    visibility: 'hidden',
  },

  screenshot: {
    cursor: 'pointer',
    backgroundSize: 'contain',
    backgroundPosition: 'center top',
    borderRadius: '4px 4px 0 0',
  },

  playIcon: {
    backgroundSize: '20%',
    backgroundPosition: 'center',
  },

  [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
    screenshot: {
      backgroundSize: 'cover',
      borderRadius: '8px 8px 0 0',
    },
  },
}));


const Adornment = ({ openModal }) => {
  const classes = useStyles();

  return (
    <div
      role="button"
      onClick={openModal}
      onKeyPress={openModal}
      className={classes.button}
      tabIndex={0}
    >
      <BackgroundImage
        className={classes.screenshot}
        backgroundImage={`url(${backstageScreenshot})`}
      >
        <BackgroundImage
          className={classes.playIcon}
          backgroundImage={`url(${playIcon})`}
        />
      </BackgroundImage>

      <p className={classes.buttonLabel}>Open a modal and play a video</p>
    </div>
  );
};

export default Adornment;
