import React from 'react';
import { graphql } from 'gatsby';
import { renderToString } from 'react-dom/server';

import { SEO, StickyFooter } from 'components';
import Hero from 'components/careers/Hero';
import Footer from 'components/careers/Footer';
import Main from 'components/careers/Main';
import { backstageLink } from 'components/careers/links';

const ROLE_NAME = 'JavaScript & TypeScript Engineer';
const TYPEFORM_SLUG = 'javascript-engineer';
const HEADLINE = 'Get paid to become a top open-source contributor';

const ROLE = (() => {
  return [
    'Founding engineer at an early stage, VC-backed startup.',
    `Become a top contributor to the ${backstageLink} that Roadie is built on.`,
    `You'll build new product features from start to finish: through conception, 
     research, maintenance, operation, and polish.`,
    `Learn rapidly and work in all parts of the stack.`,
    `Work closely with experienced engineers who previously worked at Workday and Spotify.`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `You're excited to learn and apply new technical skills. Bonus: You share your enthusiasm with the world.`,
    `You love open source and community. You will do a ton of open source contribution in this role.`,
    `You've spent time as an engineer or equivalent role. It doesn't have to be loads of experience but some is essential.`,
    `You're fluent with JavaScript. TypeScript and React experience is a bonus.`,
    `You should be located within the timezone band: UTC-1 to UTC+2`,
    `A college degree is ${renderToString(<strong>NOT</strong>)} required.`,
  ];
})();

const OFFER = (() => {
  return [
    `€50,000 to €70,000 base salary (or equivalent in your currency).`,
    `0.25% to 0.75% stock options`,
    `27 days paid time off`,
    `Work remotely with flexible working hours.`,
  ];
})();

const PROCESS = (() => [
  `Application via Typeform. Click the big button below!`,
  `Meet with the engineering manager, to see if we're a mutual fit.`,
  `Technical assessment.`,
  `Meet the founder.`,
  `Yes/No decision.`,
])();

const Engineer = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <>
      <SEO title={`${ROLE_NAME} | Careers at ${siteTitle}`} description={HEADLINE} />

      <StickyFooter maxWidthBreakpoint="lg" location={location}>
        <Hero headline={HEADLINE} roleName={ROLE_NAME} typeformSlug={TYPEFORM_SLUG} />

        <Main role={ROLE} requirements={REQUIREMENTS} offer={OFFER} process={PROCESS} />

        <Footer typeformSlug={TYPEFORM_SLUG} />
      </StickyFooter>
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
