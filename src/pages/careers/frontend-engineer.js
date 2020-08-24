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
import CriticalSkillsLink from '../../components/careers/CriticalSkillsLink';

const useStyles = createUseStyles((theme) => ({
  hero: {
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },

  spacing: {
    paddingBottom: 24,
    marginBottom: 40,
  },

  content: {
    paddingLeft: 16,
    paddingRight: 16,
    ...theme.preMadeStyles.content,
  },

  sitewideHeaderWrapper: {
    marginBottom: 40,
    paddingLeft: 16,
    paddingRight: 16,
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

const ROLE_NAME = 'Frontend Engineer';
const TYPEFORM_SLUG = 'frontend-engineer';
const HEADLINE = 'Become a top open-source contributor';

const ROLE = (() => {
  const backstageLink = renderToString(
    <a href="https://github.com/spotify/backstage" target="__blank">
      the open-source platform
    </a>
  );

  return [
    'Founding engineer at an early stage, VC-backed startup.',
    `Become a top contributor to the ${backstageLink} that Roadie is built on.`,
    `You'll build new product features from start to finish: through conception, 
     research, maintenance, operation, and polish.`,
    `Set the tone of Roadie's engineering organization for the next 5+ years.`,
    `Get stuck-in with customers, investors, and the broader community to gather feedback and
     help your work gain widespread adoption.`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `You can readily learn most technologies as you go. To you, technologies are tools and
     trade-offs, not an ideology.`,
    `You care about the business implications of anything you build. You're not just going
     after cool stuff — you understand the balance between craft, speed, and the bottom line.`,
    `You like to work iteratively and in small chunks. Roadie is moving fast while searching for
     product market fit. In the short term, done is better than perfect.`,
    `You've spent time as a senior engineer or equivalent role.`,
    `You're fluent with JavaScript. TypeScript and React experience is a bonus.`,
    `You should be located within the timezone band: UTC-1 to UTC+2`,
    `A college degree is ${renderToString(<strong>NOT</strong>)} required.`,
  ];
})();

const OFFER = (() => {
  const skillsLink = renderToString(<CriticalSkillsLink />);

  return [
    `$80,000 to $100,000 base salary (or equivalent in your currency).`,
    `0.25% to 1.25% stock options`,
    `27 days paid time off`,
    `Work remotely. Choose your own hours.`,
    `Happy to support relocation to Ireland under the ${skillsLink}.`,
  ];
})();

const PROCESS = (() => [
  `Application via Typeform. Click the big button below!`,
  `Meet with Roadie's founder, to see if we're a mutual fit.`,
  `Technical assessment.`,
  `Culture fit assessment.`,
  `Yes/No decision.`,
])();

const APPLICATION_HREF = `https://roadiehq.typeform.com/to/cdF3Ls?roleslug=${TYPEFORM_SLUG}&utm_source=roadie.io`;

const Engineer = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const classes = useStyles();

  return (
    <>
      <SEO title={`${ROLE_NAME} | Careers at ${siteTitle}`} description={HEADLINE} />

      <div className={classes.sitewideHeaderWrapper}>
        <LayoutControl maxWidthBreakpoint="lg">
          <SitewideHeader location={location} />
        </LayoutControl>
      </div>

      <div className={classnames(classes.spacing, classes.hero)}>
        <LayoutControl maxWidthBreakpoint="lg">
          <Headline>
            <span>{HEADLINE}</span>
          </Headline>

          <Lead text={`Careers / ${ROLE_NAME}`} />

          <ButtonLink
            text="Apply for this role"
            href={APPLICATION_HREF}
            target="__blank"
            rel="noopener noreferrer"
          />
        </LayoutControl>
      </div>

      <main className={classes.content}>
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
            <ButtonLink text="Apply for this role" href={APPLICATION_HREF} target="__blank" />

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

export default Engineer;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
