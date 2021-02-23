import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { renderToString } from 'react-dom/server';

import { SEO, SitewideFooter, LayoutControl, SitewideHeader } from 'components';
import Hero from 'components/careers/Hero';
import Footer from 'components/careers/Footer';
import Main from 'components/careers/Main';
import { backstageLink } from 'components/careers/links';

const useStyles = createUseStyles(() => ({
  sitewideHeaderWrapper: {
    marginBottom: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

const ROLE_NAME = 'Platform Engineer';
const TYPEFORM_SLUG = 'platform-engineer';
const HEADLINE = 'Help companies adopt backstage.io';

const ROLE = (() => {
  return [
    `As one of our engineers you will build out a scalable, secure and highly available solution built on the cloud (currently AWS) that will host ${backstageLink} for our customers.`,
    `You will build new product features from start to finish: through conception, research, maintenance, operation, and polish.`,
    `You will define the monitoring requirements and implement incident resolution solutions.`,
    `You get to collaborate with talented engineers that used to work in Spotify and Workday.`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `Proficiency in a high level programming language.`,
    `Familiarity with Amazon Web Services products.`,
    `Experience with Kubernetes.`,
    `Experience operating highly available and highly secure systems.`,
    `Knowledge of building infrastructure through Infrastructure as code.`,
    `A college degree is ${renderToString(<strong>NOT</strong>)} required.`,
    `You're excited to learn and apply new technical skills. Bonus: You share your enthusiasm with the world.`,
    `2 years or more working in a similar role.`,
    `Bonus: Worked with AWS EKS.`,
    `Bonus: Have experience in Typescript/Javascript.`,
    `Bonus: Have Pulumi or Terraform experience.`,
  ];
})();

const OFFER = (() => {
  return [
    `€60,000 to €80,000 base salary (or equivalent in your currency).`,
    `0.25% to 0.5% stock options`,
    `27 days paid time off`,
    `Work remotely with flexible working hours.`,
  ];
})();

const PROCESS = (() => [
  `Application via Typeform. Click the big button below!`,
  `Meet with the engineering manager, to see if we're a mutual fit.`,
  `Technical assessment which is broken up into two parts, a programming part and a system design part.`,
  `Meet the founder.`,
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
