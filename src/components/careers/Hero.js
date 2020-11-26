import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import { LayoutControl, Lead, Headline, ButtonLink } from 'components';

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

const CareersHero = ({ headline, roleName, applicationHref }) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.spacing, classes.hero)}>
      <LayoutControl maxWidthBreakpoint="lg">
        <Headline>
          <span>{headline}</span>
        </Headline>

        <Lead text={`Careers / ${roleName}`} />

        <ButtonLink
          text="Apply for this role"
          href={applicationHref}
          target="_blank"
          rel="noopener noreferrer"
        />
      </LayoutControl>
    </div>
  );
};

export default CareersHero;
