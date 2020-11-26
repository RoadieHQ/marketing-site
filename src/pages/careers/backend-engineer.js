import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { renderToString } from 'react-dom/server';

import {
  SEO,
  SitewideFooter,
  LayoutControl,
  InterstitialTitle,
  SitewideHeader,
  Lead,
  UnorderedList,
  OrderedList,
} from 'components';
import Mission from 'components/careers/Mission';
import CriticalSkillsLink from 'components/careers/CriticalSkillsLink';
import Hero from 'components/careers/Hero';
import Footer from 'components/careers/Footer';

const useStyles = createUseStyles((theme) => ({
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
}));

const ROLE_NAME = 'Backend Engineer';
const TYPEFORM_SLUG = 'backend-engineer';
const HEADLINE = 'Set the technical direction of Roadie';

const ROLE = (() => {
  const backstageLink = renderToString(
    <a href="https://github.com/spotify/backstage" target="_blank" rel="noopener noreferrer">
      the open-source platform
    </a>
  );

  return [
    'Founding engineer at an early stage, VC-backed startup.',
    `Architect and build a foundational software stack from almost nothing.`,
    `You'll build new product features from start to finish: through conception, 
     research, maintenance, operation, and polish.`,
    `Set the tone of Roadie's engineering organization for the next 5+ years.
     Influence the roadmap from an early stage.`,
    `Contribute back to ${backstageLink} that Roadie is built on.`,
    `Get stuck-in with customers, investors, and the broader community to gather feedback and
     help your work gain widespread adoption.`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `You've built and maintained codebases that have operated at high-scale.`,
    `You can readily learn most technologies as you go. To you, technologies are tools and
     trade-offs, not an ideology.`,
    `You care about the business implications of anything you build. You're not just going
     after cool stuff — you understand the balance between craft, speed, and the bottom line.`,
    `You like to work iteratively and in small chunks. Roadie is moving fast while searching for
     product market fit. In the short term, done is better than perfect.`,
    `You've spent meaningful time as a senior engineer or tech lead.`,
    `Bonus: You're fluent with Go or Kotlin and cloud-native technologies.`,
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

      <Hero headline={HEADLINE} roleName={ROLE_NAME} applicationHref={APPLICATION_HREF} />

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

      <Footer applicationHref={APPLICATION_HREF} />

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
