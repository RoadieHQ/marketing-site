import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { renderToString } from 'react-dom/server';

import { SEO, SitewideFooter, LayoutControl, SitewideHeader } from 'components';
import CriticalSkillsLink from 'components/careers/CriticalSkillsLink';
import Hero from 'components/careers/Hero';
import Footer from 'components/careers/Footer';
import Main from 'components/careers/Main';

const useStyles = createUseStyles(() => ({
  sitewideHeaderWrapper: {
    marginBottom: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

const ROLE_NAME = 'Frontend Engineer';
const TYPEFORM_SLUG = 'frontend-engineer';
const HEADLINE = 'Become a top open-source contributor';

const ROLE = (() => {
  const backstageLink = renderToString(
    <a href="https://github.com/spotify/backstage" target="_blank" rel="noopener noreferrer">
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

      <Hero headline={HEADLINE} roleName={ROLE_NAME} typeformSlug={TYPEFORM_SLUG} />

      <Main role={ROLE} requirements={REQUIREMENTS} offer={OFFER} process={PROCESS} />

      <Footer typeformSlug={TYPEFORM_SLUG} />

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
