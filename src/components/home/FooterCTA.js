import React from 'react';
import { GetInstanceFormCallToAction } from 'components/CallToAction';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  callToActionWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },

  callToActionWrapperInner: {
    maxWidth: 700,
    width: '100%',
  },
}));

const FooterCTA = () => {
  const classes = useStyles();
  return (
    <div className={classes.callToActionWrapper}>
      <div className={classes.callToActionWrapperInner}>
        <GetInstanceFormCallToAction />
      </div>
    </div>
  );
};

export default FooterCTA;
