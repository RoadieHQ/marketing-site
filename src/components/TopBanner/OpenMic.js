import React from 'react';
import { createUseStyles } from 'react-jss';
import backstageOpenMicLogo from '../../../content/assets/backstage-open-mic-logo.png';

const useStyles = createUseStyles(() => ({
  image: {
    height: 16,
    verticalAlign: 'middle',
    marginRight: 8,
  },
}));

const OpenMic = () => {
  const classes = useStyles();
  return (
    <>
      <img
        src={backstageOpenMicLogo}
        alt="The open mic logo. A purple swirl to the right of the capitalized words open mic"
        className={classes.image}
      />
      Join us at the first ever Backstage Open Mic community event on <strong>March 31st</strong>.
    </>
  );
};

export default OpenMic;
