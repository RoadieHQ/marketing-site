import React from 'react';
import { graphql, Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { renderToString } from 'react-dom/server';

import {
  SEO,
  SitewideFooter,
  LayoutControl,
  InterstitialTitle,
  SitewideHeader,
  Lead,
  Headline,
  UnorderedList,
  OrderedList,
  ButtonLink,
} from 'components';
import Mission from '../../components/careers/Mission';

const useStyles = createUseStyles((theme) => ({
  hero: {
    textAlign: 'center',
  },

  spacing: {
    paddingBottom: 24,
    marginBottom: 40,
  },

  content: {
    ...theme.preMadeStyles.content,

    '& ul': {
      ...theme.preMadeStyles.content['& ul'],
      paddingLeft: '3em',
    },

    '& ol': {
      ...theme.preMadeStyles.content['& ol'],
      paddingLeft: '3em',
    },
  },

  sitewideHeaderWrapper: {
    marginBottom: 40,
  },

  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    marginLeft: 16,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const ROLE = (() => {
  const backstageLink = renderToString(
    <a href="https://github.com/spotify/backstage" target="__blank">
      the open-source platform
    </a>
  );

  const skillsLink = renderToString(
    <a
      href="https://dbei.gov.ie/en/What-We-Do/Workplace-and-Skills/Employment-Permits/Permit-Types/Critical-Skills-Employment-Permit/"
      target="__blank"
    >
      critical skills VISA program
    </a>
  );

  return [
    'Sub-5 employee at a fast-paced, VC-backed startup.',
    `Architect and build a foundational software stack from almost nothing.`,
    `You&apos;ll build new product features from start to finish: through conception, 
     research, maintenance, operation, and polish.`,
    `Set the tone of the Roadie&apos;s engineering organization for the next 5+ years.`,
    `Contribute back to ${backstageLink} that Roadie is built on.`,
    `Get stuck-in with customers, investors, and the broader community to gather feedback and
     help your work gain widespread adoption.`,
    `Happy to support relocation to Ireland under the ${skillsLink}.`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `You&apos;ve built and maintained codebases that have operated at high-scale.`,
    `You can readily learn most technologies as you go. To you, technologies are tools and
     tradeoffs, not an ideology.`,
    `You care about the business implications of anything you build. You&apos;re not just going
     after cool stuff — you understand the balance between craft, speed, and the bottom line.`,
    `You like to work iteratively and in small chunks. Roadie is moving fast while searching for
     product market fit. In the short term, done is better than perfect.`,
    `You&apos;ve spent meaningful time as a senior engineer or tech lead.`,
    `Bonus: You&apos;re fluent with Go, Kotlin, Postgres, Docker or Kubernetes.`,
    `A college degree is ${renderToString(<strong>NOT</strong>)} required.`,
  ];
})();

const OFFER = (() => [
  `$90,000 to $110,000 base salary (or equivalent in your currency).`,
  `0.25% to 1.25% stock options`,
  `28 days paid time off`,
  `Work remotely from anywhere in the world. Choose your own hours.`,
  `Support for health insurance, remote work and health and wellness.`,
])();

const PROCESS = (() => [
  `Application via Typeform. Click the big button below!`,
  `Meet with Roadie's founder, to see if we're a mutual fit.`,
  `Technical assessment.`,
  `Culture fit assessment.`,
  `Yes/No decision.`,
])();

const APPLICATION_HREF =
  'https://larder.typeform.com/to/cdF3Ls?roleslug=backend-engineer&utm_source=roadie.io';

const BackendEngineer = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO title={`Careers | ${siteTitle}`} />

      <div className={classes.sitewideHeaderWrapper}>
        <LayoutControl maxWidthBreakpoint="lg">
          <SitewideHeader location={location} />
        </LayoutControl>
      </div>

      <div className={classnames(classes.spacing, classes.hero)}>
        <LayoutControl maxWidthBreakpoint="lg">
          <Headline>
            <span>Set the technical direction of Roadie</span>
          </Headline>

          <Lead text="Careers / Backend Engineer" />

          <ButtonLink
            text="Apply for this role"
            href={APPLICATION_HREF}
            target="__blank"
            disabled
          />
        </LayoutControl>
      </div>

      <main className={classnames('typography-body', classes.content)}>
        <div className={classes.spacing}>
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="Our mission" />
            <Mission classes={classes} />
          </LayoutControl>
        </div>

        <div className={classes.spacing}>
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="The role" />
            <UnorderedList content={ROLE} />
          </LayoutControl>
        </div>

        <div className={classes.spacing}>
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="The requirements" />
            <UnorderedList content={REQUIREMENTS} />
          </LayoutControl>
        </div>

        <div className={classes.spacing}>
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="The offer" />
            <UnorderedList content={OFFER} />
          </LayoutControl>
        </div>

        <div className={classes.spacing}>
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="The process" />
            <Lead text="All applicants will receive a response within 3 days. We can't always be perfect, but we can be quick." />
            <OrderedList content={PROCESS} />
          </LayoutControl>
        </div>
      </main>

      <div className={classnames(classes.spacing, classes.hero)}>
        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="Sound good?" />
          <div>
            <ButtonLink
              text="Apply for this role"
              href={APPLICATION_HREF}
              target="__blank"
              disabled
            />

            <Link to="/careers" className={classnames('typography-mono', classes.link)}>
              See all roles
            </Link>
          </div>
        </LayoutControl>
      </div>

      <LayoutControl maxWidthBreakpoint="lg">
        <SitewideFooter />
      </LayoutControl>
    </>
  );
};

export default BackendEngineer;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
