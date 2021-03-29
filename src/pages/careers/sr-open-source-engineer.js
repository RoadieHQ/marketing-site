import React from 'react';
import { graphql } from 'gatsby';
import { createUseStyles } from 'react-jss';

import { SEO, SitewideFooter, LayoutControl, SitewideHeader } from 'components';
import Hero from 'components/careers/Hero';
import Footer from 'components/careers/Footer';
import Main from 'components/careers/Main';
import { backstageLink } from 'components/careers/links';

const useStyles = createUseStyles(() => ({
  sitewideHeaderWrapper: {
    marginBottom: 40,
  },
}));

const ROLE_NAME = 'Senior open-source engineer';
const TYPEFORM_SLUG = 'sr-open-source-engineer';
const HEADLINE = 'Become an integral part of leading our open-source efforts.';

const ROLE = (() => {
  return [
    `Contributing publicly to open source projects like ${backstageLink}`,
    `Building  and setting the direction for open source software for Roadie`,
    `Be part of the ${backstageLink} community by taking part in discussions on discord and GitHub`,
    `Aim to become a maintainer on the ${backstageLink} repository`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `1-3 years of contributing to open source projects`,
    `You are comfortable speaking to groups of people representing our projects`,
    `You are skilled at community management`,
    `You have written large applications in Typescript or JavaScript`,
    `You have been writing in React for at least 3 years`,
    `You are equally comfortable working in the back-end`,
    `You like to share excellent documentation or blog posts`,
    `Ability to work and communicate in an online distributed environment`,
    `Bonus: You maintain your own open-source projects`,
    `Bonus: You have experience running applications in the cloud`,
    `Bonus: You have familiarity with Kubernetes.`,
  ];
})();

const OFFER = (() => {
  return [
    `€90,000 base salary (or equivalent in your currency).`,
    `0.25% to 0.5% stock options`,
    `27 days paid time off`,
    `Work remotely with flexible working hours.`,
  ];
})();

const PROCESS = (() => [
  `Application via Typeform. Click the big button below!`,
  `Meet with the engineering manager, to see if we're a mutual fit.`,
  `Technical assessment which is broken up into two parts, a programming part and a system design part.`,
  `A sample of writing for us to review, from your blog or something new.`,
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

      <Main
        showOpenSource={true}
        role={ROLE}
        requirements={REQUIREMENTS}
        offer={OFFER}
        process={PROCESS}
      />

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
