import React from 'react';
import { graphql } from 'gatsby';

import { SEO, StickyFooter } from 'components';
import Hero from 'components/careers/Hero';
import Footer from 'components/careers/Footer';
import Main from 'components/careers/Main';
import { backstageLink } from 'components/careers/links';
import {renderToString} from "react-dom/server";

const ROLE_NAME = 'Open-source engineer';
const TYPEFORM_SLUG = 'sr-open-source-engineer';
const HEADLINE = 'Drive our open-source efforts.';

const ROLE = (() => {
  return [
    `Contributing publicly to open source projects like ${backstageLink}`,
    `Building and setting the direction for open source software for Roadie`,
    `Be part of the ${backstageLink} community by taking part in discussions on discord and GitHub`,
    `Aim to become a maintainer on the ${backstageLink} repository`,
    `You get to collaborate with kind, talented engineers that used to work in Spotify and Workday`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `1-3 years of software engineering collaborating within a team`,
    `You are comfortable speaking to groups of people representing our projects`,
    `You have written large applications in Typescript or JavaScript`,
    `You have been writing in React for at least 3 years`,
    `You are comfortable working in the back-end`,
    `You like to share excellent documentation or blog posts`,
    `Ability to work and communicate in an online distributed environment`,
    `A college degree is ${renderToString(<strong>NOT</strong>)} required.`,
    `Bonus: You maintain your own open-source projects`,
    `Bonus: You are skilled at community management (or experience doing user support)`,
    `Bonus: You have experience running applications in the cloud`,
    `Bonus: You have familiarity with Kubernetes.`,
  ];
})();

const OFFER = (() => {
  return [
    `This is an excellent opportunity to join a fast-growing venture-backed start-up`,
    `We offer a competitive salary based on experience`,
    `We provide a meaningful stock options package`,
    `27 days paid time off`,   
    `Working remotely with flexible working arrangements.`
  ];
})();

const PROCESS = (() => [
  `Application via Typeform. Click the big button below!`,
  `Meet with the engineering manager, to see if we're a mutual fit.`,
  `Technical assessment which is broken up into two parts, a programming part and a system design part.`,
  `A sample of writing for us to review, from your blog or something new.`,
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

        <Main
          showOpenSource={true}
          role={ROLE}
          requirements={REQUIREMENTS}
          offer={OFFER}
          process={PROCESS}
        />

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
