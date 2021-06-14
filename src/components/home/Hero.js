import React from 'react';
import { createUseStyles } from 'react-jss';
import { Lead, Headline, TwoColumnLayout, ButtonLinkCallToAction } from 'components';

import BackgroundImage from './BackgroundImage';
import backstageScreenshot from '../../../content/assets/backstage-screenshot.png';

const useStyles = createUseStyles(() => ({
  leadWrapper: {
    marginBottom: 24,
  },

  callToActionWrapper: {
    marginBottom: 24,
  },

  backgroundImage: {
    backgroundPosition: 'right top',
    backgroundSize: '85%',
  },

  leftCol: {
    paddingTop: 0,
  },

  rightCol: {
    flexGrow: 1.1,
  },
}));

const Hero = ({ headline, lead }) => {
  const classes = useStyles();

  return (
    <TwoColumnLayout
      className={{
        leftCol: classes.leftCol,
        rightCol: classes.rightCol,
      }}
      leftContent={
        <>
          <Headline>
            <span>{headline}</span>{' '}
          </Headline>

          <div className={classes.leadWrapper}>
            <Lead>{lead}</Lead>
          </div>

          <div className={classes.callToActionWrapper}>
            <ButtonLinkCallToAction />
          </div>
        </>
      }
      rightContent={
        <BackgroundImage
          className={classes.backgroundImage}
          backgroundImage={`url(${backstageScreenshot})`}
        />
      }
    />
  );
};

export default Hero;
