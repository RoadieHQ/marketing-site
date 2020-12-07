import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import { LayoutControl, Lead, Headline, ButtonLink } from 'components';
import { applicationHref } from './links';

const useStyles = createUseStyles(() => ({
  hero: {
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },

  spacing: {
    paddingBottom: 24,
    marginBottom: 40,
  },
}));

const CareersHero = ({ headline, roleName, typeformSlug }) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.spacing, classes.hero)}>
      <LayoutControl maxWidthBreakpoint="lg">
        <Headline>
          <span>{headline}</span>
        </Headline>

        <Lead text={`Careers / ${roleName}`} />

        <ButtonLink to={applicationHref(typeformSlug)}>
          <span>Apply for this role</span>
        </ButtonLink>
      </LayoutControl>
    </div>
  );
};

export default CareersHero;
