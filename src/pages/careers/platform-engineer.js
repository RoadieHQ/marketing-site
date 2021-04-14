import React from 'react';
import { graphql } from 'gatsby';
import { renderToString } from 'react-dom/server';

import { SEO, StickyFooter } from 'components';
import Hero from 'components/careers/Hero';
import Footer from 'components/careers/Footer';
import Main from 'components/careers/Main';
import { backstageLink } from 'components/careers/links';

const ROLE_NAME = 'Software Engineer - Platform';
const TYPEFORM_SLUG = 'platform-engineer';
const HEADLINE = 'Take an active role in shaping the future of our platform';

const ROLE = (() => {
  return [
    `As one of our engineers you will build out a scalable, secure and highly available solution built on the cloud (currently AWS) that will host ${backstageLink} for our customers.`,
    `You will build new product features from start to finish: through conception, research, maintenance, operation, and polish.`,
    `You get to collaborate with kind, talented engineers that used to work in Spotify and Workday.`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `2 years or more working in a similar role.`,
    `Proficiency in a high level programming language.`,
    `Familiarity with a cloud platform (AWS, GCP, etc.).`,
    `Experience operating highly available and highly secure systems.`,
    `Experience with Kubernetes.`,
    `Experience as a user of any Infrastructure as code tool (terraform, Chef, Puppet, etc.).`,
    `A college degree is ${renderToString(<strong>NOT</strong>)} required.`,
    `You're excited to learn and apply new technical skills. Bonus: You share your enthusiasm with the world.`,
    `Bonus: Worked with AWS EKS.`,
    `Bonus: Have experience in TypeScript/JavaScript.`,
    `Bonus: Have Pulumi or Terraform experience.`,
  ];
})();

const OFFER = (() => {
  return [
    `This is an excellent opportunity to join a fast-growing venture-backed start-up`,
    `We offer a competitive salary based on experience`,
    `We provide a meaningful stock options package`,
    `27 days paid time off`,   
    `Working remotely flexible working arrangements.`
  ];
})();

const PROCESS = (() => [
  `Application via Typeform. Click the big button below!`,
  `Meet with the engineering manager, to see if we're a mutual fit.`,
  `Technical assessment which is broken up into two parts, a programming part and a system design part.`,
  `Culture-add interview`,
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
