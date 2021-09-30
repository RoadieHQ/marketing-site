import React from 'react';
import { createUseStyles } from 'react-jss';

import kubernetes from '../../../content/assets/logos/kubernetes/logo-kubernetes.png';
import jenkins from '../../../content/assets/logos/jenkins/logo-jenkins.png';
import github from '../../../content/assets/logos/github/PNG/GitHub-Mark-120px-plus2.png';
import circleci from '../../../content/assets/logos/circle-ci/circle-ci-logo-only-black.png';
import jira from '../../../content/assets/logos/jira/jira_logo.png';
import sentry from '../../../content/assets/logos/sentry/sentry-glyph-dark.png';
import pagerduty from '../../../content/assets/logos/pagerduty/pagerduty-logo-light-200x200.png';
import sonarqube from '../../../content/assets/logos/sonarqube/logo-sonar.png';
import techRadar from '../../../content/assets/logos/tech-radar/radar.png';
import opsgenie from '../../../content/assets/logos/opsgenie/logo-opsgenie.png';
import bugsnag from '../../../content/assets/logos/bugsnag/bugsnag-logo.png';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  logo: {
    height: 80,
    padding: 8,
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    logo: {
      height: 160,
      padding: 16,
    },
  },
}));

const Item = ({ name, ...rest }) => {
  const classes = useStyles();

  return <img className={classes.logo} alt={`${name} logo`} title={name} {...rest} />;
};

const IntegrationsList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Item src={kubernetes} name="Kubernetes" />
      <Item src={jenkins} name="Jenkins" />
      <Item src={github} name="GitHub" />
      <Item src={circleci} name="Circle CI" />
      <Item src={sentry} name="Sentry" />
      <Item src={jira} name="Jira" />
      <Item src={pagerduty} name="PagerDuty" />
      <Item src={sonarqube} name="SonarQube" />
      <Item src={techRadar} name="Tech radar" />
      <Item src={opsgenie} name="Opsgenie" />
      <Item src={bugsnag} name="Bugsnag" />
    </div>
  );
};

export default IntegrationsList;
