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
import Hero from 'components/careers/Hero';
import Footer from 'components/careers/Footer';

const useStyles = createUseStyles((theme) => ({
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
}));

const ROLE_NAME = 'Engineering Manager';
const TYPEFORM_SLUG = 'engineering-manager';
const HEADLINE = 'Build a high performance team';

const ROLE = (() => {
  return [
    'First engineering manager role at an early stage, well-funded startup.',
    `Set the tone of Roadie's engineering organization for the next 5+ years.`,
    `Work closely with the Backstage core-team and other contributors on a highly visible open source project.`,
    `Manage and enable a high-performance team of ex-Workday, Spotify and Weaveworks engineers.`,
    `Get stuck-in with customers and the broader community to solve problems, deliver value and gather feedback.`,
  ];
})();

const REQUIREMENTS = (() => {
  return [
    `At least 1 year of experience as an engineering manager.`,
    `Exceptional attention to detail and organizational skills.`,
    `Great spoken and written communication skills, effective with business and technical audiences.`,
    `Servant leader who motivates others by creating a climate in which people are able to do their best work.`,
    `You care about the business implications of anything you build. You're not just going after cool stuff — you understand the balance between craft, speed, and the bottom line.`,
    `5+ years experience as a software engineer or equivalent role.`,
    `Bonus: experience with cloud-native architectures.`,
    `You should be located within the timezone band: UTC-1 to UTC+2`,
    `A college degree is ${renderToString(<strong>NOT</strong>)} required.`,
  ];
})();

const OFFER = (() => {
  return [
    `$80,000 to $110,000 base salary or equivalent in your currency (adjusted for local cost of living).`,
    `0.25% to 1% stock options.`,
    `27 days paid time off.`,
    `Work remotely with flexible working hours.`,
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

const EngineeringManager = ({ data, location }) => {
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

export default EngineeringManager;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
