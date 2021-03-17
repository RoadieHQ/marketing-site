import React from 'react';
import { createUseStyles } from 'react-jss';

import { LayoutControl, Lead, Headline, ButtonLink } from 'components';
import { applicationHref } from './links';

const useStyles = createUseStyles(() => ({
  hero: {
    textAlign: 'center',
  },
}));

const CareersHero = ({ headline, roleName, typeformSlug }) => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <LayoutControl maxWidthBreakpoint="lg">
        <Headline>
          <span>{headline}</span>
        </Headline>

        <Lead>Careers / {roleName}</Lead>

        <ButtonLink to={applicationHref(typeformSlug)}>
          <span>Apply for this role</span>
        </ButtonLink>
      </LayoutControl>
    </div>
  );
};

export default CareersHero;
