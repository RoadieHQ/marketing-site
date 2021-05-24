import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { Button, LayoutControl, InterstitialTitle, TextLink } from 'components';
import { applicationHref } from './links';

const useStyles = createUseStyles(() => ({
  hero: {
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 24,
    marginBottom: 40,
  },

  spacer: {
    marginLeft: 16,
  },
}));

const CareersFooter = ({ typeformSlug }) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.spacing, classes.hero)}>
      <LayoutControl maxWidthBreakpoint="lg">
        <InterstitialTitle text="Sound good?" />
        <div>
          <Button
            to={applicationHref(typeformSlug)}
            link={true}
            text="Apply for this role"
            color="primary"
          />

          <span className={classes.spacer}>
            <TextLink
              to="/careers/"
              color="primary"
              className="typography-mono"
            >
              See all roles
            </TextLink>
          </span>
        </div>
      </LayoutControl>
    </div>
  );
};

export default CareersFooter;
